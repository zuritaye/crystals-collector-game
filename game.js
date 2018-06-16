// .class
// #id
$(document).ready(function(){
//There will be four types of Crystals displaying as buttons.
    // create an array for the types of stones 
    var stone = ["diamond", "onyx", "opal", "pinkdiamond"];
    var totalScore;

//The Player will be shown a random number at the start of the game.
    //click object to start game system is triggered to start game
    //the system will return random numbers between 1 to 20
    // var randomNumber = Math.floor(Math.random() * 20) + 1;
    

//When the Player clicks on a Crystal, it will add a specific amount of points to the Player's total score
    //user clicks id1 //system displays a number 
                      //system adds number to total score
                     //jquery click events
    $("#id1").click(function(){
        var randomNumber = Math.floor(Math.random() * 20) + 1;
            alert(randomNumber);
            totalScore = totalScore + randomNumber;
            console.log('total score is' + totalScore);

    });

    $("#id2").click(function(){
        var randomNumber = Math.floor(Math.random() * 20) + 1;
        alert(randomNumber);
    });
    $("#id3").click(function(){
        var randomNumber = Math.floor(Math.random() * 20) + 1;
        alert(randomNumber);
    });
    $("#id4").click(function(){
        var randomNumber = Math.floor(Math.random() * 20) + 1;
        alert(randomNumber);
}); 


//The Player wins when the total score matches the random number from the begining of the game.
    //system displays score, score matches random number, user Wins  


//The Player loses when the score goes above the random number.
    //system displays score, score does not match random number, user Losses





});


