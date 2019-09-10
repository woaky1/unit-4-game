$(document).ready(function(){

    // Here we're declaring a bunch of our variables and giving some of them initial values.
    var targetNumber;
    var gemValues = [];
    var currentScoreNumber = 0;
    var winTotal = 0;
    var lossTotal = 0;
    var whichGem;

    // This sets the number we want to hit.
    function getTargetNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
        }

    // This gets the initial target number on the page.
    targetNumber = getTargetNumber(19, 120);
    $("#random-number").text(targetNumber);

    // This sets the onscreen win/loss totals to zero.
    $("#win-total").text(winTotal);
    $("#losses-total").text(lossTotal);

    // Show that our initial score before clicking is zero.
    $("#currentScore").text(currentScoreNumber);
    // This is the function we use to set the value for the gems.
    function getGemValue() {
        for(var i = 0; i < 4; i++) {
            gemValues[i] = (Math.floor((Math.random() * 12) + 1));         
        }
    }

    // Now we run that function to get out initial gem values.
    getGemValue();

    // We'll use this function each time the user clicks a gem to see if they won or lost.
    function checkScore() {
        // The first if statement checks for a win.
        if (currentScoreNumber === targetNumber) {
            // Here we add a win to our win tally
            winTotal++;
            // console.log("winTotal: " + winTotal);
            // We reset the values of our gems.
            getGemValue();
            // We get a new target number and show it.
            targetNumber = getTargetNumber(19, 120);
            $("#random-number").text(targetNumber);
            // Reset our score.
            currentScoreNumber = 0;
            $("#currentScore").text(currentScoreNumber);
            // Update our win tally on the page
            $("#win-total").text(winTotal);
            // Play a victory sound.
            var victorySound = $("#victory")[0];
            victorySound.play();
        } else if (currentScoreNumber > targetNumber) {
            // Here we add a loss to our loss tally
            lossTotal++;
            // console.log("lossTotal: " + lossTotal);
            // We reset the values of our gems.
            getGemValue();
            // We get a new target number and show it.
            targetNumber = getTargetNumber(19, 120);
            $("#random-number").text(targetNumber);
            // Reset our score.
            currentScoreNumber = 0;
            $("#currentScore").text(currentScoreNumber);
            // Update our win tally on the page
            $("#losses-total").text(lossTotal);
            // Play a defeat sound.
            var lostSound = $("#defeat")[0];
            lostSound.play();
        }
    };
    
    $(".gem").on("click", function() {
        whichGem = $(this).attr("data-gemIndex")
        // console.log(whichGem);
        currentScoreNumber += gemValues[whichGem];
        // console.log(currentScoreNumber);
        $("#currentScore").text(currentScoreNumber);
        checkScore();
    });

});