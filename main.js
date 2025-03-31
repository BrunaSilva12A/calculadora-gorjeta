let bill = 0
let tipPercentage
let numberOfPeople

function receiveBillValue(){
    bill = document.querySelector("#bill").valueAsNumber
}

function receiveNumberOfPeopleValue() {
    numberOfPeople = document.querySelector("#people").valueAsNumber
}