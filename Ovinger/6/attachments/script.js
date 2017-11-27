function numberOfDecimals(number) {
    /**
       Calculates the number of decimals in a number
       @param (number) number - float number with decimals
     */
    return (number.toString().split('.')[1] || []).length;
}

function significantDigits(numberArray) {
    /**
       Finds the number in a array with the least number of significant decimals
       @param (Array) numberArray - array of floats
     */
    minDecimals = Infinity;
    for (let number of numberArray) {
        decimals = numberOfDecimals(number);
        if (decimals < minDecimals){
            minDecimals = decimals;
        }
    }
    return minDecimals
}

function calculateTax(income, wealth, incomeTax=0.35, wealthTax=0.25) {
    /**
       Calculates the tax to the least significant digit based on income, wealth
       and percentage tax paid. Exmaple if income=1400.50 and wealth=15000.1 then the
       answer will have one decimal. 
       @param (Array) numberArray - array of floats
    */

    minDigits = significantDigits([income, wealth]);
    // minDigits = 2; "Uncomment this if you always want 2 significant digits"
    return (incomeTax * income + (wealthTax * wealth)).toFixed(minDigits)
}

function updateTax() {
    /**
       Finds the number in a array with the least number of significant decimals
       @param (Array) numberArray - array of floats
    */

    var wealth = document.getElementById("wealth").value;
    var income = document.getElementById("income").value;
    var tax = document.getElementById("tax");

    if (wealth > 0 || income > 0) {
        tax.value = calculateTax(wealth, income);
    } else {
        tax.placeholder = "Tax *";
    }
}
