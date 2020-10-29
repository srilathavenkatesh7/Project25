class Paper{
constructor(x,y,radius){
    var options ={
        'restitution':0.3,
        'friction':0.5,
        'density':1.2,
        'isStatic':false,
    }
   
    this.radius=radius;
    this.body=Bodies.circle(x,y,radius,options);
    World.add(world,this.body);
}
display(){
    var paperpos =this.body.position;
     push ();
     translate(paperpos.x,paperpos.y);
     strokeWeight (3);
     fill (255,0,255);
     ellipseMode(RADIUS);
     ellipse(0,0,this.radius,this.radius)
         pop ();
}
}