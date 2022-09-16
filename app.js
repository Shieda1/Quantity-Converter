// https://www.omnicalculator.com/conversion/quantity-converter

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const unitsRadio = document.getElementById('unitsRadio');
const pairsRadio = document.getElementById('pairsRadio');

let units;
let pairs = v; 

// labels of the inpust
const variable = document.getElementById('variable');

unitsRadio.addEventListener('click', function() {
  variable.textContent = 'Pairs';
  pairs = v;
  result.textContent = '';
});

pairsRadio.addEventListener('click', function() {
  variable.textContent = 'Units';
  units = v;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(unitsRadio.checked)
    result.textContent = `Units = ${computeunits().toFixed(5)}`;

  else if(pairsRadio.checked)
    result.textContent = `Pairs = ${computepairs().toFixed(5)}`;
})

// calculation

function computeunits() {
  return Number(pairs.value) * 2;
}

function computepairs() {
  return Number(units.value) / 2;
}