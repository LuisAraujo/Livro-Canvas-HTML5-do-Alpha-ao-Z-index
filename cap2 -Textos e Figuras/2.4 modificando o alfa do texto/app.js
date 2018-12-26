startApp = function(){
	
	canvas = document.getElementById("canvas");

	//chama funcao de teste
	if(testeSuporte(canvas)){
		contexto = canvas.getContext("2d");
	}else{
		alert("Não suportado!");
		return;
	}
	
	adicionandoTextoComAlfa(contexto);

}

//testa suporte
testeSuporte = function(canvas){
	if( (!canvas) || (!canvas.getContext))
		return false;

	return true;	
}

adicionandoTextoComAlfa = function(contexto){
	contexto.globalAlpha = 0.2;
	contexto.fillStyle = "#ff0000";
	contexto.fillText("CANVAS HTML5", 100, 100);
	contexto.globalAlpha = 0.7;
	contexto.strokeStyle = "#00ff00";
	contexto.strokeText("Do Alph ao Z-Index", 100, 160);
}
//inicar a aplicação
window.onload = startApp;
