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
      return this.keys2;
    }
  }
  
  export { Keyboard };