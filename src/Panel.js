class Panel{
    constructor(){
        this.words = ["jeimy","forward","return",]
        this.vectorAdivinanza=[];
        this.selectword;
    }


    drawlines(){
        let idword = 0;
        idword =Math.floor(Math.random()*(this.words.length-0)+0);
        const selectword= this.words[idword];
        console.log(selectword);
        for (let index = 0; index < selectword.length; index++) {
          this.vectorAdivinanza.push("_");
        }
        return this.vectorAdivinanza;

    }

    showCorrect(letter){
        if (letter==true){
            return (this.words = "correct");
         } else{
            return (this.words = "incorrect");
            }
    
    }
}
