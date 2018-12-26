startApp = function(){
	
	canvas = document.getElementById("canvas");

	//chama funcao de teste
	if(testeSuporte(canvas)){
		contexto = canvas.getContext("2d");
	}else{
		alert("Não suportado!");
		return;
	}
	
	adicionandoTextoComSombra(contexto);

}

//testa suporte
testeSuporte = function(canvas){
	if( (!canvas) || (!canvas.getContext))
		return false;

	return true;	
}

adicionandoTextoComSombra = function(contexto){
	contexto.font = "20px Arial";
	
	contexto.shadowOffsetX = 10;
	contexto.shadowOffsetY = 10;
	contexto.shadowBlur = 5;
	contexto.shadowColor = "#000000";

	contexto.fillStyle = "#ff0000";
	contexto.fillText("CANVAS HTML5", 100, 100);
	contexto.strokeStyle = "#00ff00";
	contexto.strokeText("Do Alph ao Z-Index", 100, 160);
}
//inicar a aplicação
window.onload = startApp;
