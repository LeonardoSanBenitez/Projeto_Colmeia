(function($) {
	/* Variável Globais */
	var endereco = "../modelo/geral/tour_virtual/daeln/";

	/***************************************************************
	****                     FUNÇÃO PRINCIPAL                   ****
	***************************************************************/
	seleciona_laboratorio = function (laboratorio){
		// Nome
		$("#titulo_pagina").load(endereco + laboratorio + "/nome.txt",function(responseText, textStatus, XMLHttpRequest){
			if (textStatus == "success") {
				$('.honeycombs').hide('slow');
				$("#bc_1").show();
			}
			if (textStatus == "error") {
				alert ("Desculpe o transtorno, mas este laboratorio não consta na nossa base de dados.");
			}
		});
		// Descrição
		$("#descricao_pagina").load(endereco + laboratorio + "/descricao.txt");

		// Ver 360
		$("#ver360").load(endereco + laboratorio + "/ver360.txt");
		
		// Vídeo
		$("#video").load(endereco + laboratorio + "/video.txt");

		//Tabela de instrumentos
		$("#instrumentos").load(endereco + laboratorio + "/instrumentos.html");
	}
}(jQuery));
