const currencyOne = document.getElementById('currency-one');
const currencyTwo = document.getElementById('currency-two');
const amountOne = document.getElementById('amount-one');
const amountTwo = document.getElementById('amount-two');
const rate = document.getElementById('rate');
const swap = document.getElementById('swap');


//Fetch exchange rate and update the DOM accordingly
function calculate(){
	const currencyOneName = currencyOne.value;
	const currencyTwoName = currencyTwo.value;

	fetch(`https://api.exchangerate-api.com/v4/latest/${currencyOneName}`)
	.then(res => res.json())
	.then(data => {
		const currencyRate = data.rates[currencyTwoName];

		rate.innerText = `1 ${currencyOneName} = ${currencyRate} ${currencyTwoName}`;

		amountTwo.value = (amountOne.value * currencyRate).toFixed(2);
	})
}


//Event listener for all actions
currencyOne.addEventListener('change', calculate);
currencyTwo.addEventListener('change', calculate);
amountOne.addEventListener('input', calculate);
amountTwo.addEventListener('input', calculate);

swap.addEventListener('click', () => {
	const temp = currencyOne.value;
	currencyOne.value = currencyTwo.value;
	currencyTwo.value = temp;
	calculate();
})
