class Ball{
    constructor(x,y,width,height,angle){
        var options ={
            isStatic : false,
            frictionAir:0.005,
            density:0.5,

        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;

        World . add(world , this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push ();
        translate (pos.x , pos.y);
        rotate (angle);
        stroke (1);
        strokeWeight ("black");
        fill (22,171,126);
        ellipse (0,0 , this.width , this.height);
        pop ();
    }
}