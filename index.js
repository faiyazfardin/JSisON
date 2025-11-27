console.log("Personal Budget Tracker");
let userName,income,expance,tax,netIncome,remainingBalance,savings;

userName = prompt("Enter your name: ");
income = prompt("Income: ");
expance = prompt("Expances: ");

tax = Number(income) * 0.1;
netIncome = Number(income) - Number(tax);
remainingBalance = Number(netIncome) - Number(expance);
savings = Number(remainingBalance) * 0.2;


document.write(`Name: ${userName}<br>`);
document.write(`Income: ${income}<br>`);
document.write(`Expances: ${expance}<br>`);
document.write(`Tax: ${tax}<br>`);
document.write("Net Income: " + netIncome + "$<br/>");
document.write("Remaining Balance: " + remainingBalance + "$<br/>");
document.write("Suggested Savings (20% of Remaining Balance): " + savings + "$<br/>");  
