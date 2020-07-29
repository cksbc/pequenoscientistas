//Geral
{
  var count = 0;
  var count1 = 0;
  var tela = 0;
  let start,eu,G1,G2,G3,G4,G5,wall,mesa,beb,pan,pana,pang,maq,maqf,maqfr,maqfd,maqff,maqg,maqgr,maqgf;
}

//TELA 0
{
  var xmenu = 50;
  var ymenu = 180;
  var ymenu1 = 240;
  var ymenu2 = 300;
  var wmenu = 200;
  var hmenu = 50;
  var cor = '#202020';
  var cor1 = '#202020';
  var cor2 = '#202020';
}

//TELA 1 + 1.1
{
  var xbalao = 50;
  var ybalao = 100;
  var wbalao = 410;
  var hbalao = 90;
  var papo = "Olá, cientista, Não vi você aí";
  var papo1 = "Vamos começar com o básico";
  var papo2 = "Brinque de esfriar e esquentar\na água em nossa mesa";
}

//TELA 1.2
{
  var xmaq = 300;
  var ymaq = 130;
  var wmaq = 150;
  var hmaq = 136;
  var xbeb = 230;
  var ybeb = 75;
  var wbeb = 75;
  var hbeb = 180;
  var xpan = 452;
  var ypan = 199;
  var wpan = 120;
  var hpan = 64;
  var xg = 40;
  var yg = 130;
  var wg = 147;
  var hg = 245;
  var xbalao1 = 30;
  var ybalao1 = 40;
  var wbalao1 = 410;
  var hbalao1 = 90;
  var papo11 = "Parabéns, você adquiriu a fase \nLÍQUIDA da água!!";
  var papo12 = "Parabéns, você adquiriu a fase \nSÓLIDA da água!!";
  var papo13 = "Parabéns, você adquiriu a fase \nGASOSA da água!!";
}

//Imagens Carregadas
function preload() {
  start = loadImage('ciencias.jpg');
  eu = loadImage('pp.jpg');
  G1 = loadImage('G1.png');
  G2 = loadImage('G2.png');
  G3 = loadImage('G3.png');
  G4 = loadImage('G4.png');
  G5 = loadImage('G5.png');
  wall = loadImage('WALL.png');
  mesa = loadImage('MESA.png');
  beb = loadImage('BEBEDOURO1.png');
  pan = loadImage('PANELA.png');
  pang = loadImage('PANELAGEL.png');
  pana = loadImage('Liquido.png');
  maq = loadImage('TROÇO.png');
  maqpan = loadImage('TROÇO+PAN.png');
  maqf = loadImage('TROÇO+PAN+F.png');
  maqg = loadImage('TROÇO+PAN+G.png');
  maqfr = loadImage('TROÇO+PAN+F+R.png');
  maqgr = loadImage('TROÇO+PAN+G+R.png');
  maqfd = loadImage('TROÇO+PANVAP.png');
  maqff = loadImage('TROÇO+PANVAZ.png');
  maqgf = loadImage('TROÇO+PANGEL.png');
  
}

//Janela
function setup() {
  createCanvas(600, 400);
}

//Trocas de tela
function mouseReleased() {
  //papo
  if(mouseX>173 && mouseX<235 && mouseY>221 && mouseY<300 && tela>0 && tela<1.2) {
    count++;
  }
  
  //Instruções
  if(tela==2 && count==1){
    tela=2.1;
    count=0;
  } 
  
  //Créditos
  if(tela==3 && count==1){
    tela=0;
    count=0;
  }
  
  //Telas
  if(tela==0 && count==1){
    tela=1;
    count=0;
  }
  if(tela==0 && count==2){
    tela=2;
    count=0;
  }
  if(tela==0 && count==3){
    tela=3;
    count=0;
  }
}

