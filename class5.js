import inquirer from "inquirer";
let myBalance = 10000;
let mypin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin;",
        message: "enter your pin;",
        type: "number"
    }
]);
if (pinAnswer.pin === mypin) {
    console.log("incorrect pin code !!!");
}
let operationAns = await inquirer.prompt([
    {
        name: "operation",
        message: "please select option",
        type: "list",
        choices: ["withdraw", "checkbalance"]
    }
]);
console.log(operationAns);
if (operationAns.operation === "withdraw") {
    let amountAns = await inquirer.prompt([
        {
            name: "amount",
            message: "enter your amount",
            type: "number",
        }
    ]);
    myBalance -= amountAns.amount;
    console.log("your remaning blance is", +myBalance);
}
else if (operationAns.operation) {
    console.log("your blance is:" + myBalance);
}
else {
    console.log("incorrect pin number");
}
