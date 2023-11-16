// console.log("Hello world")



var prod=(a,b)=>{
    return a*b
}
console.log(prod(10,20))


//object
let obj={
    name:"Alexa",
    age:"25",
    greet(){
        console.log("Hi ,I am "+this.name)
    }
}

obj.greet()