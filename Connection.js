class Connection
{
    constructor(x,y)
    {
    var options ={
      bodyA:x,
      pointB:y,
      stiffness:0.04,
      length:20
    }
    this.body=Constraint.create(options)
    World.add(world,this.body)
  
    }
    display()
    {
      
      if(this.body.bodyA)
     {
      var a= this.body.bodyA.position;
var b= this.body.pointB;

stroke(48,22,8)
strokeWeight(5)
line (a.x+20,a.y+9,b.x+30,b.y+9)
line (a.x-10,a.y+9,b.x-10,b.y+9)
     }

     
        
    }
    fly()
    {
      this.body.bodyA=null
    }
    join(bird)
    {
     this.body.bodyA=bird
    }
}