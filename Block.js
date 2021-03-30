class Block{
  constructor(x, y) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, 30, 40, options);
      this.width = 30;
      this.height = 40;
      this.image = loadImage("block.png");
      this.Visiblity = 225
      World.add(world, this.body);
    }
    
  display(){ 
    console.log(this.body.speed); 
    var pos= this.body.position; 
    if(this.body.speed <3){ 
      imageMode(CENTER); 
      image(this.image,pos.x,pos.y,this.width, this.height); } 
      else{ World.remove(world, this.body); 
            push(); 
            this.visiblity = this.visiblity - 5; 
            tint(255,this.visiblity); 
            image(this.image, this.body.position.x, this.body.position.y,this.width, this.height); 
            pop(); 
          } 
        }


}
