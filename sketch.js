function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
let plantaAltura = 0;
let folhas = [];

function setup() {
  createCanvas(400, 400);
  frameRate(30);
}

function draw() {
  background(220);

  // Chão
  fill(100, 200, 100);
  rect(0, height - 50, width, 50);

  // Caule da planta
  stroke(34, 139, 34);
  strokeWeight(4);
  line(width / 2, height - 50, width / 2, height - 50 - plantaAltura);

  // Folhas
  for (let folha of folhas) {
    drawFolha(folha.x, folha.y);
  }

  // Instruções
  noStroke();
  fill(0);
  textSize(16);
  text("Clique para regar e fazer a planta crescer!", 10, 20);
}

function mousePressed() {
  // Crescimento ao clicar
  if (plantaAltura < 200) {
    plantaAltura += 10;
    // Adiciona folha a cada 20px de altura
    if (plantaAltura % 20 === 0) {
      folhas.push({ x: width / 2, y: height - 50 - plantaAltura });
    }
  }
}

function drawFolha(x, y) {
  fill(34, 139, 34);
  noStroke();
  ellipse(x - 10, y, 15, 10);
  ellipse(x + 10, y, 15, 10);
}
