(function($) {
	/* Variável Globais */
	var endereco = "../modelo/geral/corpo_docente/";
	var area_de_conhecimento;
	var hobby;

	/***************************************************************
	****                     FUNÇÃO PRINCIPAL                   ****
	***************************************************************/

	seleciona_professor = function (professor){
		// Nome
		$("#nome").load(endereco + professor + "/nome.txt",function(responseText, textStatus, XMLHttpRequest){
			if (textStatus == "success") {
				$('.honeycombs').hide('slow');
				$('.chart-container').show('slow');
				$('#voltar_para_colmeia').show(0);
			}
			if (textStatus == "error") {
				alert ("Desculpe o transtorno, mas este docente não consta na nossa base de dados.");
			}
		});

		// Foto
		$("#foto").attr("src", endereco + professor + "/foto.jpg");

		//Area de Conhecimento
		$.get(endereco + professor + "/area_de_conhecimento.txt", function(data){
			area_de_conhecimento=data
		});

		//Currículo
		$.get(endereco + professor + "/curriculo_lattes.txt", function(data){
			$("#curriculo_lattes").attr("href", data);
		});

		// Agenda
		$.get(endereco + professor + "/agenda.txt", function(data){
			$("#disciplinas_ministradas").attr("href", data);
		}).fail(function(){
			$("#disciplinas_ministradas").attr("href", endereco + professor + "/agenda.pdf");
		});

		// Hobby
		$.get(endereco + professor + "/hobby.txt", function(data){
			hobby=data
		});

	}

	$('#voltar_para_colmeia').click(function(){
		$('.honeycombs').show('slow');
		$('.chart-container').hide('slow');
		$('#voltar_para_colmeia').hide(0);
	});
	/***************************************************************
	****                     FUNÇÕES DO POPUP                   ****
	***************************************************************/
	$('#area_de_conhecimento').click(function(){
		$(".popUp").show("slow", "swing");
		$("#popup_titulo").text("Área de Conhecimento CNPq");
		$("#popup_descricao").text(area_de_conhecimento);
	});
	$('#hobby').click(function(){
		$(".popUp").show("slow", "swing");
		$("#popup_titulo").text("Hobby pessoal");
		$("#popup_descricao").text(hobby);
	});
	fechar = function(){
		$(".popUp").hide("slow", "swing");
	};
}(jQuery));
