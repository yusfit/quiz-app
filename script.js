function showRules(){
    const removeStart = document.querySelector('.start_btn');
    const showRules = document.querySelector('.quiz_rules'); 
    showRules.style.display = 'block'
    removeStart.style.display = 'none'
}

function exitQuiz(){
    const quizRules = document.querySelector('.quiz_rules');
    quizRules.style.display = 'none'
}

function Continue(){
    const removeRules = document.querySelector('.quiz_rules');
    const Questions = document.querySelector('.question_section');
    Questions.style.display = 'block'
    removeRules.style.display = 'none'
    showQuestions(0);
    queCounter(1);
}

const queSec = document.querySelector('.question_section');
let que_count = 0;
let que_number = 1;

const nextBtn = queSec.querySelector('.nxt_btn');

nextBtn.onclick = ()=>{
    if(que_count < questions.length - 1){
        que_count++;
        que_number++;
        showQuestions(que_count);
        queCounter(que_number);
    }else{
        console.log("Questions completed");
    }
}


function showQuestions(index){
    const q1Text = document.querySelector('.q1_text');
    const options = document.querySelector('.options_menu');
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
    let userAns = correct.textContent;
    let correctAns = questions[que_count].correct;
    if(userAns == correctAns){
        correct.classList.add("correct");
        console.log("answer is correct");
    }else{
        correct.classList.add("incorrect");
        console.log("answer is incorrect");
    }
}

function queCounter(index){
    const queCountBtm = queSec.querySelector('.q_count');
    let totalQueCout = '<span><p>'+ index +'</p>0f<p>'+ questions.length +'</p>Questions</p></span>';
    queCountBtm.innerHTML = totalQueCout;
}