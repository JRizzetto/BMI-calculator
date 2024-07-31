const btnEl = document.getElementById("btn");
const bmiInputEl = document.getElementById("bmi-result");
const conditionEl = document.getElementById("weight-condition");

function calculateBMI() {
    const heightValue = document.getElementById("height").value / 100;
    const weightValue = document.getElementById("weight").value;
    
    const bmiValue = weightValue / (heightValue * heightValue);

    bmiInputEl.value = bmiValue;

    if (bmiValue < 18.5) {
        conditionEl.innerText = "Under weight"
    } 
    else if (bmiValue >=18.5 && bmiValue <= 24.9) {
        conditionEl.innerText = "Normal weight"
    } 
    else if (bmiValue >= 25 && bmiValue <= 29.9) {
        conditionEl.innerText = "Over weight"
    } 
    else if (bmiValue >= 30) {
         conditionEl.innerText = "Obesity"
    }
}

btnEl.addEventListener("click", calculateBMI)