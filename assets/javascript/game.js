$(document).ready(function(){
    var targetNumber;
    var targetNumberText;
    $(function() {
        // targetNumber = 15;
        targetNumber = Math.floor((Math.random() * 120) + 19);
        targetNumberText = targetNumber.toString();
        console.log(targetNumberText);
        $("#random-number").text(targetNumberText);
    });



});