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
    this.image=loadImage("dustbingreen.png");
    World.add(world,this.body);
    
    }
    display(){
        
         push ();
         
         fill ("green");
         imageMode (CENTER);
        if(this.height===20){
            
         image(this.image,1190,580,180,220);
        }
         pop ();
    }
}
