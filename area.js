const sideInputs = document.querySelectorAll(".side-input");
const checkBtn = document.querySelector(".triangle-check-button");
const output = document.querySelector(".output-msg");


function calculateArea() {
    var area = 0.5 * Number(sideInputs[0].value) * Number(sideInputs[1].value);
    output.innerText = `Area of Triangle is: ${area}`;
}

function clickHandler() {
    if ((sideInputs[0].value) <= 0 || (sideInputs[1].value) <= 0 || sideInputs[0].value == "" || sideInputs[0].value == "") {
        output.innerHTML = `<span style="color:#dc2626">Please input a valid value.</span>`;
    } else {
        calculateArea(); 
    }
}


checkBtn.addEventListener("click", clickHandler);