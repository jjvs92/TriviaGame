$(document).ready(function(){
    // Hiding content that will later appear when buttons are hit
    $(".questionaire").hide();
    $("#submitButton").hide();
    $("#restartButton").hide();
    $("#friendsCast").hide();
    $("#thanks").hide();

    var timeLeft= 90;
    var interValid;
    // Timer functions
    function countDown(){
        timeLeft --;
        $("#timer").text("Time remaining: " + secondsMinute(timeLeft));

        if(timeLeft===0){
            clearInterval(interValid);

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
            $("#timer").hide();
            $(".questionaire").hide();
            $(".correctAnswers").text("Correct answers: " + numberCorrect);
            $(".wrongAnswers").text("Incorrect answers: " + numberWrong);
            $("#submitButton").hide();
            $("#restartButton").show();
            $(".correctAnswers").show();
            $(".wrongAnswers").show();   
            $("#friendsCast").show();    
            $("#thanks").show(); 
            timeLeft = 90;
            window.clearInterval(interValid);            
           }
        
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
    // Start button
    $("body").on("click", "#startButton", function(){
        clearInterval(interValid);
        $("#timer").text("Time remaining: " + secondsMinute(timeLeft));        
        interValid = setInterval (countDown, 1000);;
        $(".questionaire").show();
        $("#startButton").hide();
        $("#submitButton").show();
        $(".correctAnswers").hide();
        $(".wrongAnswers").hide();
        $("#timer").show();
        $("#instructions").hide();
        numberCorrect= 0;
        numberWrong= 0;


    })
   
    
    var numberCorrect = 0;
    var numberWrong = 0;
    // creating array of objects containing my quetions and answers
    var questions= [
        {
            question: "1. What was the name of Ross and Monica's dog when they were kids?",
            answerOne: "scoobie",
            answerTwo: "chichi",
            answerThree: "slinky",
            answerFour: "billy",
            id: "0",
            correctAnswer: "chichi",
    },

        {
            question: "2. Which college did Ross and Chandler go to?",
            answerOne: "NYU",
            answerTwo: "Yale",
            answerThree: "Penn state",
            answerFour: "Columbia",
            id: "1",
            correctAnswer: "Columbia",
    },
        {
            question: "3. How many women gave birth before Rachel when she was at the hospital?",
            answerOne: "3",
            answerTwo: "8",
            answerThree: "5",
            answerFour: "2",
            id: "2",
            correctAnswer: "5",
    },
        {
            question: "4. Who won the arm wrestling match in 'The One With The Halloween Party?'",
            answerOne: "Ross",
            answerTwo: "Chandler",
            answerThree: "Joey",
            answerFour: "Monica",
            id: "3",
            correctAnswer: "Ross",
    },
        {
            question: "5. What was Joey's nickname while working at Alessandro's?",
            answerOne: "The funny guy",
            answerTwo: "Dragon",
            answerThree: "Wizard",
            answerFour: "Bobby",
            id: "4",
            correctAnswer: "Dragon",                
    },
        {
            question: "6. What was the name of the cop who Phoebe dated?",
            answerOne: "Chad",
            answerTwo: "Greg",
            answerThree: "Larry",
            answerFour: "Gary",
            id: "5",
            correctAnswer: "Gary",                
    },
        {
            question: "7. Who did Chandler and Monica see waiting for an elevator?",
            answerOne: "Donald Trump",
            answerTwo: "Derek Jeter",
            answerThree: "Steve Nash",
            answerFour: "Stevie Wonder",
            id: "6",
            correctAnswer: "Donald",                
    },
        {
            question: "8. What was the name of the dog that Phoebe brought to cheer up Joey?",
            answerOne: "Pepper Jack",
            answerTwo: "Mozzarella",
            answerThree: "Parmesan",
            answerFour: "Cheddar",
            id: "7",
            correctAnswer: "Mozzarella",                
    },
        {
            question: "9. What was the name of Monica's 'easy bake oven restaurant'?",
            answerOne: "Easy Monica's Bakery",
            answerTwo: "Monica's Treats",
            answerThree: "Little Drops of Heaven Bakery",
            answerFour: "Hot Eats at Monica's",
            id: "8",
            correctAnswer: "Easy",                
    },
        {
            question: "10. What is Monica's plan after her and Richard break up?",
            answerOne: "To make jam",
            answerTwo: "Have a drink at the Empire State Building",
            answerThree: "Go to Japan",
            answerFour: "To move in with Chandler",
            id: "9",
            correctAnswer: "To",                
    },
        {
            question: "11. What according to Chandler, scares the beejesus out of him?",
            answerOne: "Monica",
            answerTwo: "Monica's parents",
            answerThree: "His dad",
            answerFour: "Michale Flatley Lord of the Dance",
            id: "10",
            correctAnswer: "Michale",                
    },
        {
            question: "12. Who thinks there is a spirit inside of them?",
            answerOne: "Chandler",
            answerTwo: "Joey",
            answerThree: "Ross",
            answerFour: "Phoebe",
            id: "11",
            correctAnswer: "Phoebe",                
    },
        {
            question: "13. What does Joey find in Las Vegas that astonished him?",
            answerOne: "A 2 headed turtle",
            answerTwo: "His identical hand twin",
            answerThree: "Food",
            answerFour: "Phoebe's twin, Ursula",
            id: "12",
            correctAnswer: "His",                
    },     
        {
            question: "14. What does Tag give Rachel on her 30th birthday?",
            answerOne: "A scooter",
            answerTwo: "Coupon book",
            answerThree: "Birthday card",
            answerFour: "Turtle",
            id: "13",
            correctAnswer: "A",                
    }, 
        {
            question: "15. Which store did Rachel and Ross both buy the same apothecary table from?",
            answerOne: "IKEA",
            answerTwo: "Pottery Barn",
            answerThree: "Crate & Barrel",
            answerFour: "Walmart",
            id: "14",
            correctAnswer: "Pottery",                
    }]

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
    // Submit button that will
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
        $("#timer").hide();
        $(".questionaire").hide();
        $(".correctAnswers").text("Correct answers: " + numberCorrect);
        $(".wrongAnswers").text("Incorrect answers: " + numberWrong);
        $("#submitButton").hide();
        $("#restartButton").show();
        $(".correctAnswers").show();
        $(".wrongAnswers").show();     
        $("#friendsCast").show();   
        $("#thanks").show();
        timeLeft = 90;
        window.clearInterval(interValid);
    })

    $("body").on("click", "#restartButton", function(){
        location.reload();
    })
})