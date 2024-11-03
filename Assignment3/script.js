// Ensure the tip bar starts at 0% and updates on page load
window.onload = function() {
    document.getElementById('tipRange').value = 0;
    document.getElementById('tipPercentDisplay').value = '0%';
};

// Function to validate the input and recalculate the values
function validateAndCalculate() {
    const billInput = document.getElementById('billTotal');
    const errorMessage = document.getElementById('error-message');
    const billValue = parseFloat(billInput.value);
    
    if (isNaN(billValue) || billValue <= 0) {
        errorMessage.style.display = 'block';
        document.getElementById('tipAmount').value = '';
        document.getElementById('totalWithTip').value = '';
    } else {
        errorMessage.style.display = 'none';
        calculateTip();
    }
}

// Function to update the tip percentage display and calculate the tip
function updateTipPercentage() {
    const tipRange = document.getElementById('tipRange');
    const tipPercentDisplay = document.getElementById('tipPercentDisplay');
    tipPercentDisplay.value = `${tipRange.value}%`;
    updateSliderColor(tipRange);
    calculateTip();
}

// Function to calculate the tip amount and total bill with tip
function calculateTip() {
    const billInput = parseFloat(document.getElementById('billTotal').value);
    const tipPercentage = parseFloat(document.getElementById('tipRange').value);
    const currency = document.getElementById('currency').value;

    if (isNaN(billInput) || billInput <= 0) {
        return;
    }

    const conversionRates = {
        usd: 1,
        jpy: 149.34,
        inr: 84.07
    };

    const currencySymbols = {
        usd: '$',
        jpy: '¥',
        inr: '₹'
    };

    const tipAmountUSD = billInput * (tipPercentage / 100);
    const totalWithTipUSD = billInput + tipAmountUSD;

    const convertedTip = (tipAmountUSD * conversionRates[currency]).toFixed(2);
    const convertedTotal = (totalWithTipUSD * conversionRates[currency]).toFixed(2);

    document.getElementById('tipAmount').value = `${currencySymbols[currency]}${convertedTip}`;
    document.getElementById('totalWithTip').value = `${currencySymbols[currency]}${convertedTotal}`;
}

// Function to update slider color based on value
function updateSliderColor(slider) {
    const value = slider.value;
    const percentage = (value / 100) * 100;
    slider.style.background = `linear-gradient(to right, #4caf50 0%, #2196f3 ${percentage}%, #d3d3d3 ${percentage}%, #d3d3d3 100%)`;
}
