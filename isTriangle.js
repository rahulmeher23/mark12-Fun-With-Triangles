const input1 = document.querySelector("#angle-1");
const input2 = document.querySelector("#angle-2");
const input3 = document.querySelector("#angle-3");
const checkBtn = document.querySelector(".triangle-check-button");
var outputMsg = document.querySelector(".output-msg");

function showMessage(msg) {
    var output = msg;
    outputMsg.innerHTML = `${output}`;
}

function checkTriangle(ang1, ang2, ang3) {
    var sum = ang1 + ang2 + ang3;

    console.log("sum",sum);
    console.log(ang1, ang2, ang3 , sum ,"hff");
    if (sum == 180) {
        showMessage(`Congratulations! Your values (${ang1}, ${ang2}, ${ang3}) forms a triangle.`);
    } else {
        showMessage(`<span style="color:#dc2626">Oops! Your values (${ang1}, ${ang2}, ${ang3}) doesn't form a triangle.`);
    }
}

function clickHandler() {
    var ang1 = Number(input1.value);
    var ang2 = Number(input2.value);
    var ang3 = Number(input3.value);

    if (ang1 < 0 || ang2 < 0 || ang3 < 0) {
        showMessage(`<span style="color:#dc2626">Please input a valid angle value.</span>`);
    } else {
        checkTriangle(ang1, ang2, ang3);
    }
}

checkBtn.addEventListener("click", clickHandler);
