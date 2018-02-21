(function($) {
	/* Variável Globais */
	var DAELN	= "modelo/geral/tour_virtual/daeln/";
	var IFSC	= "modelo/geral/tour_virtual/ifsc/";

	var ambiente = "hall_1";
	var setor = IFSC;
	
	/***************************************************************
	****                    MAPA DO CAMPUS                      ****
	***************************************************************/
	
	anterior = function(img){
		/** IFSC **/
		if 		(ambiente == 'hall_2')		{hall_1(img);}
		else if (ambiente == 'biblioteca_1'){hall_2(img);}
		else if (ambiente == 'escada_0')	{hall_2(img);}
		else if (ambiente == 'escada_1')	{escada_0(img);}
		else if (ambiente == 'praca_1')		{hall_1(img);}
		else if (ambiente == 'lazer_1')		{praca_1(img);}
		else if (ambiente == 'lazer_2')		{lazer_1(img);}
		else if (ambiente == 'esportiva_1')	{lazer_2(img);}
		else if (ambiente == 'esportiva_2')	{esportiva_1(img);}
		else if (ambiente == 'esportiva_3')	{esportiva_1(img);}
		else if (ambiente == 'esportiva_4')	{esportiva_1(img);}
		
		/** DAELN - Corredor Principal **/
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
		
		/** DAELN - Corredor norte **/
		else if (ambiente == 'corredor_n10'){corredor_n9(img);}
		else if (ambiente == 'corredor_n9')	{corredor_n8(img);}
		else if (ambiente == 'corredor_n8')	{corredor_n7(img);}
		else if (ambiente == 'corredor_n7')	{corredor_n6(img);}
		else if (ambiente == 'corredor_n6')	{corredor_n5(img);}
		else if (ambiente == 'corredor_n5')	{corredor_n4(img);}
		else if (ambiente == 'corredor_n4')	{corredor_n3(img);}
		else if (ambiente == 'corredor_n3')	{corredor_n2(img);}
		else if (ambiente == 'corredor_n2')	{corredor_n1(img);}
		else if (ambiente == 'corredor_n1')	{corredor_ns(img);}
		else if (ambiente == 'corredor_ns')	{corredor_0(img);}
		else if (ambiente == 'lab_lsc')		{corredor_n10(img);}
		else if (ambiente == 'lab_smm4')	{corredor_n9(img);}
		else if (ambiente == 'lab_dsp')		{corredor_n8(img);}
		else if (ambiente == 'lab_mcp')		{corredor_n6(img);}
		else if (ambiente == 'lab_eld2')	{corredor_n5(img);}
		else if (ambiente == 'lab_smm3')	{corredor_n4(img);}
		else if (ambiente == 'lab_emc')		{corredor_n3(img);}
		else if (ambiente == 'lab_smm1')	{corredor_n2(img);}

		/** DAELN - Corredor Sul **/
		else if (ambiente == 'corredor_s3'){corredor_s2(img);}
		else if (ambiente == 'corredor_s2'){corredor_s1(img);}
		else if (ambiente == 'corredor_s1'){corredor_ns(img);}
		
		mascara_de_carregamento(img);
	}
		
	esquerda = function(img){
		/** IFSC **/
		if 		(ambiente == 'escada_0')	{lazer_1(img);}
		else if (ambiente == 'hall_1')		{praca_1(img);}
		else if (ambiente == 'esportiva_1')	{esportiva_2(img);}
		
		/** DAELN - Corredor Principal **/
		else if (ambiente == 'corredor_0')	{corredor_ns(img);}
		else if (ambiente == 'corredor_ns')	{corredor_s1(img);}
		
		/** DAELN - Corredor Norte **/
		else if (ambiente == 'corredor_n2')	{lab_smm1(img);}
		else if (ambiente == 'corredor_n3')	{lab_emc(img);}
		else if (ambiente == 'corredor_n4')	{lab_smm3(img);}
		else if (ambiente == 'corredor_n5')	{lab_eld2(img);}
		else if (ambiente == 'corredor_n6')	{lab_mcp(img);}
		else if (ambiente == 'corredor_n8')	{lab_dsp(img);}
		else if (ambiente == 'corredor_n9')	{lab_smm4(img);}
		else if (ambiente == 'corredor_n10'){lab_lsc(img);}

		
		mascara_de_carregamento(img);
	}
		
	proximo = function(img){
		/** IFSC **/
		if 		(ambiente == 'hall_1')		{hall_2(img);}
		else if (ambiente == 'hall_2')		{escada_0(img);}
		else if (ambiente == 'escada_1')	{corredor_0(img);}
		else if (ambiente == 'praca_1')		{lazer_1(img);}
		else if (ambiente == 'lazer_1')		{lazer_2(img);}
		else if (ambiente == 'lazer_2')		{esportiva_1(img);}
		else if (ambiente == 'esportiva_1')	{esportiva_3(img);}

		/** DAELN - Corredor Principal **/
		else if (ambiente == 'corredor_1')	{corredor_2(img);}
		else if (ambiente == 'corredor_2')	{corredor_3(img);}
		else if (ambiente == 'corredor_3')	{corredor_4(img);}
		else if (ambiente == 'corredor_4')	{corredor_5(img);}
		else if (ambiente == 'corredor_5')	{corredor_6(img);}
		else if (ambiente == 'corredor_6')	{corredor_7(img);}
		else if (ambiente == 'corredor_7')	{corredor_8(img);}
		else if (ambiente == 'corredor_8')	{lab_smm2(img);}

		/** DAELN - Corredor Norte **/
		else if (ambiente == 'corredor_n1')	{corredor_n2(img);}
		else if (ambiente == 'corredor_n2')	{corredor_n3(img);}
		else if (ambiente == 'corredor_n3')	{corredor_n4(img);}
		else if (ambiente == 'corredor_n4')	{corredor_n5(img);}
		else if (ambiente == 'corredor_n5')	{corredor_n6(img);}
		else if (ambiente == 'corredor_n6')	{corredor_n7(img);}
		else if (ambiente == 'corredor_n7')	{corredor_n8(img);}
		else if (ambiente == 'corredor_n8')	{corredor_n9(img);}
		else if (ambiente == 'corredor_n9')	{corredor_n10(img);}
		
		/** DAELN - Corredor Sul **/
		else if (ambiente == 'corredor_s1')	{corredor_s2(img);}
		else if (ambiente == 'corredor_s2')	{corredor_s3(img);}
		
		mascara_de_carregamento(img);
	} 	

	direita = function(img){
		/** IFSC **/
		if 		(ambiente == 'hall_2')		{biblioteca_1(img);}
		else if (ambiente == 'escada_0')	{escada_1(img);}
		else if (ambiente == 'lazer_1')		{escada_0(img);}
		else if (ambiente == 'esportiva_1')	{esportiva_4(img);}

		/** DAELN - Corredor Principal **/
		else if (ambiente == 'corredor_0')	{corredor_1(img);}
		else if (ambiente == 'corredor_2')	{lab_ld1(img);}
		else if (ambiente == 'corredor_3')	{lab_ld2(img);}
		else if (ambiente == 'corredor_4')	{lab_lpt(img);}
		else if (ambiente == 'corredor_5')	{lab_eld1(img);}
		else if (ambiente == 'corredor_6')	{lab_elp(img);}
		else if (ambiente == 'corredor_7')	{f_107(img);}
		else if (ambiente == 'corredor_8')	{lab_ld3(img);}
		else if (ambiente == 'corredor_ns')	{corredor_n1(img);}
		
		mascara_de_carregamento(img);
	}
	
	/***************************************************************
	****                       AMBIENTES                        ****
	***************************************************************/
	/* IFSC */
	hall_1 = function(img){
		setor = IFSC;
		ambiente = "hall_1";
		//document.getElementById(img).style.backgroundImage  = "url ('https://static.pexels.com/photos/17679/pexels-photo.jpg')";
		//document.getElementById(img).style.background = 'url('+ setor + ambiente + '/foto.jpg)';
		document.getElementById(img).src = setor + ambiente + "/foto.jpg";
		hide_show(0,1,1,0,0,0,0);
	}
	hall_2 = function(img){
		setor = IFSC;
		ambiente = "hall_2";
		document.getElementById(img).src = setor + ambiente + "/foto.jpg";
		hide_show(1,0,1,1,0,0,0);
	}
	biblioteca_1 = function(img){
		setor = IFSC;
		ambiente = "biblioteca_1";
		document.getElementById(img).src = setor + ambiente + "/foto.jpg";
		hide_show(1,0,0,0,1,1,0);		
	}
	escada_0 = function(img){
		setor = IFSC;
		ambiente = "escada_0";
		document.getElementById(img).src = setor + ambiente + "/foto.jpg";
		hide_show(1,1,0,1,0,0,0);	
	} 
	escada_1 = function(img){
		setor = IFSC;		ambiente = "escada_1";
		document.getElementById(img).src = setor + ambiente + "/foto.jpg";
		hide_show(1,0,1,0,0,0,0);	
	};
	praca_1 = function(img){
		setor = IFSC;
		ambiente = "praca_1";
		document.getElementById(img).src = setor + ambiente + "/foto.jpg";
		hide_show(1,0,1,0,1,1,0);	
	}	
	lazer_1 = function(img){
		setor = IFSC;		
		ambiente = "lazer_1";
		document.getElementById(img).src = setor + ambiente + "/foto.jpg";
		hide_show(1,0,1,1,0,0,0);	
	}
	lazer_2 = function(img){
		setor = IFSC;		
		ambiente = "lazer_2";
		document.getElementById(img).src = setor + ambiente + "/foto.jpg";
		hide_show(1,0,1,0,0,1,0);	
	}
	esportiva_1 = function(img){
		setor = IFSC;		
		ambiente = "esportiva_1";
		document.getElementById(img).src = setor + ambiente + "/foto.jpg";
		hide_show(1,1,1,1,0,0,0);	
	}
	esportiva_2 = function(img){
		setor = IFSC;		
		ambiente = "esportiva_2";
		document.getElementById(img).src = setor + ambiente + "/foto.jpg";
		hide_show(1,0,0,0,1,1,1);	
	}
	esportiva_3 = function(img){
		setor = IFSC;		
		ambiente = "esportiva_3";
		document.getElementById(img).src = setor + ambiente + "/foto.jpg";
		hide_show(1,0,0,0,1,1,1);	
	}
	esportiva_4 = function(img){
		setor = IFSC;
		ambiente = "esportiva_4";
		document.getElementById(img).src = setor + ambiente + "/foto.jpg";
		hide_show(1,0,0,0,0,0,0);	
	}
		
	/* DAELN - Corredor principal*/
	corredor_0 = function(img){
		setor = DAELN;
		ambiente = "corredor_0";
		document.getElementById(img).src = setor + ambiente + "/foto.jpg";
		hide_show(1,1,0,1,0,0,0);	
	} 
	corredor_1 = function(img){
		setor = DAELN;		
		ambiente = "corredor_1";
		document.getElementById(img).src = setor + ambiente + "/foto.jpg";
		hide_show(1,0,1,0,0,0,0);		
	} 	
	corredor_2 = function(img){
		setor = DAELN;		
		ambiente = "corredor_2";
		document.getElementById(img).src = setor + ambiente + "/foto.jpg";
		hide_show(1,0,1,1,0,0,0);		
	} 
	corredor_3 = function(img){
		setor = DAELN;		
		ambiente = "corredor_3";
		document.getElementById(img).src = setor + ambiente + "/foto.jpg";
		hide_show(1,0,1,1,0,0,0);		
	} 
	corredor_4 = function(img){
		setor = DAELN;		
		ambiente = "corredor_4";
		document.getElementById(img).src = setor + ambiente + "/foto.jpg";
		hide_show(1,0,1,1,0,0,0);		
	} 
	corredor_5 = function(img){
		setor = DAELN;
		ambiente = "corredor_5";
		document.getElementById(img).src = setor + ambiente + "/foto.jpg";
		hide_show(1,0,1,1,0,0,0);		
	} 
	corredor_6 = function(img){
		setor = DAELN;		
		ambiente = "corredor_6";
		document.getElementById(img).src = setor + ambiente + "/foto.jpg";
		hide_show(1,0,1,1,0,0,0);		
	} 
	corredor_7 = function(img){
		setor = DAELN;		
		ambiente = "corredor_7";
		document.getElementById(img).src = setor + ambiente + "/foto.jpg";
		hide_show(1,0,1,1,0,0,0);		
	} 
	corredor_8 = function(img){
		setor = DAELN;		
		ambiente = "corredor_8";
		document.getElementById(img).src = setor + ambiente + "/foto.jpg";
		hide_show(1,0,1,1,0,0,0);		
	} 
	lab_ld1 = function(img){
		setor = DAELN;		
		ambiente = "lab_ld1";
		document.getElementById(img).src = setor + ambiente + "/foto.jpg";
		hide_show(1,0,0,0,1,1,1);
	}  
	lab_ld2 = function(img){
		setor = DAELN;
		ambiente = "lab_ld2";
		document.getElementById(img).src = setor + ambiente + "/foto.jpg";
		hide_show(1,0,0,0,1,1,1);
	}  
	lab_lpt = function(img){
		setor = DAELN;		
		ambiente = "lab_lpt";
		document.getElementById(img).src = setor + ambiente + "/foto.jpg";
		hide_show(1,0,0,0,1,1,1);
	}  
	lab_eld1 = function(img){
		setor = DAELN;		
		ambiente = "lab_eld1";
		document.getElementById(img).src = setor + ambiente + "/foto.jpg";
		hide_show(1,0,0,0,1,1,1);
	}  
	lab_elp = function(img){
		setor = DAELN;		
		ambiente = "lab_elp";
		document.getElementById(img).src = setor + ambiente + "/foto.jpg";
		hide_show(1,0,0,0,1,1,1);
	}  
	f_107 = function(img){
		setor = DAELN;		
		ambiente = "f_107";
		document.getElementById(img).src = setor + ambiente + "/foto.jpg";
		hide_show(1,0,0,0,1,1,1);
	}  
	lab_ld3 = function(img){
		setor = DAELN;
		ambiente = "lab_ld3";
		document.getElementById(img).src = setor + ambiente + "/foto.jpg";
		hide_show(1,0,0,0,1,1,1);
	}  
	lab_smm2 = function(img){
		setor = DAELN;
		ambiente  = "lab_smm2";
		document.getElementById(img).src = setor + ambiente + "/foto.jpg";
		hide_show(1,0,0,0,1,1,1);
	} 
	corredor_ns = function(img){
		setor = DAELN;		
		ambiente = "corredor_ns";
		document.getElementById(img).src = setor + ambiente + "/foto.jpg";
		hide_show(1,1,0,1,0,0,0);		
	}
	
	/** DAELN - Corredor norte **/
	corredor_n1 = function(img){
		setor = DAELN;		
		ambiente = "corredor_n1";
		document.getElementById(img).src = setor + ambiente + "/foto.jpg";
		hide_show(1,0,1,0,0,0,0);		
	}
	corredor_n2 = function(img){
		setor = DAELN;		
		ambiente = "corredor_n2";
		document.getElementById(img).src = setor + ambiente + "/foto.jpg";
		hide_show(1,1,1,0,0,0,0);		
	}
	corredor_n3 = function(img){
		setor = DAELN;		
		ambiente = "corredor_n3";
		document.getElementById(img).src = setor + ambiente + "/foto.jpg";
		hide_show(1,1,1,0,0,0,0);		
	}
	corredor_n4 = function(img){
		setor = DAELN;		
		ambiente = "corredor_n4";
		document.getElementById(img).src = setor + ambiente + "/foto.jpg";
		hide_show(1,1,1,0,0,0,0);		
	}
	corredor_n5 = function(img){
		setor = DAELN;		
		ambiente = "corredor_n5";
		document.getElementById(img).src = setor + ambiente + "/foto.jpg";
		hide_show(1,1,1,0,0,0,0);		
	}
	corredor_n6 = function(img){
		setor = DAELN;		
		ambiente = "corredor_n6";
		document.getElementById(img).src = setor + ambiente + "/foto.jpg";
		hide_show(1,1,1,0,0,0,0);		
	}
	corredor_n7 = function(img){
		setor = DAELN;		
		ambiente = "corredor_n7";
		document.getElementById(img).src = setor + ambiente + "/foto.jpg";
		hide_show(1,0,1,0,0,0,0);		
	}
	corredor_n8 = function(img){
		setor = DAELN;		
		ambiente = "corredor_n8";
		document.getElementById(img).src = setor + ambiente + "/foto.jpg";
		hide_show(1,1,1,0,0,0,0);		
	}
	corredor_n9 = function(img){
		setor = DAELN;		
		ambiente = "corredor_n9";
		document.getElementById(img).src = setor + ambiente + "/foto.jpg";
		hide_show(1,1,1,0,0,0,0);		
	}
	corredor_n10 = function(img){
		setor = DAELN;		
		ambiente = "corredor_n10";
		document.getElementById(img).src = setor + ambiente + "/foto.jpg";
		hide_show(1,1,0,0,0,0,0);	
	}
	lab_smm1 = function(img){
		setor = DAELN;		
		ambiente = "lab_smm1";
		document.getElementById(img).src = setor + ambiente + "/foto.jpg";
		hide_show(1,0,0,0,1,1,1);	
	}
	lab_emc = function(img){
		setor = DAELN;		
		ambiente = "lab_emc";
		document.getElementById(img).src = setor + ambiente + "/foto.jpg";
		hide_show(1,0,0,0,1,1,1);	
	}
	lab_smm3 = function(img){
		setor = DAELN;		
		ambiente = "lab_smm3";
		document.getElementById(img).src = setor + ambiente + "/foto.jpg";
		hide_show(1,0,0,0,1,1,1);	
	}
	lab_eld2 = function(img){
		setor = DAELN;		
		ambiente = "lab_eld2";
		document.getElementById(img).src = setor + ambiente + "/foto.jpg";
		hide_show(1,0,0,0,1,1,1);	
	}
	lab_mcp = function(img){
		setor = DAELN;		
		ambiente = "lab_mcp";
		document.getElementById(img).src = setor + ambiente + "/foto.jpg";
		hide_show(1,0,0,0,1,1,1);	
	}
	lab_dsp = function(img){
		setor = DAELN;		
		ambiente = "lab_dsp";
		document.getElementById(img).src = setor + ambiente + "/foto.jpg";
		hide_show(1,0,0,0,1,1,1);	
	}
	lab_smm4 = function(img){
		setor = DAELN;		
		ambiente = "lab_smm4";
		document.getElementById(img).src = setor + ambiente + "/foto.jpg";
		hide_show(1,0,0,0,1,1,1);	
	}
	lab_lsc = function(img){
		setor = DAELN;		
		ambiente = "lab_lsc";
		document.getElementById(img).src = setor + ambiente + "/foto.jpg";
		hide_show(1,0,0,0,1,1,1);	
	}
	
	/** DAELN - Corredor sul **/
	corredor_s1 = function(img){
		setor = DAELN;		
		ambiente = "corredor_s1";
		document.getElementById(img).src = setor + ambiente + "/foto.jpg";
		hide_show(1,0,1,0,0,0,0);		
	}
	corredor_s2 = function(img){
		setor = DAELN;		
		ambiente = "corredor_s2";
		document.getElementById(img).src = setor + ambiente + "/foto.jpg";
		hide_show(1,0,1,0,0,0,0);		
	}
	corredor_s3 = function(img){
		setor = DAELN;		
		ambiente = "corredor_s3";
		document.getElementById(img).src = setor + ambiente + "/foto.jpg";
		hide_show(1,0,0,0,0,0,0);		
	}
	
	/***************************************************************
	****                   BOTÕES INFERIORES                    ****
	***************************************************************/
	info = function(){
		$("#nome").load(setor + ambiente + "/nome.txt");
		$("#descricao").load(setor + ambiente + "/descricao.txt", function(responseText, textStatus, XMLHttpRequest){
			if (textStatus == "success") {$(".popUp").show("slow", "swing");}
			if (textStatus == "error") {alert ("Desculpe o transtorno, mas este recurso não está disnonível no momento.");}
		});
	}
	
	ver360 = function(){
		$("#nome").load(setor + ambiente + "/nome.txt");
		$("#descricao").load(setor + ambiente + "/ver360.txt", function(responseText, textStatus, XMLHttpRequest){
			if (textStatus == "success") {$(".popUp").show("slow", "swing");}
			if (textStatus == "error") {alert ("Desculpe o transtorno, mas este recurso não está disnonível no momento.");}
		});
	}
	
	video = function(){
		$("#nome").load(setor + ambiente + "/nome.txt");
		$("#descricao").load(setor + ambiente + "/video.txt", function(responseText, textStatus, XMLHttpRequest){
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
		// Oculta ou mostra os 7 botões flutuantes do tour (4 de direção e 3 de informações)
		if (anterior)	{$("#anterior").show("slow", "swing");}		else{$("#anterior").hide("slow", "swing");};
		if (esquerda)	{$("#esquerda").show("slow", "swing");}		else{$("#esquerda").hide("slow", "swing");};
		if (proximo)	{$("#proximo").show("slow", "swing");}		else{$("#proximo").hide("slow", "swing");};
		if (direita)	{$("#direita").show("slow", "swing");}		else{$("#direita").hide("slow", "swing");};
		if (info)		{$("#info").show("slow", "swing");}			else{$("#info").hide("slow", "swing");};
		if (ver360)		{$("#ver360").show("slow", "swing");}		else{$("#ver360").hide("slow", "swing");};
		if (video)		{$("#video").show("slow", "swing");}		else{$("#video").hide("slow", "swing");};
	}
	
	mascara_de_carregamento = function (img){
		// Mostra aquele gif de loading se demorar muito
		setTimeout(function(){								// Executa após 500ms 
			var x = document.getElementById(img).complete;	// Retorna True se a imagem carregou
			if(x){
				$("#loading").hide(15, "swing");
			} else{
				$("#loading").show(15, "swing");
			}
		}, 500);
	}
}(jQuery));

