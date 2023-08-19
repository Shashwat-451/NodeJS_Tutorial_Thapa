const fs=require("fs");
const http=require("http");

const server=http.createServer((req,res)=>{

    if(req.url=="/")
    {
        res.end("Welcome to Home Page");
    }
    else if(req.url=="/about")
    {
        req.end("Welcome to about about");
    }
    else if(req.url=="/userapi")
    {
        fs.readFile(`${__dirname}/practiceAPI.json`,"utf-8",(err,data)=>{
            console.log(data);
            res.end(data);
            const objData=JSON.parse(data);
            console.log(objData.id);
        })
        
    }
    else
    {
        res.end("This Page does not exist");
    }
})

server.listen(8000,"localhost",()=>{
    console.log("Listening");
})