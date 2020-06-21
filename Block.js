class Block{
    constructor(x,y,width,height){
        var options = {
            'friction':2.0,
            'restitution':0.2,
            'density':1.0
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill("red");
        rect(pos.x,pos.y,this.width,this.height);
    }
}