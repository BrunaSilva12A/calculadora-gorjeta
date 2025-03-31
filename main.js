let bill = 0
let tipPercentage = 0
let numberOfPeople = 0
let buttonSelected = null

function receiveBillValue(){
    bill = document.querySelector("#bill").valueAsNumber
}

function receiveNumberOfPeopleValue() {
    numberOfPeople = document.querySelector("#people").valueAsNumber
}

function receiveTipPercentageValue(value){
   if(buttonSelected !== null){
    buttonSelected.classList.remove("button-selected")
   }

   let customTipInput = document.querySelector("#custom-tip").valueAsNumber

   if(customTipInput!== ""){
    customTipInput.Value = ""
   }

   tipPercentage = value / 100

   buttonSelected = document.querySelector(`#button-${value}`)
   buttonSelected.classList.add("button-selected")
}

function receiveCustomTipPercentageValue(){
    if(buttonSelected !==null) {
        buttonSelected.cassList.remove("button-selected")
        buttonSelected = null
    }

    tipPercentage = document.querySelector("#custom-tip").valueAsNumber / 100
}

