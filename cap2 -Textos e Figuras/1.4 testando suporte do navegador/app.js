canvas = document.getElementById("canvas");
//verificando suporte do navegador
if( (!canvas) || (!canvas.getContext)){
	alert("Não Suportado!");
}else{
	alert("Suportado!");
}