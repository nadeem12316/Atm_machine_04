import inquirer from "inquirer";
let myBalance = 100000; //Dollar
let myPin = 7866;

let pinAnswer = await inquirer.prompt(
    {
    name: "Nadeem",
    message: "enter your pin",
    type: "number"
}
);
if (pinAnswer.Nadeem === myPin) {
    console.log("correct pin code !!!")
   let operationAns = await inquirer.prompt(
    [
        
      {
        name:"operation",
        message:"Please select option",
        type: "list",
        choices: ["withdaraw", "check balance", "fast cash"],
      }
     
    ]

    );
    if (operationAns.operation === "withdaraw") {
        let amountAns = await inquirer.prompt([{
            name:"amount",
            message: "enter your amount",
            type:"number",
    
        }
      ]
      );

    myBalance -= amountAns.amount;

    console.log("Your remaining Balance is " + myBalance);

    }else if (operationAns.operation === "check balance"){
      console.log("your balance is"+ myBalance)
    }else if (operationAns.operation === "fast cash"){
      let fasCashAnd = await inquirer.prompt(
        [
          {
              name: "select",
              message:"select your choice",
              type:"list",
              choices: [1000,3000,5000,10000,]
          },
        ]
      );
          console.log("your amount is unsufficient")
          
          } 
    }
     
      
    
    
  
    else {
      console.log("incorrect pin!");
    };
    
