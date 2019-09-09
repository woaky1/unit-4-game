$(document).ready(function(){
    var targetNumber;
    var targetNumberText;
    var baseGemValue;
    var gem1Value;
    var gem2Value;
    var gem3Value;
    var gem4Value; 
    var gemValues = [
        gem1Value,
        gem2Value,
        gem3Value,
        gem4Value
    ];
    
    // This sets the number we want to hit.
    function getTargetNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
        }
    targetNumber = getTargetNumber(19, 120);
    targetNumberText = targetNumber.toString();
    $("#random-number").text(targetNumberText);



    






});