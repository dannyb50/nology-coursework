function calculateYearsUntilRetirement(event) {
    const currentAge = event.target.value;

    let yearsLeft = 65 - currentAge;
    alert("You have " + yearsLeft + " years left to work");

}

function getGreeting(event) {
    const greeting = event.target.value;

    if (greeting == "Hello") {
        alert("Bonjour")
    } else if (greeting == "Goodbye") {
        alert("Au revoir")
    } else {
        alert("I dont understand")
    }
}

function calculateHumanAge(event) {
    const dogAge = event.target.value;

    let humanAge = dogAge * 7;
    alert(humanAge + " years old!")
}

function calculateWeeks(event) {
    const years = event.target.value;

    let weeks = years * 52;
    alert(weeks + " weeks!")
}