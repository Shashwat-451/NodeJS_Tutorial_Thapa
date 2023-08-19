const EventEmitter=require("events");
const event = new EventEmitter();


// event.on("saymyname",()=>{
//     console.log("My name is shashwat");
// })

// event.on("saymyname",()=>{
//     console.log("My age is 21");
// })

// event.on("saymyname",()=>{
//     console.log("I live in Mirzapur");
// })

// event.emit("saymyname");


//Passing arguments

event.on("checkpage",(sc,msg)=>{
    console.log(`Status code is ${sc} and Message is ${msg}`);
})

event.emit("checkpage",200,"ok");


