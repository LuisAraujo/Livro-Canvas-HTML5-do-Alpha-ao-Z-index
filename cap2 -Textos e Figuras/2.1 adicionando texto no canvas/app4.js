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
	
	contexto.beginPath();
	contexto.moveTo(0, 100);
	contexto.lineTo(800, 100);
	contexto.stroke();

	contexto.font = "15px arial";
	contexto.textBaseline  = "alphabetic";
	contexto.fillText("CANVAS HTML5", 0, 100);
	
	contexto.textBaseline  = "top";
	contexto.fillText("CANVAS HTML5", 120, 100);
	
	contexto.textBaseline  = "hanging";
	contexto.fillText("CANVAS HTML5", 240, 100);
	
	contexto.textBaseline  = "middle";
	contexto.fillText("CANVAS HTML5", 360, 100);
	
		contexto.textBaseline  = "ideographic";
	contexto.fillText("CANVAS HTML", 480, 100);
	
	contexto.textBaseline  = "bottom";
	contexto.fillText("CANVAS HTML5", 600, 100);
	
}
//inicar a aplicação
window.onload = startApp;
