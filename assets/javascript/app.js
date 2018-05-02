$(document).ready(function(){

    var timeLeft= 90;

    $("#timer").text("Time remaining: " + secondsMinute(timeLeft));

    function countDown(){
        timeLeft --;
        $("#timer").text("Time remaining: " + secondsMinute(timeLeft));
    }
    function secondsMinute(s){
        var min= Math.floor (s / 60);
        var sec = s % 60;
        return min + ":" + sec;
    }
 //setInterval(countDown, 1000);
 
var questions= [
    questionOne = {
                question: "How old am I?",
                answerOne: "34",
                answerTwo: "25",
                answerThree: "20",
                answerFour: "28",
                id: "qOne",
},

    questionTwo = {
                question: "Where was I born?",
                answerOne: "San Antonio",
                answerTwo: "Del Rio",
                answerThree: "Eagle Pass",
                answerFour: "Sacramento",
                id: "qTwo",
},
    questionThree = {
                question: "Whose the Man?",
                answerOne: "Me",
                answerTwo: "Myself",
                answerThree: "and I",
                answerFour: "Julian",
                id: "qThree",
},
    questionFour = {
                question: "Will I pass this class?",
                answerOne: "Yes",
                answerTwo: "Maybe",
                answerThree: "Good Luck",
                answerFour: "Keep trying!",
                id: "qFour",
    }
]

console.log(questions[0].answerTwo);
console.log(questionTwo.question);

questionsFunction();

// Creating forloop to put questions and answers on the webpage
function questionsFunction(){
    for( var i=0; i<questions.length; i++){

        $(".questionaire").append(questions[i].question + "<br>");
        $(".questionaire").append(`<input type= "radio" name=${questions[i].id} id= "a${questions[i].id}" class="buttons"> ${questions[i].answerOne}`)
        $(".questionaire").append(`<input type= "radio" name=${questions[i].id} id= "b${questions[i].id}" class="buttons"> ${questions[i].answerTwo}`)
        $(".questionaire").append(`<input type= "radio" name=${questions[i].id} id= "c${questions[i].id}" class="buttons"> ${questions[i].answerThree}`)
        $(".questionaire").append(`<input type= "radio" name=${questions[i].id} id= "d${questions[i].id}" class="buttons"> ${questions[i].answerFour} <br><br>`)
    }
}









})