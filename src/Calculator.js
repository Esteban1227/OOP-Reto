class Calculator {
    constructor(){
        this.num1 = 0
        this.num2 = 0
        this.results = 0
        this.arrayResults = []
    };

    typeOfCalculation(typeOperation, num1, num2){
        switch (typeOperation) {
            case 1:
                this.num1 = parseInt(num1)
                this.num2 = parseInt(num2)
                return this.sum()
            case 2:
                this.num1 = parseInt(num1)
                this.num2 = parseInt(num2)
                return this.mul()
            case 3:
                this.num1 = parseInt(num1)
                this.num2 = parseInt(num2)
                return this.div()
            case 4:
                this.num1 = parseInt(num1)
                this.num2 = parseInt(num2)
                this.sum() 
                this.mul() 
                this.div()
                return this.arrayResults
            default:
                break;
        }
    }
    sum(){
        this.results = this.num1 + this.num2
        this.arrayResults.push(this.results)
        return this.results
    };
    
    mul(){
        this.results = this.num1 * this.num2
        this.arrayResults.push(this.results)
        return this.results
    };
    
    div(){
        if(this.num1 === 0 || this.num2 === 0){
            return console.error('no se puede dividir por 0')
        }
        this.results = this.num1 / this.num2
        this.arrayResults.push(this.results)
        return this.results
    }
}


export default Calculator