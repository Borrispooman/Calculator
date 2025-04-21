
const add = (a, b) => a + b 
const subtract = (a,b) => a - b
const multiply = (a, b) => a * b
const divide = (a, b) => a / b

let equation = {
    number1: undefined,
    number2: undefined,
    operator: "",
    prevAns: undefined
}

const referenceOperators = ["+", "-", "x", "%"]
const gridNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",]

let terminal = document.querySelector(".terminal-text")
let buttons = document.querySelectorAll("button")


let minusCount = 0
let decimalCount = 0

buttons.forEach(button => {
    button.addEventListener("click", () => {

        if (button.textContent == "+") {

            if (equation.prevAns !== undefined){
                terminal.textContent = `${equation.prevAns} + `;
                equation.number1 = equation.prevAns;
                equation.operator = "+";
            }
            if (equation.number1 == undefined) {
                if (terminal.textContent == "") {
                    //dont display operators unless they come after number (except minus)
                }
                else {

                    if (equation.number1 == "-") {
                        equation.number1 += (terminal.textContent)
                        terminal.textContent += ` ${button.textContent} `;
                        equation.operator += "x"
                        decimalCount--;
                        console.log(equation.number1);
                    } 
                    else {
                        equation.number1 = "" 
                        equation.number1 += (terminal.textContent)
                        terminal.textContent += ` ${button.textContent} `;
                        equation.operator += "+"
                        decimalCount--;
                        console.log(equation.number1);
                    }
                }
            
            }

        } 
        if (button.textContent == "x") {

            if (equation.prevAns !== undefined){
                terminal.textContent = `${equation.prevAns} x `;
                equation.number1 = equation.prevAns;
                equation.operator = "x";
            }
            if (equation.number1=== undefined) {
                if (terminal.textContent !== "") {
                    if (equation.number1 == "-") {
                        equation.number1 += (terminal.textContent)
                        terminal.textContent += ` ${button.textContent} `;
                        equation.operator += "x"
                        decimalCount--;
                        console.log(equation.number1);
                    } 
                    else {
                        equation.number1 = ""
                        equation.number1 += (terminal.textContent)
                        terminal.textContent += ` ${button.textContent} `;
                        equation.operator += "x"
                        decimalCount--;
                        console.log(equation.number1);
                    }
                }
            }
        }
        // minus needs to be able to represent negative numbers
        if (button.textContent == "-") {

            if (equation.prevAns !== undefined){
                terminal.textContent = `${equation.prevAns} - `;
                equation.number1 = equation.prevAns;
                equation.operator = "-";
                minusCount++;
            }
            if (equation.number1 == undefined) {
                if (terminal.textContent =="") {
                    terminal.textContent+=button.textContent;
                }
                if (terminal.textContent== "-") {
                    //do nothing, cant have to minus signs next to eachother
                } 
                else {
                    equation.number1 = ""
                    equation.number1 += (terminal.textContent)
                    terminal.textContent += ` ${button.textContent} `;
                    equation.operator += "-"
                    decimalCount--;
                    console.log(equation.number1);
                }
            }
            else if (equation.number1 !== undefined) {
                if (minusCount<1){
                    terminal.textContent+=button.textContent;
                    minusCount++;
                    console.log("hello")
                }
            }
        }
        if (button.textContent == "%") {

            if (equation.prevAns !== undefined){
                terminal.textContent = `${equation.prevAns} % `;
                equation.number1 = equation.prevAns;
                equation.operator = "%";
            }
            if (equation.number1 === undefined) {
                if (terminal.textContent !== "") {
                    if (equation.number1 == "-") {
                        equation.number1 += (terminal.textContent)
                        terminal.textContent += ` ${button.textContent} `;
                        equation.operator += "%"
                        decimalCount--;
                        console.log(equation.number1);
                    } 
                    else {
                        equation.number1 = ""
                        equation.number1 += (terminal.textContent)
                        terminal.textContent += ` ${button.textContent} `;
                        equation.operator += "%"
                        decimalCount--;
                        console.log(equation.number1);
                    }
                 }
            }
        }
        //when user hits equals, compute equation and append it to the terminal
        if (button.textContent=="=") {

            const parsed = parseExpression(terminal.textContent);
            if (parsed) {
                const { a, b, operator } = parsed;
                let result;

                switch (operator) {
                    case "+": result = a + b; break;
                    case "-": result = a - b; break;
                    case "*": result = a * b; break;
                    case "/": result = a / b; break;
                }

                terminal.textContent = Number(result.toFixed(4));
                equation["prevAns"] = Number(result.toFixed(4));
            }
        }
        if (gridNumbers.includes(button.textContent)) {
            terminal.textContent += button.textContent;
        }
        if (button.textContent==".") {

            if (decimalCount < 1) {
                terminal.textContent += button.textContent;
                decimalCount++;
            }


        }
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






function parseExpression(input) {

    // This regex matches:
    // 1. optional leading negative
    // 2. number
    // 3. operator
    // 4. optional second negative
    // 5. second number

    input = input.replace("x", "*").replace("%", "/");

    const match = input.trim().match(/^(-?\d+(?:\.\d+)?)\s*([+\-*\/])\s*(-?\d+(?:\.\d+)?)/);
  
    if (!match) return null;
  
    const [, a, operator, b] = match;
    return {
      a: Number(a),
      b: Number(b),
      operator,
    };
  }

