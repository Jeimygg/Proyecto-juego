import Keyboard from "./keyboard.js";

document.addEventListener("DOMContentLoaded",()=>{
    const board = new Keyboard();
    console.log(board.createKeyboard());
    document.querySelector("#bot").appendChild(board.createKeyboard())
})
// import { Panel } from "./Panel.js"




// const App = new Keyboard();
// const Panels = new Panel();


// console.log (Pannels);

// const vector = app.drawKeyboard();
// const palabra = Panel 


