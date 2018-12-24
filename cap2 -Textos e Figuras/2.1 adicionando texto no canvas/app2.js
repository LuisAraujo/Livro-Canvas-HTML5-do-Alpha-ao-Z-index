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
	contexto.font = "50px arial";
	contexto.fillText("CANVAS HTML5", 100, 100);
	contexto.strokeText("Do Alph ao Z-Index", 100, 130);
}
//inicar a aplicação
window.onload = startApp;
