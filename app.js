const { rejects } = require('assert');
const { resolve } = require('dns');
const Express = require('express');
const fs = require('fs')
const app = Express();
let PORT = 5000;
app.get("/",(req,res)=>{
res.send("hiiiii")
})

let Data = [
  {
    "id": 1,
    "name": "Abhishek Prajapati",
    "email": "abhishek@gmail.com",
    "mobile": "9876543210",
    "city": "Thane",
    "course": "BSc IT",
    "age": 21,
    "status": "Active"
  },
  {
    "id": 2,
    "name": "Jay Patil",
    "email": "jay@gmail.com",
    "mobile": "9876543211",
    "city": "Mumbai",
    "course": "BCom",
    "age": 22,
    "status": "Inactive"
  },
  {
    "id": 3,
    "name": "Rahul Sharma",
    "email": "rahul@gmail.com",
    "mobile": "9876543212",
    "city": "Pune",
    "course": "BCA",
    "age": 20,
    "status": "Active"
  },
  {
    "id": 4,
    "name": "Sneha Verma",
    "email": "sneha@gmail.com",
    "mobile": "9876543213",
    "city": "Nashik",
    "course": "MBA",
    "age": 24,
    "status": "Pending"
  },
  {
    "id": 5,
    "name": "Rohit Singh",
    "email": "rohit@gmail.com",
    "mobile": "9876543214",
    "city": "Delhi",
    "course": "MCA",
    "age": 23,
    "status": "Active"
  },
  {
    "id": 6,
    "name": "Priya Mehta",
    "email": "priya@gmail.com",
    "mobile": "9876543215",
    "city": "Surat",
    "course": "BBA",
    "age": 21,
    "status": "Inactive"
  },
  {
    "id": 7,
    "name": "Aman Gupta",
    "email": "aman@gmail.com",
    "mobile": "9876543216",
    "city": "Jaipur",
    "course": "BTech",
    "age": 22,
    "status": "Pending"
  },
  {
    "id": 8,
    "name": "Neha Joshi",
    "email": "neha@gmail.com",
    "mobile": "9876543217",
    "city": "Nagpur",
    "course": "BSc CS",
    "age": 20,
    "status": "Active"
  },
  {
    "id": 9,
    "name": "Karan Malhotra",
    "email": "karan@gmail.com",
    "mobile": "9876543218",
    "city": "Hyderabad",
    "course": "MTech",
    "age": 25,
    "status": "Inactive"
  },
  {
    "id": 10,
    "name": "Pooja Kulkarni",
    "email": "pooja@gmail.com",
    "mobile": "9876543219",
    "city": "Bangalore",
    "course": "BCA",
    "age": 22,
    "status": "Active"
  }
]

async function errorT(a,b){

    try{
        if(b==0){
                throw new Error("cont divoid by number") 
        }

        let result = a/b;
        
        console.log(result)
    }catch(err){
        console.error(err)
    }
}

errorT(0,10)


function login(password) {

    return new Promise((resolve, reject) => {

        if (password === "1234") {
            resolve("Login Success");
        } else {
            reject("Wrong Password");
        }
    });
}

login("1234")
    .then(console.log)
    .catch((err) => {
        console.log(err);
    });

let a = fs.readFileSync("text.txt","utf8")

console.log(a)

fs.writeFileSync("text2.txt",a)


app.listen(PORT , ()=>{
    console.log("Server run on ",PORT)
})

