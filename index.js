document.querySelector('#tip-form').onchange = function(){


    const bill =  Number(document.querySelector('#totalBill').value) ;
    const tip =  document.querySelector('#tipInput').value;
    const tipOut = document.querySelector('#tipOutput');
    const tipAmount = document.querySelector('#tipAmount');
    const totalBillWithTip =  document.querySelector('#totalBillWithTip');

    const result = document.querySelector('#results');

    const tipValue = bill * (tip / 100);
    const finalValue = bill + tipValue;

    tipAmount.value = finalValue.toFixed(2);
    totalBillWithTip.value =finalValue.toFixed(2);

   tipOut.innerHTML = `${tip}%`

   result.style.display = 'block'
}