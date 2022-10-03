const quizForm = document.querySelector(".quiz-form");
const checkBtn = document.querySelector(".quiz-check-button");
const outputMsg = document.querySelector(".output-msg");

const correctAns = ["90", "right", "one", "45,90,45", "Equilateral", "10", "a+b+c", "12,16,25", "none", "45"];

function calculateScore () {
    var score = 0;
    var i = 0;

    const formResults = new FormData(quizForm);

    for (let value of formResults.values()) {
        if (value === correctAns[i]) {
            score = score + 1;
        }
        i++;
    }

    outputMsg.innerText = `Your Score Is: ${score}`;
}

checkBtn.addEventListener("click", calculateScore);