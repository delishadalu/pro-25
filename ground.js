class ground
{
    constructor(x,y,width)
    {
        this.width=width
        this.body=Bodies.rectangle(x,y,width,20,{isStatic:true})
        World.add(world,this.body)
    }

    display()
    {
        fill("brown")
        rectMode(CENTER)
      
        rect(this.body.position.x,this.body.position.y,this.width,20)

    }
}