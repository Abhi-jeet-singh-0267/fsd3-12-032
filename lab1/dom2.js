import { EventEmitter } from "events";
const button=new EventEmitter();
button.on("click",()=>{
    console.log("Task 1");
});

button.on("click",()=>{
    console.log("Task 3423");
});

button.emit("click");