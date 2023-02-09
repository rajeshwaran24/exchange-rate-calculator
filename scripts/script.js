const currency1El=document.getElementById('currency1')
const currency2El=document.getElementById('currency2')
const amount1El=document.getElementById('amount1')
const amount2El=document.getElementById('amount2')
const btnEl=document.getElementById('btn-swap')
const amtEl=document.getElementById('amt')
const url =`https://v6.exchangerate-api.com/v6/869324e2889de32c93218483/latest/`;

function calculate(){
    let currency1=currency1El.value;
    let currency2=currency2El.value;

fetch(`https://v6.exchangerate-api.com/v6/869324e2889de32c93218483/latest/${currency1}`)
.then((response)=>response.json())
.then((data)=>{
    let amt=data.conversion_rates[currency2];
    amtEl.innerText=`1${currency1}=${amt.toFixed(2)} ${currency2}`
    amount2El.value=(amount1El.value*amt).toFixed(2);
})
}

currency1El.addEventListener('change',calculate);
currency2El.addEventListener('change',calculate);

amount1El.addEventListener('input',calculate);
amount2El.addEventListener('input',calculate);

btnEl.addEventListener('click',()=>{
    let temp = currency1El.value;
    currency1El.value=currency2El.value;
    currency2El.value=temp;
    calculate()
  })
  calculate();