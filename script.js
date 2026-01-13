// script.js
function calculateAndDisplay() {
    // 1. Get values from input by ID
    const partialInput = document.getElementById('partialValue');
    const totalInput = document.getElementById('totalValue');
    const resultElement = document.getElementById('result').querySelector('span');

    // Get the string values
    const partialValueString = partialInput.value;
    const totalValueString = totalInput.value;

    // Convert string values to numbers for calculation
    // Use parseFloat to handle potential decimal numbers
    const partialValue = parseFloat(partialValueString);
    const totalValue = parseFloat(totalValueString);

    // Check if inputs are valid numbers and total is not zero
    if (!isNaN(partialValue) && !isNaN(totalValue) && totalValue !== 0) {
        // 2. Calculate percentage
        const percentage = (partialValue / totalValue) * 100;
        // Round to two decimal places
        const formattedPercentage = percentage.toFixed(2);

        // 3. Update innerHTML
        resultElement.innerHTML = `${formattedPercentage}%`;
    } else {
        resultElement.innerHTML = "Invalid input or total value is zero.";
    }
}
//Function for getting user data by ID
