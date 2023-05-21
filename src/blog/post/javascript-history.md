---
title: JavaScript — Presente, Passado e Futuro
date: 2023-05-21T19:41:30.930Z
categories:
  - javascript
  - non-tech
summary: Transcrição da palestra feita durante o Bragança Tech Day de 2022
---

## Quem sou eu?

- Carlos Mendonça, 22 anos
- Bacharel em Ciência da Computação pela UAM
- Trabalho a 5 anos na área, estudo programação a 8
- Apaixonado por matemática, computação e música
- Talvez um pouco obcecado por Linguagens de Programação e Compiladores 👀

## Estrutura

1. Breve história de como JS surgiu e evoluiu
2. ES6 e suas duas principais funcionalidades
3. O que compõe o ecossistema atual
4. O que o futuro pode trazer

## Passado — Nascimento e Crescimento

### Qual era o contexto da época?

É 1995 e a internet ainda estava em período de adoção pelo público geral. O primeiro navegador com interface gráfica amplamente utilizado, o Mosaic, tinha sido lançado apenas dois anos atrás. Um grupo dos principais desenvolvedores do Mosaic decidiram fundar a Netscape e criar uma evolução do navegador Mosaic, o Netscape Navigator.

O Navigator era melhor que o Mosaic, mas a internet ainda não havia mudado. Todo conteúdo da internet ainda era composto de páginas de texto e imagens estáticas, mas havia muito interesse popular para a criação de botões que brilham e pulam na tela.

A Netscape ouviu esse clamor popular e abriu duas frentes para atender essa demanda: Em uma, tentaram colaborar com a Sun Microsystems, que na época estava desenvolvendo o Java, para colocar Java no navegador. Na outra, eles contrataram Brendan Eich, que pretendia portar a linguagem Scheme para o navegador, que já era uma linguagem conhecida na época e que era relativamente fácil de ser portada devido a sua simplicidade.

A gerência da Netscape, entretanto, se perguntou se a internet realmente precisava de duas linguagens, e acabaram optando por manter apenas uma. Só que para defender sua iniciativa de usar o JavaScript (que naquela época ainda não tinha esse nome) eles precisavam de um protótipo de uma linguagem de scripting (como o Scheme) que tivesse uma sintaxe diferente (parecida com a do Java)

Assim, em 10 dias, Brendan Eich projetou a linguagem Mocha em maio de 95, que foi renomeada para LiveScript por motivos legais e incluída no beta do Netscape Navigator 2 no final de novembro com pouquíssimas mudanças desde sua concepção inicial. Em dezembro ocorreu o lançamento oficial do navegador, e o LiveScript foi renomeado para JavaScript como jogada de marketing para surfar na onda que o Java estava criando na época.

### Os anos seguintes

- 1995 — No mesmo ano a Microsoft lançou o Internet Explorer, dando início a uma “corrida espacial” entre os dois navegadores
- 1996 — No ano seguinte, a Microsoft apresentou o JScript, uma cópia do JavaScript feita por meio de engenharia reversa, além de suporte inicial para CSS e extensões do HTML.
  - Essas implementações eram consideravelmente diferentes entre diferentes fabricantes, o que gerou a adoção de selos como “melhor apresentado no Netscape” ou “melhor apresentado no Internet Explorer”
- 1997 — JavaScript é aceito na ECMA International para padronização
- 1998 — Lançamento do ECMAScript 2
- 1999 — Lançamento do ECMAScript 3
  - Netscape é comprada em 99 pela AOL, mas deixa um presentinho para o mundo: A Organização Mozilla, que iria criar a Fundação Mozilla em 2003 como forma de se sustentar sem apoio da AOL que estava cortando verbas do projeto.
- 2000 — Início dos trabalhos para o ECMAScript 4

Enquanto isso na Microsoft, o Internet Explorer tinha 95% de controle do mercado de navegadores no começo dos anos 2000, tornando o JScript o padrão efetivamente utilizado para desenvolvimento web. Eles até contribuíram com a criação do padrão ECMAScript no começo, mas abandonaram o projeto, estagnando o desenvolvimento da versão 4 do padrão.

### Enfim, um novo padrão

