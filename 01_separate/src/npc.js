class Npc {
  constructor(x, y) {
    this.position = createVector(x, y)
    this.velocity = createVector()

    this.maxSpeed = 5
    this.maxSteer = 0.5
    this.life = 5
  }

  draw() {

    fill('green')
    noStroke()
    circle(this.position.x, this.position.y, 30)
    noFill()
    stroke('gray')
    circle(this.position.x, this.position.y, this.range * 2)
    fill('black')
    text(this.life, this.position.x, this.position.y)
  }
}
