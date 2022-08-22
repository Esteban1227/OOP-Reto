import Calculator from "./Calculator.js"
import './styles.css'
function selectChange(){
    const calculator = new Calculator
    const valueSelect = parseInt(document.getElementById('select').value)
    console.log(valueSelect)
    const input1 = document.getElementById('input1').value
    console.log(input1)
    const input2 = document.getElementById('input2').value
    console.log(input2)
    const span = document.getElementById('result')
    const result = calculator.typeOfCalculation(valueSelect, input1, input2)
    if(valueSelect === 4){
        span.innerHTML = `Result: Addition:${result[0]}, Multiplication: ${result[1]}, Division: ${result[2]} `
        return
    }
    console.log(result)
    span.innerHTML = `Result: ${result}`
}

const btn = document.getElementById('btn')

btn.addEventListener('click', selectChange)



