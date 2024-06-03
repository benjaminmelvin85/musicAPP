import { LightningElement } from 'lwc';

export default class BmiCalculator extends LightningElement {
height=''
weight=''
bmiValue=''
result=''

inputHandler(event) {
    const {name, value} = event.target
    if(name === "height") {
        this.height = value
    }
    if(name === "weight") {
        this.weight = value
    }
  
}
submitHandler(event) {
    event.preventDefault()
    console.log("h", this.height)
    console.log("w", this.weight)
    this.calculate()
}
calculate() {
    let height = Number(this.height * this.height)
    let bmi = Number(this.weight/ height) * 703
    console.log("BMI", bmi)
    this.bmiValue=Number(bmi.toFixed(2))

    if(this.bmiValue < 18.5) {
        this.result = "Underweight"
    } else if(this.bmiValue >=18.5 && this.bmiValue < 25) {
        this.result ="Healthy"
    } else if(this.bmiValue>=25 && this.bmiValue <30) {
        this.result ="Overweight"
    } else {
        this.result="Obese"
    }
    console.log("bmivalue", this.bmiValue)
    console.log("result", this.result)
}
reCalculate() {
    this.height=''
    this.weight=''
    this.bmiValue=''
    this.result=''

}
}