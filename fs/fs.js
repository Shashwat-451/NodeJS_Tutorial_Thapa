const fs=require('fs');

//if file not exist then it will create and then write
fs.writeFileSync("read.txt","Back with a bang");
//It deletes previous content and write new content
fs.writeFileSync("read.txt","Hello, Sham. How you are doin?");
fs.appendFileSync("read.txt","added content");

const read_data=fs.readFileSync("read.txt");
const instring=read_data.toString();
const read_data2=fs.readFileSync("read.txt",'utf-8');

//You will get buffer data
console.log(read_data);

//You will get uman readable format data
console.log(read_data2);
console.log(instring);


//to rename the file

fs.renameSync("read.txt","newread.txt");

//to delete the file
fs.unlinkSync("newread.txt");

//to delete the folder/directory
// fs.rmdirSync("folder name")