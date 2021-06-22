// Write a finction named getDescription that:
// Takes 4 arguments: number of children, parner's name, geographic location, job title.
// Outputs your statement to the console like so: "I am currently a X living in Y, and married to Z with N kids."
//  Call the function 3 times with 3 different values for the arguments.

//let getDescription = (children, partner, location, job) => {
//   return  "I am currently a " + job + " living in " + location + ", and married to " + partner + " with " + children + " kids."
//}

//console.log(getDescription(1, "Nicole", "Warrington", "Duty Manager"));
//console.log(getDescription(2, "Stuart", "Stockton Heath", "retired seamstress"));
//console.log(getDescription(4, "Louise", "London", "Athlete"));

// Coaches way:

const getDescription = (partner, amountOfChildren, location, jobTitle) => {
    const message = `I am currently a ${jobTitle} living in ${location} and married to ${partner} with ${amountOfChildren} kids.`

    console.log(message)
}

getDescription("Billy", 7, "Brighton", "Bin Man");
getDescription("Susan", 18, "Paris", "Singer");

// Lifetime supply of snickers:
// Struggled

const calculateSupply = (currentAge, amountOfSnickersPerDay) => {
    const maxAge = 90;
    const amountOfSnickersPerLifetime = (maxAge - currentAge) * (amountOfSnickersPerDay * 365);
    const message = `You will need ${amountOfSnickersPerLifetime} to las you until the ripe old age of ${maxAge}.`

    console.log(message)
}

calculateSupply(36, 1);
calculateSupply(33, 2);

// Temperature Converter

const temperatureInCelsius = (celsius) => { //celsiusToFarenheit is a better name
    const temperatureInFarenheit = (celsius * 2) + 30;
    const message = `It is ${temperatureInFarenheit} degrees farenheit.`

    console.log(message)
}

temperatureInCelsius(24);

// Age in dog years

const ageInHumanYears = (age) => { //calculateDogAge is a better name
    const ageInDogYears = age * 7;

    console.log(`Your Dog is ${ageInDogYears} years old.`)
}

ageInHumanYears(14);