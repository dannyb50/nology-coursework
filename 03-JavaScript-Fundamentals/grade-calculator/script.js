function handleCalculateGrade(event) {
    let grade = event.target.value;

    if (!grade) {
        return;
    }

    grade = grade.toUpperCase();

    let percentage;
    switch (grade) {
        case "A":
            percentage = "90-100%";
            break;
        case "B":
            percentage = "75-90%";
            break;
        case "C":
            percentage = "50-75%";
            break;
        case "D":
            percentage = "25-50%";
            break;
        case "E":
            percentage = "0-25%";
            break;
    }
    alert("The percentage was " + percentage);
}


//positive or negative checker
function handlePositiveOrNegative(event) {
    let number = event.target.value;

    if (number <0) {
        alert("negative");
    } else {
        alert("positive");
    }
}


//which of three numbers is the greatest
function handleWhichIsGreater(event) {

    let num1, num2, num3;

    num1 = Number(document.getElementById("a").value);
    num2 = Number(document.getElementById("b").value);
    num3 = Number(document.getElementById("c").value);

    if (num1>num2 && num1>num3) {
        alert(num1);
    }
    else if (num2>num1 && num2>num3) {
        alert(num2);
    } else {
        alert(num3);
    } 
}


//how many days until the weekend 
function handleDaysLeft(event) {
    let days = event.target.value;

    switch (days) {
        case "Monday":
            days = 5;
            break;
        case "Tuesday":
            days = 4;
            break;
        case "Wednesday":
            days = 3;
            break;
        case "Thursday":
            days = 2;
            break;
        case "Friday":
            days = 1;
            break;
        default:
            alert ("Sorry, day not recognised");
    } 

    alert ("Only " + days + " more days until the weekend.");

}

//how many days until the weekend #2

switch(new Date().getDay()) {
    case 0:
        console.log("It's already the weekend!")
        break;
    case 1:
        console.log("4 days left!");
        break;
    case 2:
        console.log("3 days left!");
        break;
    case 3:
        console.log("2 days left!");
        break;
}
