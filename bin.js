class Bin{
    constructor(x,y,width,height){
       var options={ 
        isStatic:true,
        'restitution':0.3,
        'friction':0.5,
        'density':0.8, 
        }
    this.body=Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height=height;
    World.add(world,this.body);
    
    }
    display(){
        var binpos=this.body.position;
         push ();
         translate(binpos.x,binpos.y);
         fill ("green");
         rectMode (CENTER);
         rect(0,0,this.width,this.height);
         pop ();
    }
}
