//Asynchronous so for every operation you have to add a callback function

const fs=require('fs');
fs.writeFile("read.txt","hw[k[",()=>{
    console.log("lik diye");
});

fs.appendFile("read.txt","Updated",()=>{
    // console.log(err);
    console.log("appended");
})

fs.readFile("read.txt","utf-8",(err,data)=>{
    console.log(data);
    console.log(err);
})