É 2005 e o ECMAScript 4 nunca aconteceu por conta da falta de adoção da maior fabricante da época, a Microsoft. Não quer dizer que esforços foram em vão, nesse mesmo tempo algumas tecnologias importantíssimas surgiram como Ajax e Event Listeners, iniciando uma “Era Renascentista” do JavaScript, com a criação de ferramentas como jQuery, Prototype, Dojo Toolkit, e MooTools.

Em 2008 a Google anunciou seu motor de JavaScript chamado V8, que apresentava uma performance estupidamente melhor que a da concorrência por conta de sua compilação just-in-time.

Em Julho todas as fabricantes da época (Microsoft, Mozilla, e Google) se reuniram em Oslo para resolver suas disparidades de adoção do padrão e promover a evolução da linguagem. O resultado foi a criação do padrão ECMAScript 5 no início de 2009

## Presente — ECMAScript 6: Módulos e Promises

### E agora, José?

A linguagem padronizou, a competição acabou, o povo tá contente, a comunidade tá produzindo, e agora, José?

A linguagem ainda tinha alguns sérios problemas a bom tempo, problemas que ainda impediam que o JS fosse considerada uma linguagem moderna de fato, e o ES6 introduziu muitas correções que estavam pendentes desde 1995, o que explica parte da espera de 7 anos pela especificação.

O ES6 também introduziu mais funcionalidades do que posso listar aqui, mas algumas das mais expressivas foram funções flecha, classes, variáveis de escopo de bloco, constantes nativas, desestruturação e muitas outras.

Mas pessoalmente, acredito que as duas maiores mudanças que foram introduzidas foram a criação de Módulos e Promises, pois elas mudam fundamentalmente a forma como nós estruturamos grandes coleções de código fonte e como lidamos com código assíncrono, duas partes fundamentais para a criação de código manutenível e performático.

#### Breve pausa — Manutenibilidade

Manutenibilidade é definida como

> uma característica inerente a um projeto de sistema ou produto, e se refere à facilidade, precisão, segurança e economia na execução de ações de manutenção nesse sistema ou produto (BLANCHARD, Benjamin. Logistics engineering and
> management. 4th ed. Englewwod Cliffs: Prentice Hall, 1992. p. 15)

### Módulos

Toda boa linguagem possui alguma forma de dividir grandes secções de código em parcelas menores com propósito específico, faz parte do princípio SOLID. Antes do ES6, aplicações dependiam ou de arquivos monolíticos com todas as funcionalidades implementadas em um só lugar, ou do uso de bundlers como Webpack, que agrupavam vários arquivos JS em um só, que era servido para o navegador para ser executado.

Com a introdução de Módulos, programadores agora podem nativamente quebrar uma aplicação em vários pequenos arquivos, cada um exportando uma pequena funcionalidade utilizada para compor o todo.

### Promises

Código assíncrono é um dos pilares de qualquer aplicação web moderna, já que as informações apresentadas para o usuário raramente são armazenadas no navegador e devem ser buscadas em algum tipo de serviço externo por meio de requisições HTTP.

Essas requisições devem ser realizadas de forma assíncrona para garantir uma boa experiência para o usuário (lembram do Ajax?)

Até a criação das Promises, o único mecanismo que o JS oferecia para lidar com tal estrutura eram os callbacks, que elevavam a complexidade do código e normalmente levavam a algo chamado “callback hell”, que são pirâmides horizontais de funções aninhadas utilizadas para lidar com sequências intermináveis de chamadas assíncronas.

Com as Promises essas pirâmides se tornam sequências de chamadas encadeadas, não aninhadas, melhorando a legibilidade e a manutenibilidade do código.

## Presente — Frameworks e JS Server-side

Promises e Módulos são legais e tudo mais, mas se você se tornar um desenvolvedor JS hoje em dia, dificilmente vai trabalhar exclusivamente com JS nativo e dificilmente vai escrever todas suas funcionalidades do zero. Chances são que você vai utilizar frameworks e bibliotecas prontas para construir suas aplicações, e portanto é importante saber pra que frameworks servem e o que são, e onde encontrar bibliotecas de terceiros.

