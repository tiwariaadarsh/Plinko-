class Particles {
    constructor(x,y,radius){
     var  options = {
       isStatic: false,
       restitution: 0.3,  
       friction: 0.5,
       density: 1.2,
    }
    this.body=Matter.Bodies.circle(x,y,radius,{options});
    this.color=color(random(0,255),random(0,255),random(0,255));
    this.radius=radius;
    
    World.add(world, this.body);
    
}
display(){
    var pos = this.body.position;
    ellipse(RADIUS);
    fill("brown");
    ellipse(pos.x,pos.y,20,20);
}
}