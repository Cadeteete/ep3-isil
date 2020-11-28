class Player {
  constructor() {
    this.position = createVector(300, 300)
    this.velocity = createVector()
  }

  draw() {
    this.position = createVector(100, mouseY)
    fill('blue')
    noStroke()
    circle(this.position.x, this.position.y, 30)    
  }
  
}
