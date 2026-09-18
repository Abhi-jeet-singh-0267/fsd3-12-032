// DOM -> Document object model
import { EventEmitter } from "events";
const button = new EventEmitter();
button.on("click",()=>{
    console.log("Buttomnmn clicked");
});
button.emit("click");