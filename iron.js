class Iron{
	constructor(x,y,w,h)
	{
		var options={
			restitution:0.8,
            friction:3,
			density:30
		}
	
		this.w=w
        this.h=h
		this.body=Bodies.rectangle(x, y, w,h ,options)
		World.add(world, this.body);

	}
	display()
	{
			var pos=this.body.position;
            var angle=this.body.angle;		
			push()
			translate(pos.x, pos.y);
           rotate(angle);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("red");
			rect (0,0,this.w,this.h);
			pop()
	}

}