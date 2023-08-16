
const fs=require("fs");

const objData={
    name:"Shashwat",
    age:"21",
    gender:"male"
}
const jsonData=JSON.stringify(objData);

fs.writeFileSync("jsondata.txt",jsonData);

const jsonData2=fs.readFileSync("jsondata.txt","utf-8",()=>{
    console.log("read");
})
const objData2= JSON.parse(jsonData2);
console.log(objData2);

