let bill = 0
let tipPercentage = 0
let numberOfPeople = 0
let buttonSelected = null

function receiveBillValue(){
    bill = document.querySelector("#bill").valueAsNumber
    calculate()
}

function receiveNumberOfPeopleValue() {
    numberOfPeople = document.querySelector("#people").valueAsNumber
    calculate()
}

function receiveTipPercentageValue(value){
    removeButtonSelected() 

   let customTipInput = document.querySelector("#custom-tip").valueAsNumber

   if(customTipInput!== ""){
    customTipInput.Value = ""
   }

   tipPercentage = value / 100

   buttonSelected = document.querySelector(`#button-${value}`)
   buttonSelected.classList.add("button-selected")
   calculate()
}

function receiveCustomTipPercentageValue(){
    removeButtonSelected() 
    buttonSelected = null

    tipPercentage = document.querySelector("#custom-tip").valueAsNumber / 100
    calculate()
}

function calculate(){
    if(bill !== 0 && tipPercentage !== 0 && numberOfPeople !== 0) {
        let amountStrong = document.querySelector(".amount strong")
        let tipAmountPerson = (bill * tipPercentage) / numberOfPeople
        amountStrong.innerText = `$${tipAmountPerson.toFixed(2)}`

        let totalStrong = document.querySelector(".total strong") 
        let totalPerson = (bill / numberOfPeople) + tipAmountPerson
        totalStrong.innerText = `$${totalPerson.toFixed(2)}`
    }

   else{
       console.log("preencha tudo")
   }
}

function reset(){
    bill = 0
    document.querySelector("#bill").value = ""

    numberOfPeople = 0
    document.querySelector("#people").value = ""

    tipPercentege = 0
    removeButtonSelected() 

    let customTipInput = document.querySelector("#custom-tip");

    if (customTipInput.value !== "") {
        customTipInput.value = "";
   }
   document.querySelector(".amount strong").innerText = "$0.00"
   document.querySelector(".total strong").innerText = "$0.00"
}

function removeButtonSelected() {
    if(buttonSelected !== null){
        buttonSelected.classList.remove("button-selected")
       }
}