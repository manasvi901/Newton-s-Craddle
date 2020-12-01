class Bob{
    constructor(x,y,radius){
       
    var options={
    isStatic:false,
    restitution:0.3,
    friction:0.5,
    density:1.2
}
World.add(world,this.body);
}
display(){
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
  }}