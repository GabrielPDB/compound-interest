const calc = {
  amount: document.querySelector('#amount'),
  capital: document.querySelector('#capital'),
  interestRate: document.querySelector('#interestRate'),
  time: document.querySelector('#time')
}

function calculateAmount() {
  amount.style['color'] = 'red'
  const total =
    capital.value * Math.pow(1 + interestRate.value / 100, time.value)
  amount.value = total.toFixed(2)
}
function calculateCapital() {
  capital.style['color'] = 'red'

  const total =
    amount.value / Math.pow(1 + interestRate.value / 100, time.value)

  capital.value = total.toFixed(2)
}
function calculateInterestRate() {
  interestRate.style['color'] = 'red'

  const total = ((amount.value / capital.value) ** (1 / time.value) - 1) * 100

  interestRate.value = total.toFixed(2)
}
function calculateTime() {
  time.style['color'] = 'red'
  // Aqui tá complexo
}

function chooseCalc() {
  if (calc.amount.value == 0) {
    calculateAmount()
  } else if (calc.capital.value == 0) {
    calculateCapital()
  } else if (calc.interestRate.value == 0) {
    calculateInterestRate()
  } else if (calc.time.value == 0) {
    calculateTime()
  }
}

console.log()
