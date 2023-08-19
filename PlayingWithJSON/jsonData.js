
const fs=require("fs");

const objData={
    name:"Shashwat",
    age:"21",
    gender:"male"
}
const jsonData=JSON.stringify(objData);

fs.writeFile("jsondata.txt",jsonData,()=>{
    console.log(err);
});

const jsonData2=fs.readFileSync("jsondata.txt","utf-8",(err,data)=>{
    console.log("err");
})
const objData2= JSON.parse(jsonData2);
console.log(objData2);

