function showRules(){
    const removeStart = document.querySelector('.start_quiz_btn');
    const showRules = document.querySelector('.quiz_rules'); 
    showRules.style.display = 'block'
    removeStart.style.display = 'none'
}

function exitQuiz(){
    window.location.reload();
}

function Continue(){
    const removeRules = document.querySelector('.quiz_rules');
    const Questions = document.querySelector('.question_section');
    Questions.style.display = 'block'
    removeRules.style.display = 'none'
    showQuestions(0);
    queCounter(1);
    startTimer(15);
}

const options = document.querySelector('.options_menu');
const queSec = document.querySelector('.question_section');
const timeCount = queSec.querySelector('.time_count .timer');
const nextBtn = queSec.querySelector('.nxt_btn');
const resultBox = document.querySelector('.result_box');
const quizRestart = document.querySelector('.replay');
const quizQuit = resultBox.querySelector('.quit_quiz');
const scoreText = resultBox.querySelector('.score');
const timeOff = document.querySelector('.time_count p');


quizRestart.onclick = () =>{
    window.location.reload();
}

quizQuit.onclick = () =>{
    window.location.reload();
}

let que_count = 0;
let que_number = 1;
let counter;
let timeValue = 15;
let userScore = 0;



nextBtn.onclick = ()=>{
    if(que_count < questions.length - 1){
        que_count++;
        que_number++;
        showQuestions(que_count);
        queCounter(que_number);
        clearInterval(counter);
        startTimer(timeValue);
        /*nextBtn.style.display = 'none';*/
        timeOff.textContent = 'time Left';
    }else{
        clearInterval(counter);
    
        console.log("Questions completed");
        showResultBox();
    }
}


function showQuestions(index){
    const q1Text = document.querySelector('.q1_text');
    let queShow = '<h2>'+ questions[index].number + ". " + questions[index].question +'</h2>';
    let optionShow =
    '<div class="options">'+ questions[index].options[0] +'<span></span></div>'
   +'<div class="options">'+ questions[index].options[1] +'<span></span></div>'
   +'<div class="options">'+ questions[index].options[2] +'<span></span></div>'
   +'<div class="options">'+ questions[index].options[3] +'<span></span></div>';
    q1Text.innerHTML = queShow;
    options.innerHTML = optionShow;
    const option = options.querySelectorAll('.options');
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)")
        
    }
}

function optionSelected(correct){
    clearInterval(counter);
    let userAns = correct.textContent;
    let correctAns = questions[que_count].correct;
    let allOptions = options.children.length;
    if(userAns == correctAns){
        userScore += 1;
        scoreText.innerHTML = userScore;
        console.log(userScore)
        correct.classList.add("correct");
        console.log("answer is correct");
    }else{
        correct.classList.add("incorrect");
        console.log("answer is incorrect");

        for (let i = 0; i < allOptions; i++) {
            if (options.children[i].textContent == correctAns) {
                options.children[i].setAttribute("class", "options correct")
            }
            
        }
    }

   for (let i = 0; i < allOptions; i++) {
        options.children[i].classList.add("disabled");
    
   }
   nextBtn.style.display = 'block';
}

function queCounter(index){
    const queCountBtm = queSec.querySelector('.q_count');
    let totalQueCount = '<span><p>'+ index +'</p>0f<p>'+ questions.length +'</p>Questions</p></span>';
    queCountBtm.innerHTML = totalQueCount;
}

function showResultBox(){  
    const Questions = document.querySelector('.question_section');
    const showResult = document.querySelector('.result_box');
    Questions.style.display = 'none'
    showResult.style.display = 'block'
}

function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time;
        time--;
        if (time < 9) {
            let addZero = timeCount.textContent;
            timeCount.textContent = '0' + addZero;
            
        }
        if (time < 0) {
            clearInterval(counter);
            timeCount.textContent = "00";
            timeOff.textContent = 'time off';

            let correctAns = questions[que_count].correct;
            let allOptions = options.children.length;

            for (let i = 0; i < allOptions; i++) {
                if (options.children[i].textContent == correctAns) {
                    options.children[i].setAttribute("class", "options correct")
                }
                
            }

            for (let i = 0; i < allOptions; i++) {
                options.children[i].classList.add("disabled");
            
           }
           nextBtn.style.display = 'block';
        }
    }
}
