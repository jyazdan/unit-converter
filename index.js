let inputEl = document.getElementById("input-el")
let buttonEl = document.getElementById('button-el')
let lengthResult = document.getElementById("length-result")
let volumeResult = document.getElementById("volume-result")
let massResult = document.getElementById("mass-result")

buttonEl.addEventListener('click', function(){
  let convert = inputEl.value
  lengthCalculation(convert)
  volumeCalculation(convert)
  massCalculator(convert)
})

function lengthCalculation(input) {
  const meters = input
  const metersToFeet = meters * 3.281
  const feetToMeters = input * 0.3048
  lengthResult.textContent = `${input} meters = ${metersToFeet.toFixed(3)} feet | ${input} feet = ${feetToMeters.toFixed(3)} meters`
}

function volumeCalculation(input){
  const liters = input
  const litersToGallons = liters * 0.264
  const gallonsToLiters = input * 3.79
  volumeResult.textContent = `${input} liters = ${litersToGallons.toFixed(3)} gallons | ${input} gallons = ${gallonsToLiters.toFixed(3)} liters`
}

function massCalculator(input) {
  const kilos = input
  const kilosToPounds = kilos * 2.205
  const poundsToKilos = input * 0.4536
  massResult.textContent = `${input} kilos = ${kilosToPounds.toFixed(3)} pounds | ${input} pounds = ${poundsToKilos.toFixed(3)} kilos`
}