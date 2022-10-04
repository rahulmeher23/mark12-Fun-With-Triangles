const sideInputs = document.querySelectorAll(".side-input");
const checkBtn = document.querySelector(".triangle-check-button");
const output = document.querySelector(".output-msg");


function calculateArea() {
    var area = 0.5 * Number(sideInputs[0].value) * Number(sideInputs[1].value);
    output.innerText = `Area of Triangle is: ${area}`;
}


checkBtn.addEventListener("click", calculateArea);