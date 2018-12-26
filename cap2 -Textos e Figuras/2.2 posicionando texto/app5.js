startApp = function(){
	
	canvas = document.getElementById("canvas");

	//chama funcao de teste
	if(testeSuporte(canvas)){
		contexto = canvas.getContext("2d");
	}else{
		alert("Não suportado!");
		return;
	}
	
	adicionandoText(contexto);

}

//testa suporte
testeSuporte = function(canvas){
	if( (!canvas) || (!canvas.getContext))
		return false;

	return true;	
}

adicionandoText = function(contexto){
	
	contexto.font = "15px arial";
	contexto.direction  = "rtl";
	contexto.fillText("CANVAS HTML5", 100, 130);
	contexto.textBaseline  = "ideographic"
	contexto.direction  = "ltr";
	contexto.fillText("CANVAS HTML5", 100, 150);
	
}
//inicar a aplicação
window.onload = startApp;
