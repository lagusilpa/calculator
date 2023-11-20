// variable declaration for num-pad node
const numberPad=document.getElementsByTagName("button")
console.log(numberPad)

let array=[];
let result;
let operand;
let operandOne;
let operandTwo;
let operator;

// variable declaration for display
let output=document.querySelector('span#output')
let finalOutput=document.querySelector('span#final-output')

//adding event listeners for all button
for(let i=0 ; i< numberPad.length ;  i++){
    numberPad[i].addEventListener('click',(e)=>{
        if(e.target.className==='number'){
            array.push(e.target.value)
            operand=Number(array.join(""))
            if(isNaN(operand)){
                output.innerText='';
                finalOutput.innerText="0";
                operand=null;
                alert("Enter proper digit");
            }
            finalOutput.innerText=operand;
        }else if(e.target.className==="operator"){
            operator=e.target.value
            operandOne=(result===undefined||result===null)?operand:result;
            array=[];
            output.innerText=operandOne + operator ;
            array=[];
        }else if(e.target.id==="btn-equal"){
            operandTwo=operand
            operandTwo=Number(array.join(""))
            output.innerText=operandOne + operator+operandTwo;
            operation();
            array=[];
        }else if(e.target.id==="undo"){
            array.pop();
            operand=Number(array.join(''))
            output.innerText=operand;
        }else if(e.target.id==="clear"){
            output.innerText='';
            finalOutput.innerText=0;
            result=null
        }
    })
}

// performing calculation
function operation(){
    switch(operator){
        case  '+':
            result=operandOne+operandTwo;
            break;
        case  '-':
            result=operandOne-operandTwo;
            break;
        case  '*':
            result=operandOne*operandTwo;
                break;
        case  '/':
            result=operandOne/operandTwo;
            break;
    }
    finalOutput.innerText=result.toFixed(4);
    operandOne=result;
}