Falaremos brevemente de outra aplicação muito comum do JS, o JS server-side, e também de uma linguagem chamada TypeScript, uma “extensão” do JavaScript que oferece tipagem forte e estática muito utilizada no mercado e na comunidade.

### Frameworks — Pra que servem?

Antes de definir o que é uma framework, quero que vocês entendam qual a necessidade que as frameworks atendem. Dessa forma, quando eu definir do que uma framework é composta, fica claro o porque ela é composta daquilo.

Suponhamos que você queira fazer um quadrado mudar de cor quando o usuário clicar num botão. Se você usar somente JS nativo ao navegador isso vai requerer bastante trabalho. Você precisa:

- Criar uma função que será executada quando o botão for clicado
- Essa função precisa de uma referência do quadrado que mudará de cor
- Criar a lógica de mudança de cor do quadrado
- Obter uma referência do botão
- Associar essa função ao evento do botão sendo clicado
- Executar essa associação no momento certo durante o ciclo de renderização da página

E o mais importante, repetir todo esse trabalho **para todos os botões de todas as suas páginas.**

Basta dizer, é bastante trabalho para algo relativamente simples. Especialmente considerando que tem alguns passos disso que parecem ser bons candidatos para abstração:

- Obter a referência do elemento
- Associação da função
- Timing da associação

Se nós eliminarmos esses passos da nossa lógica, tudo que resta fazer para cada botão é:

- Criar a lógica que deve ser executada
- Dizer quando isso deve acontecer

O que tornaria nosso trabalho muito mais interessante! Essa diferença entre o antes e o depois é a diferença entre **código imperativo** e **código declarativo.**

No código imperativo o programador deve definir todos os passos que serão executados para que uma tarefa seja concluída, e normalmente é a forma que nós aprendemos a programar nas nossas primeiras aulas de construção de algoritmos.

Código declarativo, por outro lado, não se importa com as especificidades de como realizar algumas tarefas, e permite que você se concentre mais no objetivo final do que em cada passo individual.

Tudo que frameworks visam fazer é justamente isso: tornar código mais declarativo te oferecendo mais funcionalidades prontas.

### Frameworks — O que são?

Agora que definimos qual o objetivo de uma framework, as funcionalidades que uma framework normalmente oferecem fazem mais sentido:

- Fácil reutilização de código (Componentes)
- Abstrações para interações comuns como cliques e digitação (Binds)
- Roteamento de páginas (SPAs)
- Valores reativos (Reatividade)
- Gerenciamento de estado global da aplicação (Stores, Contexto)

#### Componentes

Uma interface é feita de componentes da mesma forma que uma casa é feita de quartos. Componentização é bem comum nas frameworks modernas, e te permite criar pedaços que você pode reutilizar conforme monta uma interface, ou simplesmente uma forma de quebrar uma interface complexa em pedaços menores e melhor compreendidos, sem a necessidade de reutilização.

#### Stores, Binding e Reatividade

As tarefas que o desenvolvedor web mais realiza talvez sejam obter e exibir informação para o usuário. Fazer isso de forma nativa no navegador é bem trabalhoso e requer muito código “boilerplate” (código sem utilidade prática mas que é necessário para o funcionamento da linguagem)

Ferramentas modernas normalmente oferecem algum tipo de “sistema de reatividade” que te permitem “injetar” valores dinâmicos na construção da interface e sincronizar valores da aplicação com os valores dos campos de entrada do usuário, atualizando a interface em tempo real conforme o estado da aplicação muda e eliminando a necessidade de código boilerplate para interação com o usuário.

#### Single Page Applications ou SPAs

Essa é uma tendência moderna na construção de aplicações web: Oferecer uma experiência de “página única” para o usuário. Isto é: O usuário dificilmente muda de página de forma efetiva, o que acontece é uma atualização de estado.

As diferentes páginas de uma aplicação são construídas como janelas de um mesmo painel, e quando um usuário “navega” para uma nova página o sistema de roteamento do framework só substitui o que está sendo exibido para o usuário, podendo até realizar uma transição suave entre as duas interfaces.

Dessa forma o usuário sempre tem a “experiência” de estar na mesma página e interagir com painéis diferentes da mesma aplicação, ao invés de navegar entre diferentes páginas de um mesmo site.

