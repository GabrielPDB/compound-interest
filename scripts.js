const calc = {
  amount: document.querySelector('#amount'),
  capital: document.querySelector('#capital'),
  interestRate: document.querySelector('#interestRate'),
  time: document.querySelector('#time')
}

function calculateAmount() {
  calc.amount.style['color'] = 'green'
  const total =
    calc.capital.value *
    Math.pow(1 + calc.interestRate.value / 100, calc.time.value)
  calc.amount.value = total.toFixed(2)
}
function calculateCapital() {
  calc.capital.style['color'] = 'green'

  const total =
    calc.amount.value /
    Math.pow(1 + calc.interestRate.value / 100, calc.time.value)

  calc.capital.value = total.toFixed(2)
}
function calculateInterestRate() {
  calc.interestRate.style['color'] = 'green'

  const total =
    ((calc.amount.value / calc.capital.value) ** (1 / calc.time.value) - 1) *
    100

  calc.interestRate.value = total.toFixed(2)
}
function calculateTime() {
  calc.time.style['color'] = 'green'
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

function clearFields() {
  calc.amount.value = ''
  calc.capital.value = ''
  calc.interestRate.value = ''
  calc.time.value = ''
}
