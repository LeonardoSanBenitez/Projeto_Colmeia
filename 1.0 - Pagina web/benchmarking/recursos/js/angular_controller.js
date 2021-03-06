﻿angular.module("bench", []); 																// Cria o módulo
angular.module("bench").controller("bench_controller", function($scope, $window, $http){	// Cria o montroller

	/*---------------------------------------------------------------------*/
	/*--                              SCOPES                             --*/
	/*---------------------------------------------------------------------*/
	$scope.area_titulo;
	$scope.id_titulo;
	$scope.id_texto;
	$scope.r1_texto;
	$scope.r3_texto;
	$scope.r5_texto;
	$scope.ajuda_titulo;
	$scope.ajuda_texto;
	
	$scope.historico = {};
	//delete $scope.historico['8'];
	//$scope.historico['9'] = 4;
	
	/*---------------------------------------------------------------------*/
	/*--                        Variaveis Globais                        --*/
	/*---------------------------------------------------------------------*/
	var usuario = 'Leonardo';
	var area = 'corpo_docente';
	var pergunta = 0;
	var ultima_pergunta = 8;
	
	var time = 150;
	
	/*---------------------------------------------------------------------*/
	/*--                    Lógica de funcionamento                      --*/
	/*---------------------------------------------------------------------*/
	$scope.proxima_pagina = function(resposta) {
		// resposta válida (não inicializando): grava a resposta
		if (resposta){								
			var x = String(pergunta);
			setTimeout(function(){
				$scope.historico[x] = resposta;
			}, time);
		} 
		
		// caso normal: vai para a proxima pergunta
		if (pergunta < ultima_pergunta){			
			pergunta = pergunta + 1;
			transicao ('#questionario', '#questionario');
			setTimeout(function(){
				carrega_questionario(area, pergunta);
			}, time);			
		}
		
		// na ultima pergunta: vai para o gráfico
		else if (pergunta == ultima_pergunta){		
			pergunta = pergunta + 1;
			transicao ('#questionario', '#grafico');
			setTimeout(function(){
				carrega_grafico();
			}, time);
		}
		
		// no gráfico: vai para a primeira pergunta  
		else {										
			pergunta = 1;
			//area=proxima area;
			//ultima_pergunta = 12;
			$scope.historico = {};
			$('#grafico').fadeOut(time);
			transicao ('#questionario', '#questionario');
			setTimeout(function(){
				carrega_questionario(area, pergunta);
			}, time);
		}
	};

	/*---------------------------------------------------------------------*/
	/*--                  Comunicação com o servidor                     --*/
	/*---------------------------------------------------------------------*/	
	var carrega_questionario = function(area, n){
		$http.get('modelo/' + area + '/titulo.txt').then(function (response) {$scope.area_titulo = response.data;});
		$scope.id_titulo = 'CD ' + n; 
		$http.get('modelo/' + area + '/cd_' + n + '/id.txt')		.then(function (response) {$scope.id_texto = response.data;}, function (response) {alert ('Desculpe o transtorno, mas esta pergunta não consta na nossa base de dados.');});
		$http.get('modelo/' + area + '/cd_' + n + '/r1.txt')		.then(function (response) {$scope.r1_texto = response.data;});
		$http.get('modelo/' + area + '/cd_' + n + '/r3.txt')		.then(function (response) {$scope.r3_texto = response.data;});
		$http.get('modelo/' + area + '/cd_' + n + '/r5.txt')		.then(function (response) {$scope.r5_texto = response.data;});
		$http.get('modelo/' + area + '/cd_' + n + '/id.txt')		.then(function (response) {$scope.ajuda_titulo = response.data;});
		$http.get('modelo/' + area + '/cd_' + n + '/descricao.txt')	.then(function (response) {$scope.ajuda_texto = response.data;});
		$scope.$apply();
	};
	
	var carrega_grafico = function (){
		//$window.open('http://127.0.0.1/edsa-benchmarking/servidor.php?usuario=' + usuario + '&r1='+$scope.historico[1] + '&r2='+$scope.historico[2] + '&r3='+$scope.historico[3] + '&r4='+$scope.historico[4] + '&r5='+$scope.historico[5] + '&r6='+$scope.historico[6] + '&r7='+$scope.historico[7] + '&r8='+$scope.historico[8], '_blank');
		// $http({
			// method: 'POST',
			// url: 'http://127.0.0.1/edsa-benchmarking/servidor.php',
			// data: 'usuario=puto$r1=5',
			// headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		// })
		var url = 'http://127.0.0.1/edsa-benchmarking/servidor.php?usuario=' + usuario + '&r1='+$scope.historico[1] + '&r2='+$scope.historico[2] + '&r3='+$scope.historico[3] + '&r4='+$scope.historico[4] + '&r5='+$scope.historico[5] + '&r6='+$scope.historico[6] + '&r7='+$scope.historico[7] + '&r8='+$scope.historico[8];
		$http.post(url);
	};
	
	/*---------------------------------------------------------------------*/
	/*--                        Funções Auxiliares                       --*/
	/*---------------------------------------------------------------------*/	
	transicao = function (atual, proxima){
		$(atual).fadeOut(time);
		setTimeout(function(){
			$(proxima).fadeIn(time);
		}, time*2);		
	};
});