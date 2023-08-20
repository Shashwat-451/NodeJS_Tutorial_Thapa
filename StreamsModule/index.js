const fs=require("fs");
const http=require("http");

const server=http.createServer();

//In the context of 
//the http module in Node.js, there is indeed a 'listening' event, and the server.on('listening', ...) syntax is valid and functional.


// In the context of the Node.js http module, the 'request' event is a significant event that represents an incoming HTTP request. 
//You can indeed use server.on("request", ...) to set up a listener for this event.

/*server.on("request", (request, response) => {
  // Handle the incoming request and send a response
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("Hello, World!\n");
});

Alternatively, you can achieve the same result by
 directly providing the request handling logic in the server creation callback function, like you did initially.

 const server = http.createServer((request, response) => {
  // Handle the incoming request and send a response
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("Hello, World!\n");
});


*/

server.on("request",(req,res)=>{

   const rstream=fs.createReadStream("input.txt");
//    rstream.on("data",(chunkdata)=>{
//     res.write(chunkdata);
//    })

//    rstream.on("end",()=>{
//     res.end();
//    })

//    rstream.on("error",(err)=>{
//     console.log(err);
//     res.end("File Not Found");
//    })

rstream.pipe(res);

});


server.listen(8000,"localhost",()=>{
    console.log("Listening");
})