$(document).ready(function(){
    var targetNumber;
    var targetNumberText;
    var gemValues = [];
    var currentScoreNumber = 0;

    // This sets the number we want to hit.
    function getTargetNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
        }
    targetNumber = getTargetNumber(19, 120);
    targetNumberText = targetNumber.toString();
    $("#random-number").text(targetNumberText);

    function getGemValue() {
        for(var i = 0; i < 4; i++) {
            gemValues[i] = (Math.floor((Math.random() * 12) + 1));         
            console.log(gemValues);
        }
    }

    getGemValue();

    $("#gem-1").click(function(){
        currentScoreNumber += gemValues[0];
        console.log(currentScoreNumber);
        $("#currentScore").text(currentScoreNumber);
    });
});