class dustbin
{
    constructor(x,y,width,height)
    {
       
        this.height=height;
        
        this.width=width
        this.body=Bodies.rectangle(x,y,width,height,{isStatic:true});
       

        World.add(world,this.body);
    }

    display()
    {   push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        fill("white");
      
        rectMode(CENTER);
       
        rect(0,0,this.width,this.height);
        pop();
    }
}