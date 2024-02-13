import inquirer from 'inquirer';
const choice = await inquirer.prompt([
    {
        type: 'list',
        name: 'choose',
        message: 'Choose any option',
        choices: ['Withdraw', 'Deposit', 'Balance checking', 'Exit']
    }
]);
const transaction = await inquirer.prompt([
    {
        type: "input",
        name: "withdraw",
        message: "Enter the amouunt you want to withdraw",
        // when(transaction) {
        //     return choice==='Withdraw'
        when: (answers) => choice.choose === 'Withdraw',
    },
    {
        type: "input",
        name: "deposit",
        message: "Enter the amount which you want to deposit",
        // when(transaction) {
        //     return choice==='Deposit'
        when: (answers) => choice.choose === 'Deposit',
    }, {
        type: "input",
        name: "Current Balance",
        message: "Do you want to check your current balance?",
        // when(transaction) {
        //     return choice==='Balance Checking'
        when: (answers) => choice.choose === 'Balance Checking',
    }, {
        type: "input",
        name: "exit",
        message: "Thanks for using my ATM machine",
        // when(transaction) {
        //     return choice==='Exit'
        when: (answers) => choice.choose === 'Exit',
    }
]);
switch (choice.choose) {
    case 'Withdraw':
        {
            const totalBalance = 20000;
            const withdrawAmount = totalBalance - transaction.withdraw;
            if (transaction.withdraw <= totalBalance) {
                console.log(`Withdraw Successfully!Your current balance is ${withdrawAmount}Rs `);
            }
            else if (transaction.withdraw >= totalBalance) {
                console.log(`Insufficient Ammount! Your current balance is ${totalBalance}`);
            }
            else {
                console.log("Error");
            }
        }
        break;
    case 'Deposit':
        {
            const totalBalance = 20000;
            const newbalance = totalBalance + transaction.deposit;
            console.log(`Your new balance is ${newbalance} `);
        }
        break;
    case 'Balance Checking':
        {
            const totalBalance = 20000;
            console.log(`Your Current Balance  is ${totalBalance} `);
        }
        break;
    case 'Exit': {
        console.log(`${transaction.exit}`);
        break;
    }
    default: {
        console.log("error");
    }
}
