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
	
	
	contexto.textAlign = "start";
	contexto.fillText("CANVAS HTML5 Start", 200, 160);

	contexto.textAlign = "end";
	contexto.fillText("CANVAS HTML5 End", 200, 180);
	
	contexto.textAlign = "left";
	contexto.fillText("CANVAS HTML5 Left", 200, 100);
	
	contexto.textAlign ="right";
	contexto.fillText("CANVAS HTML5 Right", 200, 120);
	
	contexto.textAlign ="center";
	contexto.fillText("CANVAS HTML5 Center", 200, 140);

	

	
}
//inicar a aplicação
window.onload = startApp;
