canvas = document.getElementById("canvas");

if( (!canvas) || (!canvas.getContext)){
	alert("Não Suportado!");
}else{
	alert("Suportado!");
}

//recuperando o contexto
contexto = canvas.getContext("2d");
alert(contexto);