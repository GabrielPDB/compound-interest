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

  calc.amount.type = 'text'
  calc.amount.value = formatMoneyValue(total)
}

function calculateCapital() {
  calc.capital.style['color'] = 'green'

  const total =
    calc.amount.value /
    Math.pow(1 + calc.interestRate.value / 100, calc.time.value)

  calc.capital.type = 'text'
  calc.capital.value = formatMoneyValue(total)
}

function calculateInterestRate() {
  calc.interestRate.style['color'] = 'green'

  const total =
    ((calc.amount.value / calc.capital.value) ** (1 / calc.time.value) - 1) *
    100

  calc.interestRate.type = 'text'
  calc.interestRate.value = formatPercentValue(total)
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

function resetInputValues() {
  calc.amount.value = ''
  calc.capital.value = ''
  calc.interestRate.value = ''
  calc.time.value = ''
}

function resetInputTypes() {
  calc.amount.type = 'number'
  calc.capital.type = 'number'
  calc.interestRate.type = 'number'
  calc.time.type = 'number'
}

function resetInputColors() {
  calc.amount.style['color'] = 'white'
  calc.capital.style['color'] = 'white'
  calc.interestRate.style['color'] = 'white'
  calc.time.style['color'] = 'white'
}

function clearFields() {
  resetInputValues()
  resetInputColors()
  resetInputTypes()
}

function formatMoneyValue(total) {
  newValue = total.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })

  return newValue
}

function formatPercentValue(value) {
  return `${value.toFixed()} %`
}
