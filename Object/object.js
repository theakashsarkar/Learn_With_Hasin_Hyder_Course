var a ={
    b:60,
    c:"hello akash",
    d:()=>console.log("ami to bala na bala nea thaiko")
}
console.log(a.b)
/*********************************** */
var a ={
    b:60,
    c:"hello akash",
    d:()=>console.log("ami to bala na bala nea thaiko")
}
var f ={
    b:60,
    c:"hello akash",
    d:()=>console.log("ami to bala na bala nea thaiko")
}
f.b = 5; //object value change
f.t = "ki ra ki obsta"// object proprety added.
delete f.d
console.log(f.t);