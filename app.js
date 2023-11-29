// // // console.log("Hello world")



// // var prod=(a,b)=>{
// //     return a*b
// // }
// // console.log(prod(10,20))


// // //object
// // let obj={
// //     name:"Alexa",
// //     age:"25",
// //     greet(){
// //         console.log("Hi ,I am "+this.name)
// //     }

// // }

// // obj.greet()


// const http=require('http')
// const fs=require('fs')
// fs.writeFile("index.txt","Hello guys",(err,data)=>{
//     console.log("data addede")
// })
// fs.readFile("index.txt",(err,data)=>{
//     console.log(data.toString())
//   })

// const server=http.createServer((req,res)=>{

//     res.setHeader("Content-type","text/plain")
//       switch(req.url){
//       case '/home':
//         res.write("Welcome home")
//         res.end()
//         break
//         case '/about':
//             res.write("Welcome to About Us page")
//             res.end()
//             break
//             case '/node':
//                 res.write("Welcome to Node JS page")
//         res.end()
//         break
//         default:
//             res.write("Welcome home")
//         res.end()
//         break
//       }

// })

// server.listen(4000,"localhost",()=>{
//     console.log("listening to the post")
// })



// const express=require('express')

// const app=express()


// app.listen(4000)

// app.use('/',(req,res)=>{
//   res.write("Hi ")
// })

const express=require('express')
const path=require('path')

const app=express()

//listening to the port 
app.listen(3000)


//gtiing req and give back the response
app.get('/',(req,res)=>{
    res.sendFile(path.resolve("add",'index.html'))
})


app.get('/about',(req,res)=>{
    res.sendFile(path.resolve("add","about.html"))
})

//redirect

app.get('/about-me',(req,res)=>{
    res.redirect('/about')
})


//404 page

app.use((req,res)=>{
    res.status(404).sendFile(path.resolve("add",'404page.html'))
})

