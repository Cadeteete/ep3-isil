class Game {
  constructor() {
    Global.player = new Player()
    this.numNpcs = 3
    this.numBalas = 3
    this.t = 0
    this.dt = 1
    this.bool = false
    
  }

  draw() {
    Global.player.draw()
    this.t += this.dt * deltaTime / 1000
    Global.balas.forEach(bala => {
      bala.draw()
    })
    if (this.t > 1) {
      this.nextSpawn()
    }
    if (this.bool == true){
      Global.npc.draw()
    }
  }
  nextSpawn(){
    for (let i = 0; i < this.numNpcs; i++) {
      Global.npc = new Npc(random(600, 700), random(600))
      this.t = 0
      this.bool = true
    }
  }
  balasSpawn(){
    for (let i = 0; i < this.numBalas; i++) {
      Global.balas.push(new Bala(100, mouseY))
    }
  }
  keyPressed(event) {
        if (event.keyCode == 32) {
          console.log("espacio"); 
          this.balasSpawn()
        }
  }
}