const http=require("http");
const fs=require("fs");
var requests=require("requests");

const homeFile=fs.readFileSync('home.html',"utf-8");

const replaceVal=(tempVal,orgVal)=>{
  let temperature = tempVal.replace("{%tempval%}", (orgVal.main.temp - 273.15).toFixed(2));
  temperature = temperature.replace("{%tempmin%}", (orgVal.main.temp_min - 273.15).toFixed(2));
  temperature = temperature.replace("{%tempmax%}", (orgVal.main.temp_max - 273.15).toFixed(2));
  
  temperature=temperature.replace("{%location%}",orgVal.name)
  temperature=temperature.replace("{%country%}",orgVal.sys.country)
  return temperature;
}
const server=http.createServer((req,res)=>{
    if(req.url=='/')
    {
        requests('https://api.openweathermap.org/data/2.5/weather?q=Pune&appid=fcc5a55ef9802af5a7c75e13eac22a95')
        .on('data', (chunk)=> {
            const obj=JSON.parse(chunk);
            const arrdata=[obj];
            
          // console.log(arrdata[0].main.temp-273)

          const realTimeData=arrdata.map((val)=>replaceVal(homeFile,val))
          .join("");
          
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.write(realTimeData);
        })
        .on('end',(err)=> {
          if (err) return console.log('connection closed due to errors', err);
          res.end();
        
        });
    }

})

server.listen(8000,"localhost",()=>{
    console.log("listening");
})


