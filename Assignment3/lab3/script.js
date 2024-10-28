// git check
document.addEventListener('DOMContentLoaded', () => {
    const billInput = document.getElementById('billTotal');
    const currencySelect = document.getElementById('currencySelect');
    const tipSlider = document.getElementById('tipSlider');
    const tipPercentageLabel = document.getElementById('tipPercentage');
    const tipAmountLabel = document.getElementById('tipAmount');
    const totalWithTipLabel = document.getElementById('totalWithTip');
    const errorMessage = document.getElementById('error-message');

    const conversionRates = {
        USD: 1,
        JPY: 149.34,
        INR: 84.07
    };

    const currencySymbols = {
        USD: '$',
        JPY: '¥',
        INR: '₹'
    };

    function clearField() {
        const billTotalInput = document.getElementById('billTotal');
        billTotalInput.placeholder = ''; // Remove placeholder on focus
        billTotalInput.removeEventListener('focus', clearField); // Remove event listener after first focus
    }
    
    function validateBillAmount() {
        const billAmount = parseFloat(billInput.value);

        // Validate if the bill amount is a positive number
        if (isNaN(billAmount) || billAmount <= 0) {
            errorMessage.style.display = 'Block';
            billInput.value = '';  // Reset input field if invalid
        } else {
            errorMessage.style.display = 'none';
        }
    }

    function calculateTipAndTotal() {
        let billAmount = parseFloat(billInput.value);

        // Prevent calculation if billAmount is not valid
        if (isNaN(billAmount) || billAmount <= 0) {
            tipAmountLabel.textContent = `$0.00`;
            totalWithTipLabel.textContent = `$0.00`;
            return;
        }

        const selectedCurrency = currencySelect.value;
        const tipPercentage = parseInt(tipSlider.value);

        // Calculate the tip in USD
        const tipAmountUSD = (billAmount * tipPercentage) / 100;

        // Convert the bill and tip amount to the selected currency
        const billInSelectedCurrency = billAmount * conversionRates[selectedCurrency];
        const tipInSelectedCurrency = tipAmountUSD * conversionRates[selectedCurrency];
        const totalInSelectedCurrency = billInSelectedCurrency + tipInSelectedCurrency;

        // Update the displayed values
        tipPercentageLabel.textContent = `${tipPercentage}%`;
        tipAmountLabel.textContent = `${currencySymbols[selectedCurrency]}${tipInSelectedCurrency.toFixed(2)}`;
        totalWithTipLabel.textContent = `${currencySymbols[selectedCurrency]}${totalInSelectedCurrency.toFixed(2)}`;
    }

    // Event listeners
    billInput.addEventListener('input', () => {
        validateBillAmount();
        calculateTipAndTotal();
    });

    currencySelect.addEventListener('change', calculateTipAndTotal);
    tipSlider.addEventListener('input', calculateTipAndTotal);

    // Initial calculation
    calculateTipAndTotal();
});
