function setup() {
  createCanvas(400, 400);
}
  let xJogador1 = 30;
  let xJogador2 = 30;
  let xJogador3 = 30;

function draw() {
  background("rgb(78,201,78)");
  textSize(40);
  text("😎",xJogador1,100);
  text("😝",xJogador2,200);
  text("👻",xJogador3,300);
  rect(350, 0, 10, 400);

  xJogador1 = xJogador1 + random(4);
  xJogador2 = xJogador2 + random(4);
  xJogador3 = xJogador3 + random(4);
  
  if (xJogador1 > 350) {
     text("Jogador 1 venceu!", 50, 200);
    noLoop();
  }
  
  if (xJogador2 > 350) {
   text("Jogador 2 venceu!", 50, 200);
     noLoop();
  }
  
   if (xJogador3 > 350) {
   text("Jogador 3 venceu!", 50, 200);
     noLoop();
   }
  
}