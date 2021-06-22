//Create an Application which can be used to keep track
//of a score in a football match

//1. There's two teams so keep two scores going
let teamScoreOne = 0;
let teamScoreTwo = 0;
let isGameStopped = false;


//2. When team one button is clicked, increment team1 score
function handleTeamOneClick() {
    document.getElementById('number-one').value = ++teamScoreOne;
}
//3. when team teo button is clicked, increment team2 score
function handleTeamTwoClick() {
    document.getElementById('number-two').value = ++teamScoreTwo;
}
//4. When do we finish/stop?
function handleStopGame() {
    isGameStopped = true;
}