### Bibliotecas e o repositório npm

Além das frameworks, é bem comum utilizarmos bibliotecas ou “pacotes” durante o desenvolvimento. Assim como o Gradle no Java, o pip no Python e o Gems no Ruby, o JavaScript também tem seu gerenciador de pacotes, o npm.

A principal funcionalidade do npm (Node Package Manager) é instalar, remover e gerenciar os pacotes de um projeto gerenciado por ele. Pacotes são armazenados dentro do Repositório do npm, que atualmente conta com pouco mais de 1 milhão e 800 mil pacotes. Esses pacotes incluem desde coisas simples como bibliotecas que te dizem se algo é um número e se ele é par ou ímpar até frameworks completas e programas de linha de comando poderosíssimas (e até mesmo frameworks para criar programas de linha de comando!)

Qualquer um pode contribuir com o repositório e utilizar do repositório, o que torna ele uma ferramenta incrivelmente poderosa para quem quer fazer parte da comunidade JS de forma fácil.

### Server-side e Node.js

Falando em npm, o que é o Node.js afinal?

Em 2009, um ano após o lançamento da V8, Ryan Dahl apresentou o Node.js em uma conferência como uma alternativa ao Apache HTTP Server. O Node é um runtime de JS independente, baseado no motor V8 do Chrome que roda nos servidores, e possibilita a criação de servidores web de alta performance sem utilizar threading manual.

Isso é gerenciado por meio da estrutura de controle de chamadas assíncronas não bloqueantes chamada Event Loop, que despacha chamadas assíncronas para serem processadas por uma thread no plano de fundo, que retornam para uma fila para serem processadas num momento futuro enquanto a main thread realiza processamento síncrono bloqueante no Event Loop.

### TypeScript

Tudo o que falamos até agora foi baseado no JavaScript, que é uma linguagem dinâmica e fracamente tipada. O problema é que isso dá abertura para possíveis problemas que podem ser evitados com um sistema estático de tipagem, e é isso que o TypeScript oferece: Tipagem estática no código, com tipos explicitamente definidos.

Além de alguns benefícios óbvios que tipagem estática oferece, o TypeScript tem algumas cartas na manga que tornam ele uma ferramenta poderosíssima para alguns problemas, como Template Types, por exemplo, que usam template strings para criar tipos exponencialmente complexos de forma automática baseados em combinações de blocos simples.

## Futuro — Vida eterna?

O ecossistema atual é bem completo, amplamente utilizado e não carece de variedade nos tipos de problemas que você enfrenta no dia a dia, mas sabemos que JS é uma linguagem viva, baseada num padrão em constante evolução. Sendo assim, quais vislumbres temos do futuro atualmente?

### ECMAScript Anual

Junto com o lançamento do ES6, a ECMA International mudou a forma de criar novas edições do padrão. Tecnicamente falando, o ES6 na verdade é o ES2016, pois com ele o Comitê Técnico 39 — Um grupo seleto de programadores, implementadores, acadêmicos e vários outros responsáveis por aprovar as propostas para a especificação do ECMAScript — apresentou o esquema de lançamentos anuais da especificação.

Não só passamos a anualmente ter novas funcionalidades na linguagem, mas a especificação passou a ser totalmente aberta a propostas de extensão por meio de um processo de inscrição na EMCA International e repositórios no GitHub.

Algumas das funcionalidades que estão em estágio 3 (o último estágio antes de uma funcionalidade ser considerada finalizada) incluem Módulos JSON, o objeto Temporal, Decoradores de Classe e agrupamento de elementos num array.

### Server Side Rendering

Desde o surgimento da linguagem performance sempre foi um ponto importantíssimo. Com avanços progressivamente mais refinados em motores como a V8 da Google ou o SpiderMonkey da Mozilla, a linguagem chegou num ponto extremamente otimizado atualmente.

Porém, com o passar dos anos surgiram novas métricas de performance que passamos a medir, métricas que levam em consideração a experiência do usuário, como o CLS, que mede o quanto uma página muda de formato antes de estabilizar no seu layout final.

