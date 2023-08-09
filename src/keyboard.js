class Keyboard {
    constructor() {
      this.keys = ["A","B","C","D","E","F","G","H","I","J","K","L",
      "M","N","Ñ","O","P","Q","R","S","T","V","W","X","Y","Z",
      ];
      this.keys2 = this.keys.map((key, index) => {
        return {
          id: index + 1,
          letter: key,
          state: false,
        };
      });
    }
  
    createKeyboard() {
      const contenedorLetras=document.createElement("div");
      let contador=0;
      while (contador<this.keys.length){
        const button=document.createElement("button");
        button.textContent=this.keys[contador];
        button.className="btns"
        button.addEventListener("click",(e)=>{
          console.log(e.target.textContent);
        })
        contenedorLetras.appendChild(button)
        contador++;
      }
    return contenedorLetras;
    }
  }
  
  export default Keyboard;