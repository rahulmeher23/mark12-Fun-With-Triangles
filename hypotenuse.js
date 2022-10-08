const sideInputs = document.querySelectorAll(".side-input");
const calcBtn = document.querySelector(".hypotenuse-button");
const output = document.querySelector(".output-msg");


function calculateHypotenuse () {
    const sumOfSquares = (Number(sideInputs[0].value) * Number(sideInputs[0].value)) + (Number(sideInputs[1].value) * Number(sideInputs[1].value)) ;
    var hypotenuse = Math.sqrt(sumOfSquares);
    console.log(sideInputs[0].value, sideInputs[1].value, hypotenuse);
    output.innerText = `Hypotenuse is: ${hypotenuse.toFixed(2)}`;
}

function clickHandler() {
   if (sideInputs[0].value < 0 || sideInputs[1].value < 0) {
        output.innerHTML =  `<span style="color:#dc2626">Please input a valid value.</span>`; 
   } else {
    calculateHypotenuse();
   }
}

calcBtn.addEventListener("click", clickHandler);