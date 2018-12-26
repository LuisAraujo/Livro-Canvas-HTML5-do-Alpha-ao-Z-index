startApp = function(){
	
	canvas = document.getElementById("canvas");

	//chama funcao de teste
	if(testeSuporte(canvas)){
		contexto = canvas.getContext("2d");
	}else{
		alert("Não suportado!");
		return;
	}
	
	adicionandoTextocomCor(contexto);

}

//testa suporte
testeSuporte = function(canvas){
	if( (!canvas) || (!canvas.getContext))
		return false;

	return true;	
}

adicionandoTextocomCor = function(contexto){
	contexto.fillStyle = "#ff0000";
	contexto.fillText("CANVAS HTML5", 100, 100);
	contexto.strokeStyle = "#0f0";
	contexto.strokeText("Do Alph ao Z-Index", 100, 160);
}
//inicar a aplicação
window.onload = startApp;
