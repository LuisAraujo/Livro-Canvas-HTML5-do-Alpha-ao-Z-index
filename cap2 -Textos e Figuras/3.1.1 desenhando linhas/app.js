startApp = function(){
	
	canvas = document.getElementById("canvas");

	//chama funcao de teste
	if(testeSuporte(canvas)){
		contexto = canvas.getContext("2d");
	}else{
		alert("Não suportado!");
		return;
	}
	
	adicionandoLinhas(contexto);

}

//testa suporte
testeSuporte = function(canvas){
	if( (!canvas) || (!canvas.getContext))
		return false;

	return true;	
}

adicionandoLinhas = function(ctx){
	ctx.beginPath();
	ctx.lineCap = "square";
	ctx.strokeStyle = "blue"
	ctx.lineWidth = 1;
	ctx.moveTo(10, 0);
	ctx.lineTo(10, 100);
	ctx.closePath();
	ctx.stroke();

	ctx.beginPath();
	ctx.lineWidth = 1;
	ctx.lineCap = "bott";
	ctx.setLineDash([4, 2]);
	ctx.strokeStyle = "red";
	ctx.lineDashOffset = 4;
	ctx.moveTo(30, 0);
	ctx.lineTo(30, 100);
	ctx.closePath();
	ctx.stroke();
	

	ctx.beginPath();
	ctx.lineWidth = 1;
	ctx.lineCap = "bott";
	ctx.setLineDash([]);
	ctx.strokeStyle = "#00ff00";
	ctx.moveTo(50, 0);
	ctx.lineTo(50, 100);
	ctx.closePath();
	ctx.stroke();


	
}


//inicar a aplicação
window.onload = startApp;
