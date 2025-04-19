const add = (a, b) => a + b 

const subtract = (a,b) => a - b

const multiply = (a, b) => a * b

const divide = (a, b) => a / b



let equation = {
    number1: undefined,
    number2: undefined,

    operator: ""
}

const referenceOperators = ["+", "-", "x", "%"]

const gridNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",  ]

let terminal = document.querySelector(".terminal-text")


let buttons = document.querySelectorAll("button")

let minusCount = 0

let decimalCount = 0


//some buttons are functions 

buttons.forEach(button => {
    button.addEventListener("click", () => {

        if (button.textContent == "+") {

            if (equation["number1"] !== undefined) {



            } else {

                if (terminal.textContent == "") {
                    //do nothing, we wont display operators, unless user is trying to represent negative number
                }

                else {

                    if (equation["number1"] == "-") {

                        equation["number1"] += (terminal.textContent)

                        terminal.textContent += ` ${button.textContent} `;

                        equation["operator"] += "x"

                        decimalCount--;

                        console.log(equation["number1"]);
                    } else {

                        equation["number1"] = "" 
                        equation["number1"] += (terminal.textContent)

                        terminal.textContent += ` ${button.textContent} `;
                        equation["operator"] += "+"

                        decimalCount--;

                        console.log(equation["number1"]);
                    }
                }
            
            }

        } 

        

        if (button.textContent == "x") {

            if (equation["number1"] !== undefined) {

            } else {

                if (terminal.textContent == "") {
                    //do nothing, we wont display operators, unless user is trying to represent negative number
                }

                else {

                    if (equation["number1"] == "-") {

                        equation["number1"] += (terminal.textContent)

                        terminal.textContent += ` ${button.textContent} `;

                        equation["operator"] += "x"

                        decimalCount--;

                        console.log(equation["number1"]);

                    } else {

                        equation["number1"] = ""
                        equation["number1"] += (terminal.textContent)

                        terminal.textContent += ` ${button.textContent} `;

                        equation["operator"] += "x"

                        decimalCount--;

                        console.log(equation["number1"]);
                    }

            }
            
            }
        }


        // minus needs to be able to represent negative numbers

        if (button.textContent == "-") {

            

            if (equation["number1"] == undefined) {

                if (terminal.textContent =="") {
                    terminal.textContent+=button.textContent;

                }
                else {

                    equation["number1"] = ""
                    equation["number1"] += (terminal.textContent)
    
                    terminal.textContent += ` ${button.textContent} `;
    
                    equation["operator"] += "-"

                    decimalCount--;
    
                    console.log(equation["number1"]);
                }
            }
            if (equation["number1"] !== undefined) {


                if (minusCount<1){

                    terminal.textContent+=button.textContent;
                    minusCount++;

                    console.log("hello")

                }


            }

        }


        if (equation["number1"]== "-") {
            //do nothing, cant have to minus signs next to eachother
        }

            
    

        if (button.textContent == "%") {

            if (equation["number1"] !== undefined) {

            } else {

                if (terminal.textContent == "") {
                    //do nothing, we wont display operators, unless user is trying to represent negative number
                }

                else {

                    if (equation["number1"] == "-") {

                        equation["number1"] += (terminal.textContent)

                        terminal.textContent += ` ${button.textContent} `;

                        equation["operator"] += "%"

                        decimalCount--;

                        console.log(equation["number1"]);

                    } else {

                        equation["number1"] = ""
                        equation["number1"] += (terminal.textContent)

                        terminal.textContent += ` ${button.textContent} `;

                        equation["operator"] += "%"

                        decimalCount--;

                        console.log(equation["number1"]);
                    }

            }
            
            }
        }


        //when user hits equals, compute equation and append it to the terminal

        if (button.textContent=="=") {

            equation["number1"] = parseFloat(equation["number1"]);

            let [notUsing, n2] = ((terminal.textContent).split(`${equation["operator"]}`));

            equation["number2"] = parseFloat(n2)

            let operator = equation["operator"]

            if (operator== "+"){
                terminal.textContent = add(equation["number1"], equation["number2"]);
            }

            if (operator== "-"){
                terminal.textContent = minus(equation["number1"], equation["number2"]);
            }

            if (operator== "x"){
                terminal.textContent = multiply(equation["number1"], equation["number2"]);
            }

            if (operator== "%"){
                terminal.textContent = divide(equation["number1"], equation["number2"]);
            }

            

            //split the terminal textcontent to get the second number
        }

        if (gridNumbers.includes(button.textContent)) {
            terminal.textContent += button.textContent;
        
        }

        if (button.textContent==".") {

            if (decimalCount < 1) {

                terminal.textContent += button.textContent;

                decimalCount++;
            }


        };

        if (button.textContent =="AC") {

            equation = {
                number1: undefined,
                number2: undefined,
            
                operator: ""

            }

            minusCount = 0

            decimalCount = 0

            terminal.textContent=""



        }

        if (button.textContent=="DEL") {

            terminal.textContent = (terminal.textContent.slice(0, terminal.textContent.length - 1))
        }


        

        




    });









        
});

