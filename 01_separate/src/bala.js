class Bala {
  constructor(x, y) {
    this.position = createVector(x, y)
    this.velocity = createVector()

    this.maxSpeed = 50
    this.maxSteer = 0.5
  }

  draw() {
    // calcular todos los vectores deseados
    let desiredArrive = SteeringBehaviours.arrive(this, Global.npc.position, 1000)
    let desiredSeparate = SteeringBehaviours.separate(this, Global.balas, 50)

    // sumar todos los deseados
    let desired = desiredArrive.add(desiredSeparate)

    // cálculo del vector steer y se calcula la velocidad y la posición
    let steer = SteeringBehaviours.calculateSteer(this, desired)
    this.velocity.add(steer)
    this.position.add(this.velocity)

    // se dibuja el npc y el rango de acción
    
    fill('yellow')
    noStroke()
    circle(this.position.x, this.position.y, 15)
    noFill()
    stroke('gray')
    circle(this.position.x, this.position.y, this.range * 2)
  }
}
