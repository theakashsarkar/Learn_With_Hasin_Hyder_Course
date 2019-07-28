var a ={
    b:20,
    c:"my name is akash"
}
var d = Object.create(a);
d.c = "my name is akash"
console.log(d.hasOwnProperty("c"));