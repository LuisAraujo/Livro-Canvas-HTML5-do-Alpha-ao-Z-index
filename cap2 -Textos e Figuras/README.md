# Capítulo II - Textos e Figuras

Neste capítulo, falaremos sobre como adicionar o Canvas no HTML, como ligar o HTML com o Javascript e como criar textos e figuras no Canvas. 

[< Capítulo Anterior](https://github.com/LuisAraujo/Livro-Canvas-HTML5-do-Alpha-ao-Z-index/tree/master/cap1-Introducao)  |  [Próximo Capítulo >](https://github.com/LuisAraujo/Livro-Canvas-HTML5-do-Alpha-ao-Z-index/tree/master/cap3-Editando%20Imagens)


## Introdução

### 1.1 - Adicionando o elemento Canvas na sua página

O primeiro passo é criar um arquivo, chame-o de projeto.html, abra e escreve o seguinte código. Neste código temos as tags básicas do html (html e body) e a tag Canvas, dentro do body, com um tamanho de 600 por 600.

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

Se você abriu o seu arquivo **projeto.html** no navegador, certamente não viu nada diferente. Está tudo certo, isso ocorre porque a sua página tem o fundo branco e o canvas também. Uma forma de visualizá-lo é inspecionando o elemento da página, mas isso não é nada sutil, então vamos adicionar uma borda ao Canvas.

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

Legal! Agora já temos o nosso Canvas, mas como foi explicado no capítulo anterior, precisaremos de um arquivo Javascript para controlar o canvas. Então vamos criar outro arquivo, chame-o de **app.js**. Neste arquivo escreva o código seguinte.

```javascript
alert("javascript ok!");
```

Calma, não execute ainda! Precisamos, antes, criar o link entre o HTML e o Javascript e isso é feito no próprio HTML, pois é ele que será aberto no navegador. Modifique o arquivo projeto.html para:

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

Note que adicionamos apenas a tag <script\> e colocamos o endereço do nosso arquivo Javascript no atributo src (source). Como ele está na mesma pasta, basta colocar o nome dele. Pronto, agora pode executar, uma mensagem como esta deverá aparecer na sua tela:

Caso isso não ocorra, verifique no console o erro. É provável que você tenha errado o nome do arquivo ou deixo o Javascript em branco! Caso crie o Javascript em uma pasta específica, por exemplo, script é preciso direcionar o caminho "script/app.js", caso o seu HTML esteja em uma subpasta do projeto e o Javascrip na raiz, o caminho deve ser "../app.js".

### 1.3 - Capturando o elemento do DOM

Bom, o código Javascript até agora não faz nada além de avisar que está tudo ok como o link entre ele e o HTML. Vamos agora, capturar os elementos do HTML para o Javascript. Modifique o **app.js** para:

```javascript
//capturando o canvas do DOM
canvas = document.getElementById("meu_canvas");
alert(canvas);
```

Note que estamos pegando o Canvas pelo id "meu_canvas", mas ainda não atualizamos o HTML para colocar esse id, se não fizermos isso, o nosso *getElementById* retornará nulo (*null*). Então vamos lá no **projeto.html**:

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

[figura]

Se você já criou um site ou já viu o código de um site, deve está se perguntando porque o script não está dentro da tag <head/> do HTML. Bem, se colocarmos o script lá, ele será executado antes da página ficar pronta (*ready*) e assim não conseguirá capturar o Canvas, pois ele ainda não terá sido renderizado. Por isso, forçamos uma situação que o script é executado após a renderização da página. Um exemplo de erro quanto a isso pode ser visto aqui:

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

Ao testar, um alerta com a mensagem *null* aparecerá na tela. Mas como os sites fazem neste caso? Existem técnicas que nos permite executar um código após a renderização da página, neste caso o nosso **app.js** ficaria assim:

```javascript
window.onload =  function() { 
	//capturando o canvas do DOM
	canvas = document.getElementById("canvas");
	alert(canvas);
};
```
Colocamos o código dentro da função que será chamada quando a página estiver totalmente carregada! 

### 1.4 - Testando Suporte do Browser

Mas nem tudo são flores, alguns navegadores podem não suportar o canvas, então é preciso verificar isso antes de continuar como a aplicação. A verificação é simples, consiste em verificar se o Canvas e o *getContext* não são nulos, indefinidos ou falsos.

```javascript
canvas = document.getElementById("canvas");
//verificando suporte do navegador
if( (!canvas) || (!canvas.getContext)){
	alert("Não Suportado!");
}else{
	alert("Suportado!");
}
```

Há um modo de exibir uma mensagem para o usuário, caso o canvas não seja suportado:

```html
<body>
	<canvas id="canvas" height="600" width="600" style="border: 1px solid #000">
		<!-- mensagem a ser exibida em caso de erro por suporte -->
		O canvas não é suportado, neste navegador!
	</canvas>
</body>
```


### 1.5 - Recuperando o Context2d

Recuperar o contexto (local onde vamos manipular o canvas) é muito simples. Basta usar o métodos *getContext* e passar como parâmetro a string "2d". Assim, estamos informando à API que criaremos figuras, textos e imagens em duas dimensões. 

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

Adicionamos apenas as duas últimas linhas.

### 1.6 - Encapsulando

Agora que já entendemos como funciona o processo inicial, podemos organizar o nosso código, encapsulando os trechos de códigos em funções. Vejamos:

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

No final dessa sessão, você deve ter uma pasta como o projeto.html e app.js, conforme figura abaixo.

[figura]

Antes de avançarmos, recomendo que obtenham uma ferramenta de edição de texto para código, como o Sublime ou NotePad++, ou ainda um IDE, como o PhpStorm (versão estudante).

## Trabanhado como Texto

### 2.1 - Adicionando Texto no Canvas

Adicionar um texto no Canvas é uma ótima forma de iníciar a manipulação do Canvas. Adicionar o texto é simples, basta usarmos as funções *fillText* ou *strokeText*, a primeira desenha o preenchimento do texto e a segunda as bordas. A função abaixo pode ser colocada no **app,js** e devemos chamá-la na função *StartApp*.

```javascript
adicionandoTexto = function(contexto){
	
	contexto.fillText("CANVAS HTML5", 100, 100);
	contexto.strokeText("Do Alph ao Z-Index", 100, 130);
}
```

Nestes caso, as letra estão muito pequenas, e a diferença das duas funções ainda não é muito perceptível. Podemos então alterar o tamanho da letra. Isso, assim como outras configurações de fonte, não é realizada através das funções. O Canvas funciona como um quadro, precisamos, antes de pintar, escolher o nosso pincel, nossa tinta e etc. No caso das fontes, modificamos, no contexto, a informação sobre o tamanho e só após isso desenhamos na tela, vejamos: 

```javascript
adicionandoTextocomFonte = function(contexto){
	//nova linha
	contexto.font = "50px arial";

	contexto.fillText("CANVAS HTML5", 100, 100);
	contexto.strokeText("Do Alph ao Z-Index", 100, 130);
}
```
Como podemos observar, o atributo responsável por isso é o *font* e além do tamanho em pixel devemos informar qual a fonte que queremos utilizar, neste caso a Arial. Uma observação importante é que todas as propriedades de fonte que utilizaremos segue o padrão CSS.

Um elemento importante quando criamos aplicações com o canvas é saber quanto o texto ocupa de espaço em pixel, para isso podemos utilizar a função measureText, da qual podemos acessar a largura e altura, como a seguinte função:

```javascript
metrica = contexto.measureText("CANVAS HTML5");
metrica.width;
metrica.height;
```

### 2.2 - Posicionando Texto

Existem duas formas de posicionar o texto no Canvas: com *AlingText* (horizontal) e com *TextBaseLine* (vertical). A primeira é mais simples, pois segue uma lógica comum de editores de textos. As propriedades são: *left*, posiciona o texto à esquerda; *right*, posiciona o texto à direita; *center*, centraliza o texto. As propriedades *end* e *start* informam qual a posição final e inicial do texto, respectivamente.

```javascript
adicionandoTextoPosicionado_h = function(contexto){
	
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

Como já foi visto, ao desenhar uma fonte precisamos informar o *x* e o *y*, ou seja, a posição que a fonte será desenhada. Diferente dos retângulos apresentados no capítulo 1, a origem da fonte se encontra no canto inferior direito, com pode ser observado a seguir:

[Figura]

Você pode ver de forma dinâmica a modificação, neste [simulador](https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_canvas_textalign).

*TextBaseLine* é uma linha base que o canvas usa para desenhar o texto. Existem diversos tipos de linhas. O atributo responsável por isso é a *textBaseLine* e a propriedade *alphabetic* é a padrão. A propriedade *top* cria faz o texto se basear em uma linha acima do texto, mas se encostrar sua face. A *hanging* é similar ao top, se diferenciando pelo fato de encostrar a sua face na linha. *middle* faz como que o texto se baseie em uma linha central, *ideographic* é utilizado para escrita ideográfica como Japonês e Chinês. Já o bottom escreve sobre a linha, com uma margem de afastamento.

[Figura]


Vamos testar!


```javascript
adicionandoTextoPosicionado_v = function(contexto){
	
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
Você pode ver de forma dinâmica, a aplicação do TextBaseLine, neste outro [simulador](https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_canvas_textbaseline).

### 2.3 - Modificando a Cor Texto

Para mudar a cor do texto, podemos fazer de duas formas, assim como existem duas formas de exibi-lo. Então, podemos modificar a cor do contorno (*strokeStyle*) ou do preenchimento (*fillStyle*). As cores seguem o padrão RGB hexadecimal (#RRGGBB ou #RGB), onde R é correspondente ao vermelho(RED), o G ao verde(GREEN) e o B ao azul(BLUE). Se não estiver familiarizado como o padrão RGB hexadecimal, algumas ferramentas como Gimp, Paint e sites online oferecem suporte para isso.


```javascript
adicionandoTextocomCor = function(contexto){
	contexto.fillStyle = "#ff0000";
	contexto.fillText("CANVAS HTML5", 100, 100);
	contexto.strokeStyle = "#0f0";
	contexto.strokeText("Do Alph ao Z-Index", 100, 160);
}
```

### 2.4 - Modificando o Alfa do Texto

Assim como a seleção da cor, o alfa (opacidade) deve ser modificado no Canvas. Para isso usamos o atributo globalAlpha. O globalAlpha varia entre o transparente absoluto 0.0 e o opaco 1.0. Então, podemos variar o uso da transparência, como podemos ver a seguir:

```javascript
adicionandoTextoComAlfa = function(contexto){
	contexto.globalAlpha = 0.2;
	contexto.fillStyle = "#ff0000";
	contexto.fillText("CANVAS HTML5", 100, 100);
	contexto.globalAlpha = 0.7;
	contexto.strokeStyle = "#00ff00";
	contexto.strokeText("Do Alph ao Z-Index", 100, 160);
}
```

### 2.5 - Tamanho, fonte, peso e estilos básicos

Já falamos de tamanho e tipode de fonte. Aqui exploraremos mais funcionalidades como esta. Vimos que é possível definir uma fonte para o nosso texto, mas como as aplicações web dependem das fontes que o usuário tenha instalada em seu computador, não podemos ficar a deriva, esperando que o computador escolha uma outra fonte. Assim, é possível definir fontes alternativas assim:


```javascript
contexto.font = "50px arial, san serif, times new roman";
```

É possível ainda especificar o estilo da fonte, como *italic*, *normal* e *oblique*

```javascript
contexto.font = "italic 50px arial";
contexto.fillText("CANVAS HTML5", 200, 100);
contexto.font = "normal 50px arial";
contexto.fillText("CANVAS HTML5", 200, 200);
contexto.font = "oblique 50px arial";
contexto.fillText("CANVAS HTML5", 200, 300);
```

A variante: *normal* ou *small-caps*:

```javascript
	contexto.font = "normal 50px arial";
	contexto.font = "small-caps 50px arial";
}
```

Outro recurso interessante para o texto é o peso da fonte, podendo deixar ela com mais preenchimento ou não. Alguns valores possíveis são: *normal*, *bold*, *bolder*, *lighter*, 100, 200, 300, 400.

```javascript
contexto.font = "bold 50px arial ";
contexto.fillText("CANVAS HTML5", 200, 100);
contexto.font = "600 50px arial ";
contexto.fillText("CANVAS HTML5", 200, 200);
}
```

Outras propriedade que podem modificar o tamanho e forma do texto são: *caption*
*icon*, *menu*, *message-box*, *small-caption* e *status-bar*. Eles possuem um infinidade de aplicação, dependendo do que queremos fazer.

```javascript
contexto.font = "menu";
contexto.fillText("CANVAS HTML5", 200, 100);
contexto.font = "caption";
contexto.fillText("CANVAS HTML5", 200, 200);
}
```

Mencionamos anteriormente que o Canvas necessidade da fonte no computador do usuário, esse problema pode ser resolvido com a adição de fontes, via CSS. Para saber mais sobre isso, busque por *font-face*. A seguir um exemplo de CSS  com fonte-face:

```css
@font-face {
font-family: Arcade;
src: url('arcade.otf');
}
```

No arquivo Javascript basta mencionar o nome da fonte (*font-family*):

```javascript
contexto.font = "bold 50px Arcade";
contexto.fillText("CANVAS HTML5", 200, 100);
}
```

### 2.6 - Adicionando Sombra

É possível adicionar sombra ao nosso texto, o processo é similar ao alfa. No entanto, não modificamos apenas um atributo e sim quatro. *shadowOffsetX*, *shadowOffsetY*, *shadowBlur* e *shadowColor*. O primeiro refere-se a posição x da sombra (o quanto ela vai se afastar do texto), o segundo refere-se a posição y, já o terceiro indica o quanto a sombra será difundida, o que afetará na sua definição, deixando-a mais ou menor esfumaçada(blur). Por fim, o último indica a cor da sombra a ser aplicada.

```javascript
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
```

### 2.7 - Usando gradientes

Existem duas formas de criar gradiente para o texto: linear e radial. Para quem está acostumado como o uso de softwares de edição de imagens, já sabe do que se trata, para quem não sabe, superficialmente, o primeiro se baseia em uma linha entre as cores e o seguinte segue um formado de circunferências, transitando pelas cores do gradiente.

Para criar um gradiente linear é preciso usar a função *reateLinearGradient* e *addColorStop*.

Para ciar o gradiente radial é preciso usar a função *createRadialGradient* e o 
*addColorStop* também.


### 2.8 - Usando imagem como textura


## 3 - Desenhando


Outro recurso interessante e muito utilizado é a criação de desenhos. No Canvas podemos desenhar linhas e figuras geométricas como arcores, retângulo e caminhos customizados. Vamos ver a seguir. 

### 3.1 - Desenhando Figuras no Canvas

Vamos aprender um pouco sobre como criar linhas, retângulos, circulos e formas personalizadas.

### 3.1.1 - Desenhando Linhas no Canvas

Para desenhar linhas é preciso ter um ponto de partida (x, y ) e um ponto de chegada (x, y). Uma reta será desenhada ligando os dois pontos especificados. O desenho da linha é na verdade o desenho de uma reta em um caminho (Path), por isso iniciamos como beginPath e finalizamo com closePath, evitando que uma linha infuencie o estilo da outra. 

Vejamos um exemplo com uma reta partindo da origem até o ponto 200, 100.  

```javascript
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(200, 100);
ctx.closePath();
ctx.stroke();
```

Após a definição dos pontos usamos a função stroke que desenha a linha. Perceba que a cor impressa é o preto e a espessupara aparentemente de 1px. Nós podemos mudar essas propriedades. Vamos lá.

Como estamos usando a função stoke, então vamos mudar o estilo do stroke com strokeStyle;

```javascript
ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.moveTo(0, 0);
ctx.lineTo(200, 100);
ctx.closePath();
ctx.stroke();
```

Podemos mudar a espessura da linha com lineWidth, a borda com o lineCap (butt, squere, round) e se ela é tracejada com setLineDash (tanho do risco e do intervalo). Vamos ver alguns exemplos no mesmo código.

```javascript
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
```
### 3.1.2 - Desenhando Caminhos no Canvas

Desenhar caminho é similar a desenhar uma linha. A difereça é que adicionamos mais pontos com lineTo. No exemplo a seguir, desenhamos um triângulo. Além do stroke, podemos usar o fill, caso desejemos uma figura preenchida. Muda-se a cor do preenchimento como fillStyle. 

```javascript
ctx.fillStyle = "blue"
ctx.beginPath();
ctx.moveTo(50, 0);
ctx.lineTo(100, 100);
ctx.lineTo(0, 100);
ctx.lineTo(50, 0);
ctx.closePath();
ctx.stroke();
ctx.fill();
```

### 3.1.3 - Desenhando Retângulos no Canvas

Para criar retângulos, podemos usar os comandos de caminho, como fizemos com a linha, porém já existe um comando especial para facilitar o trabalho, este comando é o Rect. Nele você precisa definir as posiçõesm, a largura e a altura.

```javascript
ctx.rect(0,0,100,100)
```

Assim como o caminho, podemos desenhar apenas o contorno, apenas o preenchimento ou os dois. Vejamos três exemplos:

```javascript
ctx.rect(0,0,100,100);
ctx.stroke();

ctx.rect(100,0,100,100);
ctx.fill();

ctx.rect(200,0,100,100);
ctx.stroke();
ctx.fill();
```
Neste caso apresentado, é ideal usar o beginPath, para que a formatação de um retângulo não influencie o outro.

```javascript
ctx.beginPath();
ctx.fillStyle = "#000";
ctx.rect(100,0,100,100);
ctx.closePath();
ctx.fill();
ctx.beginPath();
ctx.fillStyle = "#00f";
ctx.rect(200,0,100,100);
ctx.stroke();
ctx.closePath();
ctx.fill();
```

Existem mais simplificações para realizar um retângulo. A função fillRect e strokeRect une as funções anteriores.

```javascript
ctx.fillRect(0,0,100,100);

ctx.strokeRect(0,0,100,100);
```

### 3.1.4 - Desenhando Arcos no Canvas

### 3.2 - Desenhando com o Mouse no Canvas

Vamos fazer uma pequena brincadeira com o que já aprendemos. Podemos criar uma aplicacao para desenhar com o mouse, faremos assim: existirá opcoes de linha de retângulo e de círculo. Quando o mouse clicar irá criar uma das três figuras, na posicao que ele está. 



### 3.3 - Limpar o Canvas



## 4- Projetos

### 4.1 - Criando o simulador do AlignText
### 4.2 - Criando o simulador do TextBaseLine
### 4.3 - Seletor de estilo
### 4.4 - Criando um mini-paint
### 4.5 - Interagindo com Formas [Avançado]

 
