const http=require("http");
const server=http.createServer((req,res)=>{
    if(req.url=="/")
    {
        res.writeHead(200,{"Content-type":"text/html"});
        res.end("Welcome to our home page");
    }
    else if(req.url=="/about")
    {
        res.writeHead(200,{"Content-type":"text/html"});
        res.end("Welcome to our home page");
    }
    else if(req.url=="/contact")
    {
        res.writeHead(200,{"Content-type":"text/html"});
        res.end("Welcome to our contact page");
    }
    else
    {
        res.writeHead(404,{"Content-type":"text/html"});
        res.end("This Page does not exist");
    }
})

server.listen("3000","127.0.0.1",()=>{
    console.log("Listening at 3000");
})