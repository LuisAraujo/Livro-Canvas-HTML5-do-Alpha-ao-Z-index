# Capítulo II - Textos e Figuras

Neste capítulo, falaremos sobre como adicionar o canvas no HTML, como ligar o HTMl como o javascript e como criar textos e figuras no canvas. 

[< Capítulo Anterior](https://github.com/LuisAraujo/Livro-Canvas-HTML5-do-Alpha-ao-Z-index/tree/master/cap1-Introducao)  |  [Próximo Capítulo >](https://github.com/LuisAraujo/Livro-Canvas-HTML5-do-Alpha-ao-Z-index/tree/master/cap3-Editando%20Imagens)


## Introdução

### 1.1 - Adicionando o elemento Canvas na sua página

O primeiro passo é criar um arquivo, chame-o de projeto.html, abra e escreve o seguinte código. Neste código temos as tags básicas do html (html e body) e a tag canvas, dentro do body, com um tamanho de 600 por 600.

projeto.html

```html
<html>
<body>
	<!-- criando um canvas 600 x 600 -->
	<canvas height="600" width="600">
	</canvas>
</body>
</html>
```

Se você abriu o seu arquivo **projeto.html** no navegador, certamente não viu nada diferente. Está tudo certo, isso ocorre porque a sua página tem o fundo branco e o canvas também. Uma forma de visualizá-lo é inspecionando o elemento da página, mas isso não é nada sutil, então vamos adicionar uma borda no canvas.

```html
<html>
<body>
	<!-- criando um canvas 600 x 600 com bordas -->
	<canvas height="600" width="600" style="border: 1px solid #000">
	</canvas>
</body>
</html>
```

### 1.2 - Javascript e Canvas

Legal! Agora já temos o nosso canvas, mas como foi explicado no capítulo anterior, precisaremos de um arquivo javascript para controlar o canvas. Então vamos criar outro arquivo, chame-o de **app.js**. Neste arquivo escreva o código seguinte.

```javascript
alert("javascript ok!");
```

Calma, não execute ainda! Precisamos, antes, criar o link entre o html e o javascript e isso é feito no html, pois é ele que será aberto no navegador. Modifique o arquivo projeto.html para:

```html
<html>
<body>
	<canvas height="600" width="600" style="border: 1px solid #000">
	</canvas>
	<!-- nova linha -->
	<script src="app.js"></script>
</body>
</html>
```

Note que adicionamos apenas a tag script e colocamos o endereço do nosso arquivo javascript. Como ele está na mesma pasta, basta colocar o nome dele. Pronto, agora pode executar, uma mensagem como esta deverá aparecer na sua tela:


Caso isso não ocorra, verifique no console o erro. É provável que você tenha errado o nome do arquivo ou deixo o javascript em branco!

### 1.3 - Capturando o elemento do DOM

Bom, o código javascript até agora não faz nada além de avisar que está tudo ok como o link entre ele e o html. Vamos agora, capturar os elementos do html para o javascript. Modifique o **app.js** para:

```javascript
//capturando o canvas do DOM
canvas = document.getElementById("meu_canvas");
alert(canvas);
```

note que estamos pegando o canvas pelo id "meu_canvas", mas não atualizando o html para colocar esse id, se não fizermos isso, o nosso getElementById retornará nulo (null). Então vamos lá no **projeto.html**:

```html
<html>
<body>
	<canvas id="meu_canvas" height="600" width="600" style="border: 1px solid #000">
	</canvas>
	<!-- nova linha -->
	<script src="app.js"></script>
</body>
</html>
```

Após executar, uma mensagem como esta deve aparecer:



Se você já criou um site ou já viu o código de um site, deve está se perguntando porque o scrip não está dentro da tag head do html. Bem, se colocarmos o script lá, ele será executado antes da página ficar pronta (ready) e assim não conseguirá capturar o canvas, pois ele ainda não terá sido renderizado. Por isso forçamos uma situação que o script é executado após a renderização da página. Um exemplo de erro quanto a isso pode ser visto aqui:

```html
<html>
<head>
	<!-- ERRO: o DOM ainda não foi renderizado, então será impossível pegar o canvas-->
	<script src="app.js"></script>
</head>
<body>
	<!-- criando um canvas 600 x 600 com bordas -->
	<canvas id="canvas" height="600" width="600" style="border: 1px solid #000">
	</canvas>
</body>
</html>
```

Ao testar, um alerto como a mensagem null aparecerá na tela. Mas como os sites fazem neste caso? Existem técnicas que nos permite executar um código após a renderização da página, neste caso o nosso **app.js** ficaria assim:

```javascript
window.onload =  function() { 
	//capturando o canvas do DOM
	canvas = document.getElementById("canvas");
	alert(canvas);
};
```
Colocamos o código dentro da função que será chamada quando a página estiver totalmente carregada! 

### 1.4 - Testando Suporte do Browser

Mas nem tudo são flores, alguns navegadores podem não suportar o canvas, então é preciso verificar isso antes de continuar como a aplicação. A verificação é simples, consiste em verificar se o canvas e o getContext não são nulos, indefinidos ou falsos.

```javascript
canvas = document.getElementById("canvas");
//verificando suporte do navegador
if( (!canvas) || (!canvas.getContext)){
	alert("Não Suportado!");
}else{
	alert("Suportado!");
}
```

### 1.5 - Recuperando o Context2d

Recuperar o contexto (local onde vamos manipular o canvas) é muito simples. Basta usar o métodos getContext e passar como parâmetro a string "2d". Assim, estamos informando à API que criaremos figuras, textos e imagens em 2d. 

```javascript
canvas = document.getElementById("canvas");

if( (!canvas) || (!canvas.getContext)){
	alert("Não Suportado!");
}else{
	alert("Suportado!");
}

//recuperando o contexto
contexto = canvas.getContext("2d");
alert(contexto);
```

Adicionando apenas as duas ultimas linhas.

### 1.6 - Encapsulando

Agora que já entendemos como funciona o processo incial, podemos organizar o nosso código, encapsulando os techos de códigos em funções. Vejamos:

```javascript
startApp = function(){
	
	canvas = document.getElementById("canvas");

	//chama funcao de teste
	if(testeSuporte(canvas)){
		contexto = canvas.getContext("2d");
		alert(contexto);
	}else{
		alert("Não suportado!");
	}

}

//testa suporte
testeSuporte = function(canvas){
	if( (!canvas) || (!canvas.getContext))
		return false;

	return true;	
}

//inicar a aplicação
window.onload = startApp;
```

## Trabanhado como Texto

### 2.1 - Adicionando Texto no Canvas

Adicionar um texto no canvas é uma ótima forma de inicio. Adicionar o texto é simples, basta usarmos as funções fillText ou strokeText, a primeira desenha o preenchimento do texto e a segunda as bordas. A função abaixo pode ser colocada no **app,js** e devemos chamá-la na função StartApp.

```javascript
adicionandoText = function(contexto){
	
	contexto.fillText("CANVAS HTML5", 100, 100);
	contexto.strokeText("Do Alph ao Z-Index", 100, 130);
}
```

Nestes caso, as letra estão muito pequenas, e isso ainda não é perceptível. Podemos então alterar o tamanho da letra. Isso, assim como outras configurações de fonte não são feitas nas funções, o canvas funciona como um quadro, precisamos, antes de pintar escolher o nosso pincel, nossa tinta e etc. No caso das fontes, modificamos no contexto a informação sobre o tamanho e só após isso desenhamos na tela, vejamos: 

```javascript
adicionandoText = function(contexto){
	//nova linha
	contexto.font = "50px arial";

	contexto.fillText("CANVAS HTML5", 100, 100);
	contexto.strokeText("Do Alph ao Z-Index", 100, 130);
}
```
Como podemos observar, a função responsável por isso é a font e além do tamanho em pixel devemos informar qual a fonte que queremos utilizar, neste caso a arial. Uma observação importante é que todas as propriedades de fonte que utilizaremos segue o padrão CSS. 

### 2.2 - Posicionando Texto

Existem duas formar de posicionar o texto no canvas: AlingText e TextBaseLine, a primeira é mais simples, pois segue uma lógica comum de editores de textos. As propriedades são: *left*, posiciona o texto à esquerda; *right*, posiciona o texto à direita; *center*, centraliza o texto. As propriedades *end* e *start* informam qual a posição final e inicial do texto, respectivamente.

```javascript
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
```

Como já foi visto, ao desenhar uma fonte precisamos informar o x e o y, ou seja, a posição que a fonte será desenhada. Diferente dos retângulos apresentados no capítulo 1, a origem da fonte se encontra no canto inferior direito, com pode ser observado a seguir:

[Figura]

TextBaseLine é uma linha base que o canvas usa para desenhar o texto. Existem diversos tipos de linhas.
A função responsável por isso é a textBaseLine e a propriedade *alphabetic* é a padrão. A propriedade *top* cria faz o texto se basear em uma linha acima do texto, mas se encostrar sua face. A *hanging* é similar ao top, se diferenciando pelo fato de encostrar a sua face na linha. *middle* faz como que o texto se baseie em uma linha central, *ideographic* é utilizado para escrita ideográfica como Japonês e Chinês. Já o bottom escreve sobre a linha, com uma margem de afastamento.

[Figura]


Vamos testar!


```javascript
adicionandoText = function(contexto){
	
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
```

### 2.3 - Cor Texto no Canvas


### 2.4 - Modificando o Alfa do Texto


### 2.5 - fillText e stronkText


### 2.6 - Tamanho, fonte, peso e estilos básicos


### 2.7 - Adicionando Sobra


### 2.8 - Usando gradientes


### 2.9 - Usando imagem como textura

### 2.10 - Projeto: seletor de estilo

## 3 - Desenhando

### 3.1 - Desenhando Figuras no Canvas

### 3.2 - Adicionando estilos às Figuras no Canvas

### 3.3 - Desenhando com o Mouse no Canvas

### 3.4 - Limpar o Canvas


### 3.5 - Projeto: criando um paint