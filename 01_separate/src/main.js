function setup() {
  createCanvas(800, 600)
  Global.game = new Game()
}

function draw() {
  background('black')
  Global.game.draw()
}

function keyPressed(event) {
  Global.game.keyPressed(event)
}