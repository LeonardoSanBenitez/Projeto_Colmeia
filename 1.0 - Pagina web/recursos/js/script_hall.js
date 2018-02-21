(function($) {
	var local = "home";
	bvoltar = function(departamento){
		if (local == "daeln-departamento"){
			$(".conteudo").hide("slow", "swing");
			$("#DAELN").show("slow", "swing");	
			local = "daeln";						// Volta para o daeln
		} else if (local == "daeln-horarios"){
			$(".conteudo").hide("slow", "swing");
			$("#departamento").show("slow", "swing");
			local = "daeln-departamento";
		} else{
			$("#voltar").hide("slow", "swing");
			$(".conteudo").hide("slow", "swing");
			$("#triagem").show("slow", "swing");
			local = "home";						// Volta para a página inicial
		}
	}
	
	/* Funções da triagem */
	ifsc = function(){	
/*		//troca o background para hall.jpg
		var element = document.getElementById(div).style.backgroundImage;
		var src = element.substr(element.lastIndexOf('/') + 1, element.length);
		document.getElementById(div).style.backgroundImage = "url('recursos/imagens/hall.jpg')";*/
		$(".conteudo").hide("slow", "swing");
		$("#ifsc").show("slow", "swing");
		$("#voltar").show("slow", "swing");
		local = "ifsc";
	}
	fdaeln = function(){
		$(".conteudo").hide("slow", "swing");
		$("#DAELN").show("slow", "swing");
		$("#voltar").show("slow", "swing");
		local = "daeln";
	}

	/* Funções do DAELN */
	departamento = function(){
		$(".conteudo").hide("slow", "swing");
		$("#departamento").show("slow", "swing");
		$("#voltar").show("slow", "swing");
		local = "daeln-departamento";
	}
	horarios = function(){
		$(".conteudo").hide("slow", "swing");
		$("#horarios").show("slow", "swing");
		local = "daeln-horarios";
	}
	
	/* Funções do IFSC */
	auxilios = function(){
		$(".conteudo").hide("slow", "swing");
		$("#auxilios").show("slow", "swing");
	}
	extras = function(){
		$(".conteudo").hide("slow", "swing");
		$("#extras").show("slow", "swing");
	}
}(jQuery));