Atualmente, uma das técnicas mais utilizadas para garantir uma boa performance nessas novas métricas é a **Renderização Server-side**, ou SSR. Com o SSR, você desenvolve sites como fazíamos em PHP ou Ruby, projetando páginas que são servidas diretamente pelo servidor, e são exibidas para o usuário muito mais rápido.

Isso permite que o usuário acessando o site tenha um produto totalmente finalizado muito mais rápido, já que a página não é construída no navegador antes de ser exibida, mas sim construída no servidor e exibida para o usuário em sua forma final.

Outra técnica é a **Geração de Sites Estáticos**, ou SSG. Sites estáticos? Mas a ideia de 27 anos atrás não era deixar as páginas dinâmicas? Sim! Só que dinamismo invariavelmente custa performance, e correndo o risco de ter um martelo e só enxergar pregos, nem todas as páginas precisam de dinamismo. Uma página da Wikipédia, por exemplo, é muito bem atendida por uma página totalmente estática.

Por último temos a **Regeneração Estática Incremental**, o ISR, que combina o melhor de dois mundos. O SSR renderiza as páginas sob demanda, o SSG gera páginas estáticas, o ISR te permite gerar páginas estáticas baseadas em dados dinâmicos, que são periodicamente invalidados do cache e atualizados para uma nova tarefa de renderização de páginas em massa.

### Web3 e DApps

Recentemente surgiu um movimento que fala sobre a Web 3.0, uma “nova versão da Internet” baseada em tecnologias e conceitos de blockchain, como criptomoedas e descentralização. Não entrando nos aspectos socioeconômicos do assunto, prefiro falar do impacto que isso pode ter nas nossas vidas como desenvolvedores Web.

Montado em cima do conceito da Web3, há o conceito dos DApps, Apps Distribuidos. DApps são aplicações que rodam de forma autônoma em uma blockchain, por meio do conceito de Contratos Inteligentes, os Smart Contracts, e não são de nenhuma propriedade individual, distribuindo tokens que representam sua possessão de acordo com o algoritmo determinado pelo código.

Como diz o ditado, “numa corrida do ouro, venda pás”, e por mais que eu pessoalmente não seja muito fã de cripto e tudo mais, deem uma olhada no Solidity, uma linguagem de alto nível inspirada pelo C++, Python e JavaScript para implementação de Contratos Inteligentes na blockchain Ethereum.

### WebAssembly

Por último mas de forma alguma menos importante, temos o WebAssembly.

Se em um lado do espectro da performance do JS nós temos aplicações “super velozes” como Angular, na extremidade do outro lado temos o WebAssembly, um **formato de instruções binárias** **pra uma máquina virtual baseada em pilha**.

Em termos leigos, WebAssembly oferece uma plataforma para qual você pode compilar suas aplicações de alta performance escritas em C/C++, Rust, ou qualquer outra linguagem que ofereça um compilador com WebAssembly como plataforma alvo.

Algumas aplicações estupidamente pesadas que rodam em WebAssembly incluem o Figma, AutoCAD Web e até jogos feitos na Unity ou Unreal Engine 4 (a partir da versão 4.18)

## Referências

- [Mais informações sobre WebAssembly](https://webassembly.org/)
- [Site da linguagem Solidity para Smart Contracts](https://docs.soliditylang.org/en/v0.8.13/)
- [Mais informações sobre métricas de performance moderna](https://web.dev/)
- [Boa referência para praticamente qualquer assunto da web: CSS, JS, HTML, e muito mais](https://developer.mozilla.org/en-US/)
- [Repositório das propostas para o ECMAScript](https://github.com/tc39/ecma262/)
- [Link para a especificação ECMAScript](https://tc39.es/ecma262/multipage/#sec-intro)
- [Portal do Comitê Técnico 39](https://tc39.es/)
- [Fonte que usei para a contagem de pacotes do repositório npm](https://github.com/nice-registry/all-the-package-repos#stats)
- [Texto que explica em mais detalhes a motivação da Netscape por trás de criar uma nova linguagem](https://web.archive.org/web/20200227184037/https://speakingjs.com/es5/ch04.html)
- [Uma referência compacta de todas as funcionalidades novas do ES6](http://es6-features.org)
- [Resultado da pesquisa State Of JavaScript de 2021](https://2021.stateofjs.com/en-US/)
