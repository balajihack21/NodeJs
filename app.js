// // console.log("Hello world")



// var prod=(a,b)=>{
//     return a*b
// }
// console.log(prod(10,20))


// //object
// let obj={
//     name:"Alexa",
//     age:"25",
//     greet(){
//         console.log("Hi ,I am "+this.name)
//     }

// }

// obj.greet()


const http=require('http')

const server=http.createServer((req,res)=>{

    res.setHeader("Content-type","text/plain")
      switch(req.url){
      case '/home':
        res.write("Welcome home")
        res.end()
        break
        case '/about':
            res.write("Welcome to About Us page")
            res.end()
            break
            case '/node':
                res.write("Welcome to Node JS page")
        res.end()
        break
        default:
            res.write("Welcome home")
        res.end()
        break
      }
})

server.listen(4000,"localhost",()=>{
    console.log("listening to the post")
})