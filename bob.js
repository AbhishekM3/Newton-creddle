class Bob {
    constructor(x, y,radius,options) {
      var options = {
          isStatic:false,
          'restitution':0.5,
          'friction':1.2,
          'density':1,
      }
      this.body = Bodies.circle(x, y,15,options);
      this.radius = radius
      
      World.add(world, this.body);
    } 
    display(){
     push();
     ellipseMode(RADIUS);
     fill("pink")
     ellipse(this.body.position.x,this.body.position.y,15,15);
     pop();
          
    }
  }