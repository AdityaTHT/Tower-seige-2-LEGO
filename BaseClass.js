class BaseClass {
    constructor(x, y,width,height) {
      var options = {
          'restitution':0.02,
          'friction':0.1,
          'density':0.7
      }
      this.body = Bodies.rectangle(x, y,width,height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("Images/base.png");
      this.Visibility = 255;
      World.add(world, this.body);
    }
    
    display(){
     var angle = this.body.angle;
     push();
     rotate(angle);
     imageMode(CENTER);
     //image(this.image,this.body.position.x,this.body.position.y,100,90);
     pop();
    }
};