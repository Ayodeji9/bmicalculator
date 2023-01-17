let input = document.getElementById('input')
let input1 = document.getElementById('input1')
let note = document.getElementById('note')
// let bmi = document.getElementById('bmi')
// let weight = input1.value



function calculate() {
    let divide = `${input.value / 100}`
    let square = `${divide * divide}`
    let answer = `${input1.value / square}`

    if (answer < 18.5) {
        note.textContent = `${"I'm sorry to tell you but wait are you really an human being or a ghost because your BMI is way too small small so please before you die and say that it is your village people that is doing you go and buy food and eat pls don't die"}`
    }
    if (answer == 18.5) {
        note.textContent = `${"Your BMI is "+ answer + "and you are Underweight"}`
    }
    else if(answer >= 18.5 && answer <= 25) {
        note.textContent = `${"Your BMI is "+ answer + "and you are Normal"}`
    }
    else if(answer >= 25 && answer <= 30){
        note.textContent = `${"Your BMI is "+ answer + "and you are Over weight"}`
    }
    else if(answer >= 30 && answer <= 35){
        note.textContent = `${"Your BMI is "+ answer + "and you are Obese"}`
    }
    else{
        note.textContent = `${"I'm sorry to tell you you can't make it in life anymore"}`
    }
  
}



let input2 = document.getElementById('input2')
let convert = document.getElementById ('convert')
let note1 = document.getElementById('note1')

function convert1() {
    inputVal = input2.value
    note1.textContent = `${input2.value **= 1/2}`
    input2.value =''
    note1.style.paddingTop =('10px')
}