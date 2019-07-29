function Animul(type,live){
    this.type = type;
    this.live = live;
}
class Human extends Animul{
      constructor(name){
          super("mamal",true);
          this.name=name;
      } 
}
var name = new Human("akash");
console.log(name);
console.log(name.type);
console.log(name.live);