//Telas
function draw() {
  background('#202020');
  textStyle(NORMAL);
  
  //Menu
  if (tela==0){
    image(start,0,0,638,400); 
    textAlign(CENTER);
    textSize(27);
    
    //Botao iniciar
    stroke(200);  //Borda Quadrado
    fill(cor);  //Cor Quadrado
    rect(xmenu,ymenu,wmenu,hmenu,20,5,10,5);  //Formato
    fill(230);  //Cor Texto
    noStroke();  //Borda Texto
    text("Iniciar",150,215);  //Texto
    
    //Botao Instruções
    stroke(200);  //Borda Quadrado
    fill(cor1);  //Cor Quadrado
    rect(xmenu,ymenu1,wmenu,hmenu,20,5,10,5);  //Formato
    fill(240);  //Cor Letra
    noStroke();  //Borda Texto
    text("Instruções",150,275);  //Texto
    
    //Botao Créditos
    stroke(200);  //Borda Quadrado
    fill(cor2);  //Cor Quadrado
    rect(xmenu,ymenu2,wmenu,hmenu,20,5,10,5);  //Formato
    fill(240);  //Cor Texto
    noStroke();  //Borda Texto
    text("Créditos",150,335);  //Texto
    
    //iniciar
    if(mouseX>xmenu && mouseX<xmenu+wmenu && mouseY>ymenu &&mouseY<ymenu+hmenu){
      cor = '#7C11B2';
      if(mouseIsPressed){
        count = 1;
      }
    }else{
      cor = '#202020';
    }
    
    //instruções
    if(mouseX>xmenu && mouseX<xmenu+wmenu && mouseY>ymenu1 &&mouseY<ymenu1+hmenu){
      cor1 = '#7C11B2';
      if(mouseIsPressed){
        count = 2;
      }
    }else{
      cor1 = '#202020';
    }
    
    //créditos
    if(mouseX>xmenu && mouseX<xmenu+wmenu && mouseY>ymenu2 &&mouseY<ymenu2+hmenu){
      cor2 = '#7C11B2';
      if(mouseIsPressed){
        count = 3;
      }
    }else{
      cor2 = '#202020';
    }
  }
  
  //Jogar
  if (tela==1){
    image(wall,-70,0,668,400);  //Fundo
    image(G1,0,200,325,211);  //G na mesa
    
    //cabeça do G
    if(mouseX>173 && mouseX<235 && mouseY>221 && mouseY<300){
      if(mouseIsPressed){
        tela = 1.1;
      }
    }
  }
  
  //INTRO
  if (tela==1.1){
    image(wall,-70,0,668,400);  //Fundo
    image(G2,0,200,325,211);  //G na mesa
    textAlign(LEFT);
    textSize(27);

    //Balão
    fill(220);  //Cor Balão
    stroke(0);  //Borda Balão
    arc(170,210,60,60,PI+QUARTER_PI,PI+3*QUARTER_PI,PIE);  //Formado da setinha abaixo do balão
    rect(xbalao,ybalao,wbalao,hbalao,10,10,10,10);  //Formato do Balão
    
    //Linha p/ Setinha
    stroke(255);  //Cor Linha
    line(152,190,188,190);  //Linha1
    line(152,190,188,190);  //Linha2
    
    //Texto
    noStroke();  //Borda Texto
    fill(0);  //Cor Texto
    text(papo,xbalao+20,ybalao+40);  //Texto
    
    //Cabeça do G
    if(mouseX>173 && mouseX<235 && mouseY>221 && mouseY<300 && count==1){
      if(mouseIsPressed){
        papo = papo1;
      }
    }  //Mensagem 1
    if(mouseX>173 && mouseX<235 && mouseY>221 && mouseY<300 && papo==papo1 && count==2){
      if(mouseIsPressed){
        papo = papo2;
      }
    }  //Mensagem 2
    if(mouseX>173 && mouseX<235 && mouseY>221 && mouseY<300 && papo==papo2 && count==3){
      if(mouseIsPressed){
        tela = 1.2;
        count = 0;
      }
    }  //Mensagem 3
  }
  
  //Brincadeira
  if (tela==1.2){
    textAlign(LEFT);
    textSize(27);
    image(wall,-70,0,668,400);  //Fundo
    image(mesa,180,210,400,145);  //Mesa
    image(beb,xbeb,ybeb,wbeb,hbeb);  //Bebedouro
    
    //G
    if(count!=2.4 && count!=1.6 && count!=3){
      image(G5,xg,yg,wg,hg);
    }else{
      image(G4,xg,yg,wg,hg);
      if(count==2.4){
        //Balão
        fill(220);
        stroke(0);
        arc(150,150,60,60,PI+QUARTER_PI,PI+3*QUARTER_PI,PIE);  
        rect(xbalao1,ybalao1,wbalao1,hbalao1,10,10,10,10);
        stroke(255);
        line(132,130,168,130);
        line(132,130,168,130);
        
        //Texto
        noStroke();
        fill(0);
        text(papo13,xbalao1+20,ybalao1+40);
        
        //Panela
        image(pan,xg-20,yg+70,wpan,hpan);
      }
      if(count==1.6){
         //Balão
        fill(220);
        stroke(0);
        arc(150,150,60,60,PI+QUARTER_PI,PI+3*QUARTER_PI,PIE);  
        rect(xbalao1,ybalao1,wbalao1,hbalao1,10,10,10,10);
        stroke(255);
        line(132,130,168,130);
        line(132,130,168,130);
        
        //Texto
        noStroke();
        fill(0);
        text(papo12,xbalao1+20,ybalao1+40);
        
        //Panela
        image(pang,xg-20,yg+70,wpan,hpan);
      }
      if(count==3){
         //Balão
        fill(220);
        stroke(0);
        arc(150,150,60,60,PI+QUARTER_PI,PI+3*QUARTER_PI,PIE);  
        rect(xbalao1,ybalao1,wbalao1,hbalao1,10,10,10,10);
        stroke(255);
        line(132,130,168,130);
        line(132,130,168,130);
        
        //Texto
        noStroke();
        fill(0);
        text(papo11,xbalao1+20,ybalao1+40);
        
        //Panela
        image(pana,xg-20,yg+70,wpan,hpan);
      }
    }
    
    //Maquina
    image(maq,xmaq,ymaq,wmaq,hmaq);
    if(count==1.2){
      image(maqpan,xmaq,ymaq,wmaq,hmaq);
    }
    if(count==1.3){
      image(maqg,xmaq,ymaq,wmaq,hmaq);
    }
    if(count==1.4){
      image(maqgf,xmaq,ymaq,wmaq,hmaq);
    }
    if(count==2.1){
      image(maqf,xmaq,ymaq,wmaq,hmaq);
    }
    if(count==2.2){
      image(maqff,xmaq,ymaq,wmaq,hmaq);
    }
    
    //Panela
    if(count==0){
      image(pan,xpan,ypan,wpan,hpan);
    }
    if(count==1){
      image(pan,mouseX-wpan/2,mouseY-hpan/2,wpan,hpan);
    }
    if(count==1.1){
      image(pana,mouseX-wpan/2,mouseY-hpan/2,wpan,hpan);
    }
    if(count==1.5){
      image(pang,mouseX-wpan/2,mouseY-hpan/2,wpan,hpan);
    }
    if(count==2.3){
      image(pan,mouseX-wpan/2,mouseY-hpan/2,wpan,hpan);
    }
    
    //Panela
    if(mouseX>xpan+9 && mouseX<xpan+66 && mouseY>ypan+13 && mouseY<ypan+50 && count==0){
      if(mouseIsPressed){
        count=1;
      }
    }
    
    //Bebedouro
    if(mouseX>xbeb+20 && mouseX<xbeb+50 && mouseY>ybeb+100 && mouseY<ybeb+146 && count==1){
      if(mouseIsPressed){
        count=1.1;
      }
    }
    
    //Porta da máquina
    if(mouseX>xmaq+32 && mouseX<xmaq+120 && mouseY>ymaq+40 && mouseY<ymaq+90 && count==1.1){
      if(mouseIsPressed){
        count=1.2;
      }
    }
    if(mouseX>xmaq+32 && mouseX<xmaq+120 && mouseY>ymaq+40 && mouseY<ymaq+90 && count==1.4){
      if(mouseIsPressed){
        count=1.5;
      }
    }
    if(mouseX>xmaq+32 && mouseX<xmaq+120 && mouseY>ymaq+40 && mouseY<ymaq+90 && count==2.2){
      if(mouseIsPressed){
        count=2.3;
      }
    }
    
    //Botao verde
    if(mouseX>xmaq+36 && mouseX<xmaq+60 && mouseY>ymaq+107 && mouseY<ymaq+120 && count==1.3){
      if(mouseIsPressed){
        count=1.4;
        image(maqgr,xmaq,ymaq,wmaq,hmaq);
      }
    }
    if(mouseX>xmaq+36 && mouseX<xmaq+60 && mouseY>ymaq+107 && mouseY<ymaq+120 && count==2.1){
      if(mouseIsPressed){
        count=2.2;
        image(maqfr,xmaq,ymaq,wmaq,hmaq);
      }
    }
    
    //Botao azul
    if(mouseX>xmaq+70 && mouseX<xmaq+94 && mouseY>ymaq+107 && mouseY<ymaq+120 && count==1.2){
      if(mouseIsPressed){
        count=1.3;
      }
    }
    
    //Botao laranja
    if(mouseX>xmaq+103 && mouseX<xmaq+127 && mouseY>ymaq+107 && mouseY<ymaq+120 && count==1.2){
      if(mouseIsPressed){
        count=2.1;
      }
    }
    
    //G
    if(mouseX>xg+wg/4 && mouseX<xg+3*wg/4 && mouseY>yg+10 && mouseY<yg+150 && count==1.5){
      if(mouseIsPressed){
        count=1.6;
      }
    }
    if(mouseX>xg+wg/4 && mouseX<xg+3*wg/4 && mouseY>yg+10 && mouseY<yg+150 && count==2.3){
      if(mouseIsPressed){
        count=2.4;
      }
    }
    if(mouseX>xg+wg/4 && mouseX<xg+3*wg/4 && mouseY>yg+10 && mouseY<yg+150 && count==1.1){
      if(mouseIsPressed){
        count=3;
      }
    }
  }
  
  //Instruções
  if (tela==2){
    background(0);
    textAlign(LEFT);
    textSize(27);
    
    //Texto
    noStroke();  //Borda Texto
    fill(255);  //Cor Texto
    text("Esse jogo é um estilo aventura/RPG em que se \nusa apenas o MOUSE para aprender CIÊNCIA.\nPara interagir com alguém ou com algo, basta \nclicar. Caso haja uma possível interação, ela irá \nacontecer.\nSiga os seguintes passos para entender:\nFale com o cientista -> Panela -> Água -> \nMáquina -> Frio/Calor -> Iniciar -> Máquina ->\nCientista.\nA ideia é interagir e desafiar o estudante.\n(clique para continuar)",10,35);  //Texto
    
    //Avançar p/ tela 2.1
    if(mouseIsPressed){
      count=1;
    }
  }
  if (tela==2.1){
    background(0);
    textAlign(LEFT);
    textSize(27);
    
    //Texto
    noStroke();  //Borda Texto
    fill(255);  //Cor Texto
    text("A ideia é ter diálogos engraçados e didáticos \npara prender atenção do aluno. Cada capítulo \nensinará sobre um assunto. Ao término de um \ncapítulo será desbloqueado um conteúdo extra \nsobre o assunto aprendido. \n\nEx:Capítulo 1 - Fases da água. \nRECOMPENSA: Explicação sobre a sublimação \nque, propositalmente, foi deixada de lado no \ncapítulo e diagrama das fases pronto para \ndownload.    (Clique para voltar ao menu)",10,35);  //Texto
    
    //Volta ao Menu
    if(mouseIsPressed){
      tela=0;
    }
  }
  
  //Créditos
  if (tela==3){
    background('#202020');
    textAlign(LEFT);
    
    //Minha Descrição
    image(eu,30,30,200,200);  //Minha Foto
    noStroke();  //Borda Texto
    fill(255);  //Cor Texto
    text("Marcus Vinícius de \nSousa Viana\n\n(20190071930)\n\nResponsável por Tudinho",250,50);  //Texto
    
    //Volta ao Menu
    if(mouseIsPressed){
      count=1;
    }
  }
}