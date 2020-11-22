var cbt = {
    questions:[
        {
            question:"what is food",
            options:[
                    "a food",
                    "a road",
                    "a phone",
                    "none of the above"
                ],
                currentNumber:1,
            correctAnswer:"a food"
            
        },
        {
            question:"who is the president",
            options:[
                "atiku",
                "fashola",
                "buhari",
                "none of the above"
            ],
            currentNumber:2,
            correctAnswer:"buhari"
            
        },
        {
            question:"which one is number one",
            options:[
                "3",
                "5",
                "none of the above",
                "1"
            ],
            currentNumber:3,
            correctAnswer:"1"
            
        },
        {
            question:"when did Nigeria gain independence",
            options:[
                "1990",
                "2000",
                "none of the above",
                "1960"
            ],
            currentNumber:4,
            correctAnswer:"1960"
            
        },
        {
            question:"who designed the Nigerian flag",
            options:[
                "Taiwo Akinkunmi",
                "Ahmad Buhari",
                "none of the above",
                "Alvan Ikoku"
            ],
            currentNumber:5,
            
            correctAnswer:"Taiwo Akinkunmi"
            
        }
    ],
    selectedOption:{}
    
}

var indexInArray = 0;
var questionInHtml = document.querySelector(".question")
var ansConInHtml = document.querySelector(".answer-con")
var controlsInHtml = document.querySelector(".control-btn")
var nextBtn = document.querySelector(".next-btn")
var prevBtn = document.querySelector(".prev-btn")
var submitBtn = document.querySelector(".result-btn")
displayQuestion()

function displayQuestion(){
    questionInHtml.innerHTML = `<p>${cbt.questions[indexInArray].question}</p>`;
    ansConInHtml.innerHTML = `
                              <button class="answer"onclick="getSelectedOption('${cbt.questions[indexInArray].options[0]}')">${cbt.questions[indexInArray].options[0]}</button>
                              <button class="answer"onclick="getSelectedOption('${cbt.questions[indexInArray].options[1]}')">${cbt.questions[indexInArray].options[1]}</button>
                              <button class="answer"onclick="getSelectedOption('${cbt.questions[indexInArray].options[2]}')">${cbt.questions[indexInArray].options[2]}</button>
                              <button class="answer"onclick="getSelectedOption('${cbt.questions[indexInArray].options[3]}')">${cbt.questions[indexInArray].options[3]}</button>`;
}



nextBtn.addEventListener("click",increaseIndexInArray);
prevBtn.addEventListener("click",decreaseIndexInArray);
submitBtn.addEventListener("click",function(e){
    e.preventDefault();
    var trueAns = 0;
    for(let eachQuestIndex in cbt.selectedOption){
        console.log({eachQuestIndex})
        console.log(cbt.selectedOption[eachQuestIndex].isCorrect)
        if(cbt.selectedOption[eachQuestIndex].isCorrect === true){
            trueAns++;
        }
    }
    questionInHtml.innerHTML = `<p class="score">${"Your score is " + trueAns +"/" + cbt.questions.length}</p>`;
    ansConInHtml.innerHTML = `<button onclick= "location.href='/'">Start Again</button>`
    controlsInHtml.innerHTML = `<button onclick = "showSolution()">Show Solutions</button>`
    console.log(cbt.selectedOptions)


});

function showSolution(){
    if(Object.entries(cbt.selectedOption).length === 0){
        alert("attempt the questions")
    }
   var solutionHtml = "";
    for(let eachQuestIndex in cbt.selectedOption){
        console.log({eachQuestIndex})
        console.log(cbt.questions[eachQuestIndex].question)
        console.log(cbt.selectedOption[eachQuestIndex].selected)
    solutionHtml+= `<h2>${cbt.questions[eachQuestIndex].question}</h2><p class="${cbt.selectedOption[eachQuestIndex].isCorrect === true? 'correct':'wrong'}">${"You Chose " + cbt.selectedOption[eachQuestIndex].selected}</p><p>The correct answer is ${cbt.questions[eachQuestIndex].correctAnswer}</p>`
    }
    ansConInHtml.innerHTML = solutionHtml;
    controlsInHtml.innerHTML = `<button onclick= "location.href='/'">Start Again</button>`

}

function increaseIndexInArray(e){
    e.preventDefault();
    indexInArray++;
    if(indexInArray >= cbt.questions.length){
        indexInArray = cbt.questions.length;
        return
    }
    displayQuestion();
    getTheEnd();
}
function decreaseIndexInArray(e){
    e.preventDefault();
    indexInArray--;
    if(indexInArray < 0){
        return
    }
    displayQuestion();
}

function getSelectedOption(selected){
    console.log(selected)
    cbt.selectedOption[indexInArray] = {
        selected: selected,
        isCorrect:selected == cbt.questions[indexInArray].correctAnswer
    }
    console.log(cbt.selectedOption[indexInArray])
}
function getTheEnd(){
    if(indexInArray == cbt.questions.length - 1){
        console.log("this is the end");
        submitBtn.style.display = "block";
        console.log(cbt.selectedOption)
    }
}
