class Bob {

    constructor(x,y,diameter) {

        var options = {
            
            isStatic:false,
           restitution:0.3,
           friction:0.5,
           density:1.2 

        }

       this.x = x;
       this.y = y;
       this.diameter = diameter;
       this.body = Bodies.circle(this.x,this.y,this.diameter/2,options); 

        World.add(world, this.body);

    }

    display() {

        var pos = this.body.postion;
        push();
        rectMode(CENTER);
        fill("pink");
        ellipse(this.x,this.y,this.diameter);
        pop();

    }

}