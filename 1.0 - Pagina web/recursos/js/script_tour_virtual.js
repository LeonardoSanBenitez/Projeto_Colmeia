(function($) {
	/* Variável Globais */
	var ambiente = "hall_1";
	var setor = "geral";
	
	var DAELN = "recursos/tour_virtual/daeln/";
	var GERAL = "recursos/tour_virtual/geral/";
	
	/***************************************************************
	****                    MAPA DO CAMPUS                      ****
	***************************************************************/
	
	anterior = function(img){
		/** Geral **/
		if 		(ambiente == 'biblioteca_1'){hall_1(img);}
		else if (ambiente == 'praca_1')		{hall_1(img);}
		else if (ambiente == 'lazer_1')		{praca_1(img);}
		else if (ambiente == 'lazer_2')		{lazer_1(img);}
		else if (ambiente == 'esportiva_1')	{lazer_2(img);}
		else if (ambiente == 'esportiva_2')	{esportiva_1(img);}
		else if (ambiente == 'esportiva_3')	{esportiva_1(img);}
		else if (ambiente == 'esportiva_4')	{esportiva_1(img);}
		
		/** DAELN **/
		else if (ambiente == 'escada_0')	{hall_1(img);}
		else if (ambiente == 'escada_1')	{escada_0(img);}
		else if (ambiente == 'corredor_0')	{escada_1(img);}
		else if (ambiente == 'corredor_1')	{corredor_0(img);}
		else if (ambiente == 'corredor_2')	{corredor_1(img);}
		else if (ambiente == 'corredor_3')	{corredor_2(img);}
		else if (ambiente == 'corredor_4')	{corredor_3(img);}
		else if (ambiente == 'corredor_5')	{corredor_4(img);}
		else if (ambiente == 'corredor_6')	{corredor_5(img);}
		else if (ambiente == 'corredor_7')	{corredor_6(img);}
		else if (ambiente == 'corredor_8')	{corredor_7(img);}
		else if (ambiente == 'lab_smm2')	{corredor_8(img);}
		else if (ambiente == 'lab_ld3')		{corredor_8(img);}
		else if (ambiente == 'f_107')		{corredor_7(img);}
		else if (ambiente == 'lab_elp')		{corredor_6(img);}
		else if (ambiente == 'lab_eld1')	{corredor_5(img);}
		else if (ambiente == 'lab_lpt')		{corredor_4(img);}
		else if (ambiente == 'lab_ld2')		{corredor_3(img);}
		else if (ambiente == 'lab_ld1')		{corredor_2(img);}
		
		mascara_de_carregamento(img);
	}
		
	esquerda = function(img){
		/** Geral **/
		if 		(ambiente == 'escada_0')	{lazer_1(img);}
		else if (ambiente == 'hall_1')		{praca_1(img);}
		else if (ambiente == 'esportiva_1')	{esportiva_2(img);}
		
		mascara_de_carregamento(img);
	}
		
	proximo = function(img){
		/** Geral **/
		if 		(ambiente == 'praca_1')		{lazer_1(img);}
		else if (ambiente == 'lazer_1')		{lazer_2(img);}
		else if (ambiente == 'lazer_2')		{esportiva_1(img);}
		else if (ambiente == 'esportiva_1')	{esportiva_3(img);}

		/** DAELN **/
		else if (ambiente == 'hall_1')		{escada_0(img);}
		else if (ambiente == 'escada_1')	{corredor_0(img);}
		else if (ambiente == 'corredor_1')	{corredor_2(img);}
		else if (ambiente == 'corredor_2')	{corredor_3(img);}
		else if (ambiente == 'corredor_3')	{corredor_4(img);}
		else if (ambiente == 'corredor_4')	{corredor_5(img);}
		else if (ambiente == 'corredor_5')	{corredor_6(img);}
		else if (ambiente == 'corredor_6')	{corredor_7(img);}
		else if (ambiente == 'corredor_7')	{corredor_8(img);}
		else if (ambiente == 'corredor_8')	{lab_smm2(img);}
		
		mascara_de_carregamento(img);
	} 	

	direita = function(img){
		/** Geral **/
		if 		(ambiente == 'hall_1')		{biblioteca_1(img);}
		else if (ambiente == 'lazer_1')		{escada_0(img);}
		else if (ambiente == 'esportiva_1')	{esportiva_4(img);}

		/** DAELN **/
		else if (ambiente == 'escada_0')	{escada_1(img);}
		else if (ambiente == 'corredor_0')	{corredor_1(img);}
		else if (ambiente == 'corredor_2')	{lab_ld1(img);}
		else if (ambiente == 'corredor_3')	{lab_ld2(img);}
		else if (ambiente == 'corredor_4')	{lab_lpt(img);}
		else if (ambiente == 'corredor_5')	{lab_eld1(img);}
		else if (ambiente == 'corredor_6')	{lab_elp(img);}
		else if (ambiente == 'corredor_7')	{f_107(img);}
		else if (ambiente == 'corredor_8')	{lab_ld3(img);}
		
		mascara_de_carregamento(img);
	}
	
	/***************************************************************
	****                       AMBIENTES                        ****
	***************************************************************/
	/* Geral */
	hall_1 = function(img){
		ambiente = "hall_1";
		document.getElementById(img).src = 'recursos/imagens/hall.jpg';
		hide_show(0,1,1,1,0,0,0);
	}
	biblioteca_1 = function(img){
		setor = "geral";
		ambiente = "biblioteca_1";
		document.getElementById(img).src = endereco() + ambiente + "/foto.jpg";
		hide_show(1,0,0,0,1,1,0);		
	}
	escada_0 = function(img){
		setor = "geral";
		ambiente = "escada_0";
		document.getElementById(img).src = endereco() + ambiente + "/foto.jpg";
		hide_show(1,1,0,1,0,0,0);	
	} 
	escada_1 = function(img){
		setor = "geral";		ambiente = "escada_1";
		document.getElementById(img).src = endereco() + ambiente + "/foto.jpg";
		hide_show(1,0,1,0,0,0,0);	
	};
	praca_1 = function(img){
		setor = "geral";
		ambiente = "praca_1";
		document.getElementById(img).src = endereco() + ambiente + "/foto.jpg";
		hide_show(1,0,1,0,1,1,0);	
	}	
	lazer_1 = function(img){
		setor = "geral";		ambiente = "lazer_1";
		document.getElementById(img).src = endereco() + ambiente + "/foto.jpg";
		hide_show(1,0,1,1,0,0,0);	
	}
	lazer_2 = function(img){
		setor = "geral";		ambiente = "lazer_2";
		document.getElementById(img).src = endereco() + ambiente + "/foto.jpg";
		hide_show(1,0,1,0,0,1,0);	
	}
	esportiva_1 = function(img){
		setor = "geral";		ambiente = "esportiva_1";
		document.getElementById(img).src = endereco() + ambiente + "/foto.jpg";
		hide_show(1,1,1,1,0,0,0);	
	}
	esportiva_2 = function(img){
		setor = "geral";		ambiente = "esportiva_2";
		document.getElementById(img).src = endereco() + ambiente + "/foto.jpg";
		hide_show(1,0,0,0,1,1,1);	
	}
	esportiva_3 = function(img){
		setor = "geral";		ambiente = "esportiva_3";
		document.getElementById(img).src = endereco() + ambiente + "/foto.jpg";
		hide_show(1,0,0,0,1,1,1);	
	}
	esportiva_4 = function(img){
		setor = "geral";
		ambiente = "esportiva_4";
		document.getElementById(img).src = endereco() + ambiente + "/foto.jpg";
		hide_show(1,0,0,0,0,0,0);	
	}
		
	/* DAELN */
	corredor_0 = function(img){
		setor = "daeln";
		ambiente = "corredor_0";
		document.getElementById(img).src = endereco() + ambiente + "/foto.jpg";
		hide_show(1,1,0,1,0,0,0);	
	} 
	corredor_1 = function(img){
		setor = "daeln";		ambiente = "corredor_1";
		document.getElementById(img).src = endereco() + ambiente + "/foto.jpg";
		hide_show(1,0,1,0,0,0,0);		
	} 	
	corredor_2 = function(img){
		setor = "daeln";		ambiente = "corredor_2";
		document.getElementById(img).src = endereco() + ambiente + "/foto.jpg";
		hide_show(1,0,1,1,0,0,0);		
	} 
	corredor_3 = function(img){
		setor = "daeln";		ambiente = "corredor_3";
		document.getElementById(img).src = endereco() + ambiente + "/foto.jpg";
		hide_show(1,0,1,1,0,0,0);		
	} 
	corredor_4 = function(img){
		setor = "daeln";		ambiente = "corredor_4";
		document.getElementById(img).src = endereco() + ambiente + "/foto.jpg";
		hide_show(1,0,1,1,0,0,0);		
	} 
	corredor_5 = function(img){
		setor = "daeln";
		ambiente = "corredor_5";
		document.getElementById(img).src = endereco() + ambiente + "/foto.jpg";
		hide_show(1,0,1,1,0,0,0);		
	} 
	corredor_6 = function(img){
		setor = "daeln";		ambiente = "corredor_6";
		document.getElementById(img).src = endereco() + ambiente + "/foto.jpg";
		hide_show(1,0,1,1,0,0,0);		
	} 
	corredor_7 = function(img){
		setor = "daeln";		ambiente = "corredor_7";
		document.getElementById(img).src = endereco() + ambiente + "/foto.jpg";
		hide_show(1,0,1,1,0,0,0);		
	} 
	corredor_8 = function(img){
		setor = "daeln";		ambiente = "corredor_8";
		document.getElementById(img).src = endereco() + ambiente + "/foto.jpg";
		hide_show(1,0,1,1,0,0,0);		
	} 
	lab_ld1 = function(img){
		setor = "daeln";		ambiente = "lab_ld1";
		document.getElementById(img).src = endereco() + ambiente + "/foto.jpg";
		hide_show(1,0,0,0,1,1,1);
	}  
	lab_ld2 = function(img){
		setor = "daeln";
		ambiente = "lab_ld2";
		document.getElementById(img).src = endereco() + ambiente + "/foto.jpg";
		hide_show(1,0,0,0,1,1,1);
	}  
	lab_lpt = function(img){
		setor = "daeln";		ambiente = "lab_lpt";
		document.getElementById(img).src = endereco() + ambiente + "/foto.jpg";
		hide_show(1,0,0,0,1,1,1);
	}  
	lab_eld1 = function(img){
		setor = "daeln";		ambiente = "lab_eld1";
		document.getElementById(img).src = endereco() + ambiente + "/foto.jpg";
		hide_show(1,0,0,0,1,1,1);
	}  
	lab_elp = function(img){
		setor = "daeln";		ambiente = "lab_elp";
		document.getElementById(img).src = endereco() + ambiente + "/foto.jpg";
		hide_show(1,0,0,0,1,1,1);
	}  
	f_107 = function(img){
		setor = "daeln";		ambiente = "f_107";
		document.getElementById(img).src = endereco() + ambiente + "/foto.jpg";
		hide_show(1,0,0,0,1,1,1);
	}  
	lab_ld3 = function(img){
		setor = "daeln";
		ambiente = "lab_ld3";
		document.getElementById(img).src = endereco() + ambiente + "/foto.jpg";
		hide_show(1,0,0,0,1,1,1);
	}  
	lab_smm2 = function(img){
		setor = "daeln";
		ambiente  = "lab_smm2";
		document.getElementById(img).src = endereco() + ambiente + "/foto.jpg";
		hide_show(1,0,0,0,1,1,1);
	} 

	/***************************************************************
	****                   BOTÕES INFERIORES                    ****
	***************************************************************/
	info = function(){
		$("#nome").load(endereco() + ambiente + "/nome.txt");
		$("#descricao").load(endereco() + ambiente + "/descricao.txt", function(responseText, textStatus, XMLHttpRequest){
			if (textStatus == "success") {$(".popUp").show("slow", "swing");}
			if (textStatus == "error") {alert ("Desculpe o transtorno, mas este recurso não está disnonível no momento.");}
		});
	}
	
	ver360 = function(){
		$("#nome").load(endereco() + ambiente + "/nome.txt");
		$("#descricao").load(endereco() + ambiente + "/ver360.txt", function(responseText, textStatus, XMLHttpRequest){
			if (textStatus == "success") {$(".popUp").show("slow", "swing");}
			if (textStatus == "error") {alert ("Desculpe o transtorno, mas este recurso não está disnonível no momento.");}
		});
	}
	
	video = function(){
		$("#nome").load(endereco() + ambiente + "/nome.txt");
		$("#descricao").load(endereco() + ambiente + "/video.txt", function(responseText, textStatus, XMLHttpRequest){
			if (textStatus == "success") {$(".popUp").show("slow", "swing");}
			if (textStatus == "error") {alert ("Desculpe o transtorno, mas este recurso não está disnonível no momento.");}
		});
	}
	
	fechar = function(){
		$(".popUp").hide("slow", "swing");
	}

	/***************************************************************
	****                    OUTRAS FUNÇÕES                      ****
	***************************************************************/	
	
	hide_show = function (anterior, esquerda, proximo, direita, info, ver360, video){
		if (anterior)	{$("#anterior").show("slow", "swing");}		else{$("#anterior").hide("slow", "swing");};
		if (esquerda)	{$("#esquerda").show("slow", "swing");}		else{$("#esquerda").hide("slow", "swing");};
		if (proximo)	{$("#proximo").show("slow", "swing");}		else{$("#proximo").hide("slow", "swing");};
		if (direita)	{$("#direita").show("slow", "swing");}		else{$("#direita").hide("slow", "swing");};
		if (info)		{$("#info").show("slow", "swing");}			else{$("#info").hide("slow", "swing");};
		if (ver360)		{$("#ver360").show("slow", "swing");}		else{$("#ver360").hide("slow", "swing");};
		if (video)		{$("#video").show("slow", "swing");}		else{$("#video").hide("slow", "swing");};
	}
	
	mascara_de_carregamento = function (img){
		setTimeout(function(){								// Executa após 500ms 
			var x = document.getElementById(img).complete;	// Retorna True se a imagem carregou
			if(x){
				$("#loading").hide("fast", "swing");
			} else{
				$("#loading").show("fast", "swing");
			}
		}, 500);
	}
	
	endereco = function (){
		if (setor == "daeln")	{return "recursos/tour_virtual/daeln/";}
		else 					{return "recursos/tour_virtual/geral/";}
	}
	
}(jQuery));

