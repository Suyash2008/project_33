class Plinko{
    constructor(x,y,r){
      var options = {
          isStatic : true
      }  
      
      this.r = r
      this.body = Bodies.circle(x,y,this.r,options)
      World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        push();
        ellipseMode(CENTER)
        fill("white")
        ellipse(pos.x,pos.y,this.r*2,this.r*2)
        pop();
    }
    }