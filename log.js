class Log {
    constructor(x,y,width,height){
    var option = {
        restitution: 1;
    }
    this.body= Bodies.rectangle(x,y,width,height)
    World.add(world.this.body);
    }
    display(){
        var pos =this.body.position;
        rectmode(CENTRE);
        fill(255);
        rect(pos.x, pos.y, this.width, this.height);
    }
}