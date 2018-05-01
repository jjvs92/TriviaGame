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
// setInterval(countDown, 1000);







})