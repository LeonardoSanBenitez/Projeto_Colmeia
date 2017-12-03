angular.module("bench", []); 																// Cria o módulo
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
	
	$scope.historico = [
		{pergunta: "01", resposta: "05"},
		{pergunta: "02", resposta: "04"},
		{pergunta: "03", resposta: "05"},
		{pergunta: "04", resposta: "03"},
		{pergunta: "05", resposta: "03"},
		{pergunta: "06", resposta: "03"},
		{pergunta: "07", resposta: "03"},
		{pergunta: "08", resposta: "04"}
	];
 
	/*---------------------------------------------------------------------*/
	/*--                        Variaveis Globais                        --*/
	/*---------------------------------------------------------------------*/
	var usuario = 'Leonardo';
	var area = 'corpo_docente';
	var pergunta = 0;
	var ultima_pergunta = 8;
	
	/*---------------------------------------------------------------------*/
	/*--                       Funções Principais                        --*/
	/*---------------------------------------------------------------------*/
	$scope.proxima_pagina = function(resposta) {
		if (resposta) console.log (usuario + ' clicou em: ' + resposta);
		
		if (pergunta < ultima_pergunta){
			pergunta = pergunta + 1;
			carrega_questionario(area, pergunta);			
		}
		else if (pergunta == ultima_pergunta){
			pergunta = pergunta + 1;
			carrega_grafico();
		}
		else {
			pergunta = 1;
			//area=proxima area;
			//ultima_pergunta = 12;
			$('#grafico').fadeOut(250);
			carrega_questionario(area, pergunta);
		}
	}
	
	var carrega_questionario = function(area, n){
		transicao ('#questionario', '#questionario');
		setTimeout(function(){
			$http.get('modelo/' + area + '/titulo.txt').then(function (response) {$scope.area_titulo = response.data;});
			$scope.id_titulo = 'CD ' + n; 
			$http.get('modelo/' + area + '/cd_' + n + '/id.txt')		.then(function (response) {$scope.id_texto = response.data;}, function (response) {alert ('Desculpe o transtorno, mas esta pergunta não consta na nossa base de dados.');});
			$http.get('modelo/' + area + '/cd_' + n + '/r1.txt')		.then(function (response) {$scope.r1_texto = response.data;});
			$http.get('modelo/' + area + '/cd_' + n + '/r3.txt')		.then(function (response) {$scope.r3_texto = response.data;});
			$http.get('modelo/' + area + '/cd_' + n + '/r5.txt')		.then(function (response) {$scope.r5_texto = response.data;});
			$http.get('modelo/' + area + '/cd_' + n + '/id.txt')		.then(function (response) {$scope.ajuda_titulo = response.data;});
			$http.get('modelo/' + area + '/cd_' + n + '/descricao.txt')	.then(function (response) {$scope.ajuda_texto = response.data;});
			console.log ('carregou:' + n);
		}, 150);
	}
	
	var carrega_grafico = function (){
		transicao ('#questionario', '#grafico');
		console.log ('carregou grafico');
	}
	
	/*---------------------------------------------------------------------*/
	/*--                        Funções Auxiliares                       --*/
	/*---------------------------------------------------------------------*/	
	transicao = function (atual, proxima){
		$(atual).fadeOut(150);
		setTimeout(function(){
			$(proxima).fadeIn(150);
		}, 250);		
	}
});