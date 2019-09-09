$(document).ready(function(){
    var targetNumber;
    var gemValues = [];
    var currentScoreNumber = 0;
    var winTotal = 0;
    var winTotalText = winTotal.toString();
    var loseTotal = 0;
    var loseTotalText = loseTotal.toString();

    // This sets the number we want to hit.
    function getTargetNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
        }
    targetNumber = getTargetNumber(19, 120);
    $("#random-number").text(targetNumber);

    $("#win-total").text(winTotalText);
    $("#losses-total").text(loseTotalText);

    function getGemValue() {
        for(var i = 0; i < 4; i++) {
            gemValues[i] = (Math.floor((Math.random() * 12) + 1));         
        }
    }

    getGemValue();

    function checkScore() {
        if (currentScoreNumber === targetNumber) {
            winTotal++;
            console.log("winTotal: " + winTotal);
            getGemValue();
            targetNumber = getTargetNumber(19, 120);
            currentScoreNumber = 0;
            $("#win-total").text(winTotalText);
        } else if (currentScoreNumber > targetNumber) {
            loseTotal++;
            console.log("loseTotal: " + loseTotal);
            getGemValue();
            targetNumber = getTargetNumber(19, 120);
            currentScoreNumber = 0;
            $("#losses-total").text(loseTotalText);
        }
    };


    
    $("#gem-1").click(function(){
        currentScoreNumber += gemValues[0];
        console.log(currentScoreNumber);
        $("#currentScore").text(currentScoreNumber);
        checkScore();
    });

    $("#gem-2").click(function(){
        currentScoreNumber += gemValues[1];
        console.log(currentScoreNumber);
        $("#currentScore").text(currentScoreNumber);
        checkScore();
    });

    $("#gem-3").click(function(){
        currentScoreNumber += gemValues[2];
        console.log(currentScoreNumber);
        $("#currentScore").text(currentScoreNumber);
        checkScore();
    });

    $("#gem-4").click(function(){
        currentScoreNumber += gemValues[3];
        console.log(currentScoreNumber);
        $("#currentScore").text(currentScoreNumber);
        checkScore();
    });




    // console.log("Current Score Number: " + currentScoreNumber)
    // console.log("Target Number: " + targetNumber);
});