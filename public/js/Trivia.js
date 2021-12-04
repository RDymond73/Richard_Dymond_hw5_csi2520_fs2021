let TotalButton1 = document.getElementById('#TotalButton');
let comment1 = document.getElementById('#comment1');
const answer1 = 'C'
let total = 0;
let TotalContainer1 = document.getElementById('#TotalContainer1');
let TotalButton2 = document.getElementById('#TotalButton');
let comment2 = document.getElementById('#comment1');
const answer2 = 'C'
let TotalButton3 = document.getElementById('#TotalButton');
let comment3 = document.getElementById('#comment1');
const answer3 = 'C'
let TotalButton4 = document.getElementById('#TotalButton');
let comment4 = document.getElementById('#comment1');
const answer4 = 'C'
let TotalButton5 = document.getElementById('#TotalButton');
let comment5 = document.getElementById('#comment1');
const answer5 = 'C'

// function test(ev) {
//     let correct1 = document.getElementById('#correct1')
//     correct1.visibility='visable';
// }

// let test1 = document.addEventListener('click', test); {
//     test();
// }

function grade1(ev) {
    let UI1 = document.getElementById('#input1');
    
    if (UI1=='c') {
        document.getElementById('#title1').innerText="Correct";
        document.getElementById('#correct1').style.color='green';
        total++;
    } else {
        let replyWrong1 = document.createElement('p');
        replyWrong1.innerHTML="Incorrect";
        let w1 = document.getElementById('#title1');
        w1=('Incorrect');
    }}
    
let grade1v = grade1();
comment1.addEventListener('click', grade1); {
  grade1(ev);
}

function grade2(ev) {
    let UI2 = document.getElementById('#input2');
    
    if (UI2=='a') {
        document.getElementById('#title2').innerText="Correct";
        document.getElementById('#correct2').style.color='green';
        total++;
    } else {
        let replyWrong2 = document.createElement('p');
        replyWrong2.innerHTML="Incorrect";
        let w2 = document.getElementById('#title2');
        w2=('Incorrect');
    }}
    
let grade2v = grade2();
comment2.addEventListener('click', grade2); {
  grade2(ev);
}

function grade3(ev) {
    let UI3 = document.getElementById('#input3');
    
    if (UI3=='a') {
        document.getElementById('#title3').innerText="Correct";
        document.getElementById('#correct3').style.color='green';
        total++;
    } else {
        let replyWrong3 = document.createElement('p');
        replyWrong3.innerHTML="Incorrect";
        let w3 = document.getElementById('#title3');
        w3=('Incorrect');
    }}
    
let grade3v = grade3();
comment3.addEventListener('click', grade3); {
  grade3(ev);
}

function grade4(ev) {
    let UI4 = document.getElementById('#input4');
    
    if (UI4=='a') {
        document.getElementById('#title4').innerText="Correct";
        document.getElementById('#correct4').style.color='green';
        total++;
    } else {
        let replyWrong4 = document.createElement('p');
        replyWrong4.innerHTML="Incorrect";
        let w4 = document.getElementById('#title4');
        w4=('Incorrect');
    }}
    
let grade4v = grade4();
comment4.addEventListener('click', grade4); {
  grade4(ev);
}

function grade5(ev) {
    let UI5 = document.getElementById('#input5');
    
    if (UI5=='a') {
        document.getElementById('#title5').innerText="Correct";
        document.getElementById('#correct5').style.color='green';
        total++;
    } else {
        let replyWrong5 = document.createElement('p');
        replyWrong5.innerHTML="Incorrect";
        let w5 = document.getElementById('#title5');
        w5=('Incorrect');
    }}
    
let grade5v = grade5();
comment5.addEventListener('click', grade5); {
  grade5(ev);
}


function showTotal(ev) {
    let score = document.getElementById('#Score')
    TotalContainer.appendChild(score);
    score.appendChild(total);
    score.style.visibility = 'visable';
    console.log(score);
}

let shwT = showTotal();
let lis2 = TotalButton.addEventListener('click', showTotal); {
       showTotal(ev);
}

