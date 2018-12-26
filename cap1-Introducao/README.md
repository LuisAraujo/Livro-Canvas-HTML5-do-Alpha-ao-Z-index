# Capítulo I - Introdução

Neste capítulo, falaremos sobre alguns aspectos gerais de aplicações multimídias e do canvas. Se você já está familiarizado como o assunto e já utilizou o canvas, mesmo que de forma introdutória, pode seguir para o Capítulo II - Texto e Figuras.

 [Próximo Capítulo >](https://github.com/LuisAraujo/Livro-Canvas-HTML5-do-Alpha-ao-Z-index/tree/master/cap2%20-Textos%20e%20Figuras)

### 1.1 - Aplicações Multimídias na Web

Algo que nos vem a mente quando ouvimos a palavra multimídia é: *mais o que é isso realmente?* Embora tenhamos contato com este termo, por vezes, defini-lo se torna uma tarefa árdua. Quando falamos de multimídia, estamos falando da mescla de várias mídias, tal como texto, imagens, sons, vídeos e outros. Assim, uma aplicação multimídia deve utilizar essas mídias, mas de forma integrada e não sobreposta. Ou seja, elas devem "conversar" entre si para produzir uma aplicação rica em conteúdo. 

Um site com textos, imagens e sons pode ser considerado uma aplicação multimídia. Por anos, o responsável por criar sites dinâmicos, com aplicações ricas, em termos de conteúdo, tal como animações, simuladores, jogos e outros, foi o Flash. Se você entrou no mundo da web recentemente, certamente não ouviu falar sobre essa tecnologia, mas por anos ela dominou o mundo web.

O Flash é um tecnologia que possibilita criar conteúdos ricos na internet e através de um *plug-in* chamado Flash Player era executado nos navegadores. Algumas empresas ainda utilizam essa tecnologia, mas ao longo dos anos o seu uso tem diminuído consideravelmente. Isso se deu por diversos motivos, como a falta de segurança, filosofias ou questões de desempenho, já que era preciso instalar um *plug-in* para rodar as aplicações.  Para mais detalhes, uma [carta aberta](https://www.apple.com/hotnews/thoughts-on-flash/) da Apple explica razões pela qual a empresa abandonou o Flash.

O Flash era uma tecnologia da Macromidia, posteriormente comprada pela Adobe. Por alguns anos a adobe dominou o cenário da web, mesmo com resistência de algumas gigantes. O próprio facebook adotou o Flash para fazer upload de múltiplos arquivos, quando isso ainda não era possível nativamente. No entanto, até a Adobe já anunciou que abandonará o Flash Player, em um post no Twitter.

> We'll stop updating & distributing Flash Player by the end of 2020 (Twitter da Adobe)

Com a chegada do elemento Canvas, na nova versão do HTML, o **Flash teve a sua morte decretada**, afinal, passou a ser possível criar aplicações similares, sem uso de *plug-in*, ou seja, de forma nativa. O Canvas possui várias vantagens em relação ao Flash, é aberta, é uma tecnologia nativa, elimina os problemas de segurança, e dá suporte a diversas características da nova gama de dispositivos que acessam a web, principalmente os *Smartphones*. 

### 1.2 - A chegada do Canvas

O Canvas se popularizou no mundo web, através da nova versão da linguagem de marcação HTML5. Nesta versão, foram incorporadas novas *tags* e APIs como video, audio e o canvas. Cada tag possui uma API própria que permite o seu controle, isso significa que, quando falamos de Canvas, estamos falando de duas coisas: a tag <canvas\> e a API que permite controlá-la (desenhar). No entanto, ela foi implementada inicialmente pela Apple, com suporte ao Safari. Após isso, alguns navegadores passaram a dar suporte a este elemento como o Mozilla (Genko 1.8+), Opera 2006 e Internet Explore (9+), além de ser padronizada pela *Web Hypertext Application Technology Working Group* (WHATWG) na especificação da nova geração. 

Com a chegada do Canvas, passou a ser possível criar conteúdo rico, na internet, de forma nativa. Hoje, o canvas é largamente utilizado por desenvolvedores, mas diferentemente do Flash, que tinha como ferramenta principal o Adobe Flash, essas aplicações são desenvolvidas por diversos *frameworks* ou diretamente, usando a API do Canvas. Neste livro, iremos trabalhar diretamente com a API, dando ao leitor conhecimento necessário para criar seu próprio *framework*, conforme sua necessidade. 


### 1.3 - Plano Cartesiano do Canvas

Diferentemente do que vimos durante anos, na escola, o plano cartesiano do Canvas tem sua origem (O) no canto superior esquerdo da tela. Avançando positivamente (0,1,2 ...) da esquerda para a direita no eixo *x* e de cima para baixo no eixo *y*.  Conforme podemos ver na figura abaixo:

![Plano Cartesiano do Canvas](https://github.com/LuisAraujo/Livro-Canvas-HTML5-do-Alpha-ao-Z-index/blob/master/cap1-Introducao/fig1-plano-catersizano.png)

Figura 1 - Plano cartesiano no Canvas

Ou seja, pontos com *x* e *y* negativos não são exibidos na tela (a não ser que realizemos uma operação de translação. No entanto, neste livro, veremos alguns elementos como *x* e *y* negativos, isso porque, embora não seja possível exibi-los na tela, necessitamos, por exemplo, exibi-los em partes. A Figura a seguir exemplifica com um retângulo essa característica.

![Exemplos de Imagens fora do plano cartesiano](https://github.com/LuisAraujo/Livro-Canvas-HTML5-do-Alpha-ao-Z-index/blob/master/cap1-Introducao/fig2-plano-catersizano.png)

Figura 2 - Exemplo de Figura fora do plano cartesiano do Canvas


### 1.4 - Aspectos estruturais do Canvas

Como mencionado, o Canvas é conjunto da tag e da API - que possuí funções para o seu controle. A tag canvas é colocada no HTML - a página web - e deve ter um identificado único para que possamos identificá-lo, no meio de tantos elementos. Inclusive podemos ter mais de um canvas na página, então como saber qual queremos? Para que já está acostumado como HTML, já deve ter pensando que o identificado é o atributo id. Sim, você está certo. 

O Canvas deve ter um tamanho especificado no HTML ou via Javascript, para que conhece o CSS, não recomentamos fazer o dimensionamento por ele, pois o HTML estica ou comprime o seu canvas, como se fosse um achatamento. No capítulo II mostraremos exemplos desse uso. 

Do lado do javascript, onde usaremos a API, devemos "pegar" esse elemento e guardar em uma variável. Após isso, iremos obter o Contexto do canvas, é nele que iremos manipular a tela. Ou seja, não desenhamos no elemento Canvas e sim no contexto dele. Uma observação importante é, iremo utilizar muito javascript neste livro, então se você não tem familiaridade com a linguagem, recomendo que estude um pouco e volte a este material. 

A Figura a seguir demonstra como a comunicação entre a tag e a API é feita.

![Arquitetura de um projeto com Canvas](https://github.com/LuisAraujo/Livro-Canvas-HTML5-do-Alpha-ao-Z-index/blob/master/cap1-Introducao/fig3-arquitetura-canvas.png)

Figura 3 - Arquitetura de um projeto como Canvas

O Canvas possui dois contextos: 2d e 3d (adicionando a dimensão z). Aqui trataremos essencialmente do contexto 2d. 


### 1.5 - Resumo do Capítulo

Neste capítulo vimos brevemente o conceito de aplicações multimídias, um pouco da história dessas aplicações na web, antes da chegada do Canvas e aspectos importantes para iniciantes no Canvas, como o plano cartesiano e a arquitetura do projeto. No próximo capítulo iniciaremos os nossos estudos com o Canvas! 
