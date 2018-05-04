$(document).ready(function(){

    $(".questionaire").hide();
    $("#submitButton").hide();

    var timeLeft= 60;

    function countDown(){
        timeLeft --;
        $("#timer").text("Time remaining: " + secondsMinute(timeLeft));
        
    }
    function secondsMinute(s){
        var min= Math.floor (s / 60);
        var sec = s % 60;
        if(sec < 10){
            sec = "0" + sec;
        }
        if(min < 10){
            min = "0" + min;
        }
        return min + ":" + sec;
    } 

    $("body").on("click", "#startButton", function(){
        $("#timer").text("Time remaining: " + secondsMinute(timeLeft));        
        setInterval (countDown, 1000);;
        $(".questionaire").show();
        $("#startButton").hide();
        $("#submitButton").show();
        $(".correctAnswers").hide();
        $(".wrongAnswers").hide();
        numberCorrect= 0;
        numberWrong= 0;

    })
   
    
    var numberCorrect = 0;
    var numberWrong = 0;

    var questions= [
        {
            question: "How old am I?",
            answerOne: "34",
            answerTwo: "25",
            answerThree: "20",
            answerFour: "28",
            id: "0",
            correctAnswer: "25",
    },

        {
            question: "Where was I born?",
            answerOne: "San Antonio",
            answerTwo: "Del Rio",
            answerThree: "Eagle Pass",
            answerFour: "Sacramento",
            id: "1",
            correctAnswer: "Eagle",
    },
        {
            question: "Practice question",
            answerOne: "Me",
            answerTwo: "Myself",
            answerThree: "and I",
            answerFour: "Julian",
            id: "2",
            correctAnswer: "Julian",
    },
        {
            question: "Will I pass this class?",
            answerOne: "Yes",
            answerTwo: "Maybe",
            answerThree: "Good Luck",
            answerFour: "Keep trying!",
            id: "3",
            correctAnswer: "Yes",
    },
        {
            question: "Test 2",
            answerOne: "Yes",
            answerTwo: "Maybe",
            answerThree: "Good Luck",
            answerFour: "Keep trying!",
            id: "4",
            correctAnswer: "Yes",                
        }
    ]

    // Creating forloop to put questions and answers on the webpage
    function questionsFunction(){
        for( var i=0; i<questions.length; i++){

            $(".questionaire").append(questions[i].question + "<br>");
            $(".questionaire").append(`<input type= "radio" name=${questions[i].id} value=${questions[i].answerOne} id= "a${questions[i].id}" class="buttons"> ${questions[i].answerOne}`)
            $(".questionaire").append(`<input type= "radio" name=${questions[i].id} value=${questions[i].answerTwo} id= "b${questions[i].id}" class="buttons"> ${questions[i].answerTwo}`)
            $(".questionaire").append(`<input type= "radio" name=${questions[i].id} value=${questions[i].answerThree} id= "c${questions[i].id}" class="buttons"> ${questions[i].answerThree}`)
            $(".questionaire").append(`<input type= "radio" name=${questions[i].id} value=${questions[i].answerFour} id= "d${questions[i].id}" class="buttons"> ${questions[i].answerFour} <br><br>`)

        }
    }    
    questionsFunction();

    $("body").on("click", "#submitButton", function(){

        for(var i=0; i< questions.length; i++){
            var value = $(`input[name=${i}]:checked`).val(); 

            console.log(value);
            if(questions[i].correctAnswer===value){
                numberCorrect++
            }else{
                numberWrong++
            }

        }
        console.log(numberCorrect);
        console.log(numberWrong);
        $(".questionaire").hide();
        $(".correctAnswers").text("Correct answers: " + numberCorrect);
        $(".wrongAnswers").text("Incorrect answers: " + numberWrong);
        $("#submitButton").hide();
        $("#startButton").show();
        $(".correctAnswers").show();
        $(".wrongAnswers").show();        
        timeLeft = 90;
        window.clearInterval(interValid);

    })

})