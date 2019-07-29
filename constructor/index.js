function CreateHuman(name,age,gender){
    return{
        name:name,
        age:age,
        gender:gender
    }
}
var a = CreateHuman("akash","398","M");
var b =  CreateHuman("sujon","98","m");
console.log(a,b);
/********************************************* */
//consotre function

function Human(name,age,gender){
        this. name =name;
        this.age   = age;
        this.gender= gender;

    
}
var a = new Human("akash",20,"M");
var b = new Human('sujon',89,'M');
console.log(a);
console.log(b);