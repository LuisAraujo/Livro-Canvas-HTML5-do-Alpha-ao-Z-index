# Capítulo I - Introdução

Neste capítulo, falaremos sobre alguns aspectos gerais de aplicações multimídias e do canvas. Se você já está familiarizado como o assunto e já utilizou o canvas de forma introdutório, pode seguir para o Capítulo II - Texto e Figuras.

### 1.1 - Aplicações Multimídias na Web

Algo que nos vem a mente quando ouvimos a palavra multimídia é: mais o que é isso realmente? Embora tenhamos contato com este termo, por vezes, defini-la se torna uma tarefa árdua. Quando falamos de multimídia estamos falando da mescla de várias mídias como texto, imagens, sons, vídeos e outros. Uma aplicação multimídia deve utilizar essas mídias de forma integrada e não sobreposta. Ou seja, elas devem "conversar" entre si para produzir uma aplicação. 

Um site como textos, imagens e sons pode ser considerado uma aplicação multimídia. Por anos, o responsável por criar sites dinâmicos, como aplicações ricas, em termos de conteúdo, tal como animações, simuladores, jogos e outros foi o Flash. Se você entrou no mundo da web, após o ano de 2017, certamente não ouviu falar sobre essa tecnologia, mas por anos ela dominou o mundo web.

O flash é um tecnologia que possibilita criar conteúdos ricos na internet, através de um plug-in chamado Flash Player. Algumas empresas ainda utilizam essa tecnologia, mas ao longo dos anos o seu uso tem diminuído consideravelmente. Isso se deu por diversos motivos como falta de segurança, filosofias ou questões de desempenho, já que era preciso instalar um plug-in para rodar as aplicações.  Para mais detalhes, uma [carta aberta](https://www.apple.com/hotnews/thoughts-on-flash/) da Apple explica razões para abandonar o Flash.

O Flash era uma tecnologia da Macroidia, posteriormente comprado pela Adobe. No entanto, a Adobe já anunciou que abandonará o Flash Player em um post no Twitter.

> We'll stop updating & distributing Flash Player by the end of 2020 (Twitter da Adobe)

Com a chegada do elemento Canvas, na nova versão do HTML, o **Flash deve a sua morte decretada**, afinal passou a ser possível criar aplicações similares, sem uso de plug-in, ou seja, de forma nativa. O Canvas possui várias vantagens em relação ao Flash, por ser aberta, ser uma tecnologia nativa, eliminando os problemas de segurança, e dá suporte à diversas características da nova gama de dispositivos que acessam a web, principalmente os Smartphones. 

### 1.2 - A chegada do Canvas

O Canvas chegou ao mundo web através da nova versão da linguagem de marcação HTML5. Nela passou-se a ter novas tags e APIs que possibilitam o controle dessa tag. Assim, quando falamos de Canvas estamos falando de duas coisas: a tag <canvas\> e a API que permite controlá-la (desenhar). 

### 1.3 - Plano Cartesiano do Canvas

Diferentemente do que vimos durante anos, na escola. O plano cartesiano do Canvas tem sua origem (O) no canto superior esquerdo da tela. Avançando positivamente (0,1,2 ...) da esquerda para a direita no eixo x e de cima para baixo no eixo y.  Conforme podemos ver na figura abaixo:

![Plano Cartesiano do Canvas](https://github.com/LuisAraujo/Livro-Canvas-HTML5-do-Alpha-ao-Z-index/blob/master/cap1-Introducao/fig1-plano-catersizano.svg)

Figura 1 - Plano cartesiano no Canvas

Ou seja, pontos com x e y negativos não são exibidos na tela (a não ser que realizemos uma operação de translação. No entanto, neste livro, veremos alguns elementos como x e y negativos, isso porque, embora não seja possível printá-los na tela, necessitamos, por exemplo, exibi-los em partes. A Figura a seguir exemplifica como a imagem de personagem que só aparece pela metade na tela (já que ele está caminhando para a esquerda.

![Exemplos de Imagens fora do plano cartesiano](https://github.com/LuisAraujo/Livro-Canvas-HTML5-do-Alpha-ao-Z-index/blob/master/cap1-Introducao/fig2-plano-catersizano.svg)

Figura 2 - Exemplo de Figura fora do plano cartesiano do Canvas


### 1.4 - Aspectos estruturais do Canvas

Como mencionado, o Canvas é com juntos da tag e da API - que possuí funções para o seu controle. A tag canvas é colocada no HTML - a página web - e deve ter um identificado único para que possamos identificá-lo no meio de tantos elementos. Inclusive podemos ter mais de um canvas na página, então como saber qual queremos? Para que já está acostumado como HTML, já deve ter pensando que o identificado é o atributo id. Sim, você está certo. 

O canvas deve ter um tamanho especificado no HTML ou via Javascript, para que conhece o CSS, não recomentamos fazer o dimensionamento por ele, pois o HTML estica o comprime o seu canvas, como se fosse um achatamento. No capítulo II mostraremos exemplos desse uso. 

Do lado do javascript, onde usaremos a API, devemos "pegar" esse elemento e guardar em uma variável. Após isso, iremos obter o Contexto do canvas, é nele que iremos manipular a tela. Ou seja, não desenhamos no elemento canvas e sim no contexto dele. Uma observação importante é, iremo utilizar muito javascript neste livro, então se você não tem familiaridade com a linguagem, recomendo que estude um pouco e volte a este material. 

A Figura a seguir demonstra como a comunicação entre a tag e a API é feita.

![Arquitetura de um projeto com Canvas](https://github.com/LuisAraujo/Livro-Canvas-HTML5-do-Alpha-ao-Z-index/blob/master/cap1-Introducao/fig3-arquitetura-canvas.svg)

Figura 3 - Arquitetura de um projeto como Canvas

### 1.5 - Resumo do Capítulo

Neste capítulo vimos brevemente o conceito de aplicações multimídias, um pouco da história dessas aplicações na web, antes da chegada do Canvas e aspectos importantes para iniciantes no canvas, como o plano cartesiano e a arquitetura do projeto. No próximo capítulo iniciaremos os nossos estudos com o Canvas! 