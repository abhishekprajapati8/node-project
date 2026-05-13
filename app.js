const Express = require('express');
const fs = require('fs')
const app = Express();
let PORT = 5000;

function readFile(){
    return new Promise((resolve , reject)=>{
        fs.readFile("text.txt","utf8", (err, data)=>{
            if(err) reject(err);
            else resolve(data);
        })
    })
}
readFile().then((data)=>{
    fs.writeFile("demo.txt",data,(err)=>{
        if(err) console.log(err);
        else console.log("file created")
    })
}).catch(console.log)

app.listen(PORT , ()=>{
    console.log("Server run on ",PORT)
})

