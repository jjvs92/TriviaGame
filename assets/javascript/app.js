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
 setInterval(countDown, 1000);
 
var questions= [
    questionOne = {
                question: "How old am I?",
                answerOne: "34",
                answerTwo: "25",
                answerThree: "20",
                answerFour: "28",
                id: "qOne",
                answer: "25",
},

    questionTwo = {
                question: "Where was I born?",
                answerOne: "San Antonio",
                answerTwo: "Del Rio",
                answerThree: "Eagle Pass",
                answerFour: "Sacramento",
                id: "qTwo",
                answer: "Eagle Pass",
},
    questionThree = {
                question: "Practice question",
                answerOne: "Me",
                answerTwo: "Myself",
                answerThree: "and I",
                answerFour: "Julian",
                id: "qThree",
                answer: "Julian",
},
    questionFour = {
                question: "Will I pass this class?",
                answerOne: "Yes",
                answerTwo: "Maybe",
                answerThree: "Good Luck",
                answerFour: "Keep trying!",
                id: "qFour",
                answer: "Yes",
    }
]

questionsFunction();

// Creating forloop to put questions and answers on the webpage
function questionsFunction(){
    for( var i=0; i<questions.length; i++){

        $(".questionaire").append(questions[i].question + "<br>");
        $(".questionaire").append(`<input type= "radio" name=${questions[i].id} data-name=${questions[i].answerOne} id= "a${questions[i].id}" class="buttons"> ${questions[i].answerOne}`)
        $(".questionaire").append(`<input type= "radio" name=${questions[i].id} data-name=${questions[i].answerTwo} id= "b${questions[i].id}" class="buttons"> ${questions[i].answerTwo}`)
        $(".questionaire").append(`<input type= "radio" name=${questions[i].id} data-name=${questions[i].answerThree} id= "c${questions[i].id}" class="buttons"> ${questions[i].answerThree}`)
        $(".questionaire").append(`<input type= "radio" name=${questions[i].id} data-name=${questions[i].answerFour} id= "d${questions[i].id}" class="buttons"> ${questions[i].answerFour} <br><br>`)

    }

}
var correctAnswers = 0;
var incorrectAnswers= 0;

    function myFunction(checkingAnswers){
    for(var j=0; j < questions.length; j++){
        var a = $(checkingAnswers).attr("data-name");
        
        console.log(a);
   
    if ($(checkingAnswers).attr("data-name") === questions[j].answer){
        correctAnswers += 1;
        console.log(correctAnswers);} 
    else{
        console.log("testing");

}
}
}



    
$("body").on("click", "#submitButton", function(){

    myFunction(".buttons");

    timeLeft= 0;
    //clearInterval(countDown());
    console.log("working");
    
    }
)




})