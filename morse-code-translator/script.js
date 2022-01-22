const input = document.querySelector(".input");
const translateBtn = document.querySelector("#morse");
const translation = document.querySelector(".translation");
const clear = document.querySelector("#clear");
let isTranslated = false;

class Translate {
    constructor(alphabet, wordToTranslate) {
        this.alphabet = alphabet;
        this.wordToTranslate = wordToTranslate;
    }
}

const englishToMorse = new Translate(
        alphabet = {
        "A": ".-",
        "B": "-...",
        "C": "-.-.",
        "D": "-..",
        "E": ".",
        "F": "..-.",
        "G": "--.",
        "H": "....",
        "I": "..",
        "J": ".---",
        "K": "-.-",
        "L": ".-..",
        "M": "--",
        "N": "-.",
        "O": "---",
        "P": ".--.",
        "Q": "--.-",
        "R": ".-.",
        "S": "...",
        "T": "-",
        "U": "..-",
        "W": ".--",
        "X": "-..-",
        "Y": "-.--",
        "Z": "--.."
    },
    wordToTranslate = null,
)

const morseToEnglish = new Translate(
    alphabet = {
        ".-": "A",
        "-...": "B",
        "-.-.": "C",
        "-..": "D",
        ".": "E",
        "..-.": "F",
        "--.": "G",
        "....": "H",
        "..": "I",
        ".---": "J",
        "-.-": "K",
        ".-..": "L",
        "--": "M",
        "-.": "N",
        "---": "O",
        ".--.": "P",
        "--.-": "Q",
        ".-.": "R",
        "...": "S",
        "-": "T",
        "..-": "U",
        ".--": "W",
        "-..-": "X",
        "-.--": "Y",
        "--..": "Z",
    },
    wordToTranslate = null,
)

const translateEnglishToMorse = () => {
    englishToMorse.wordToTranslate = input.value;
    const inputArray = englishToMorse.wordToTranslate.toUpperCase().split("");
    console.log(inputArray);
    // console.log(englishToMorse);
   
    translation.innerHTML = inputArray.map(arrayItem => {
        if(englishToMorse.alphabet[arrayItem]) {
            return englishToMorse.alphabet[arrayItem]
        } else {
            return arrayItem
        }
    }).join("");

    translation.classList.remove("pink");

    isTranslated = true
    console.log(isTranslated);
}

const translateMorseToEnglish = () => {
    morseToEnglish.wordToTranslate = input.value;
    const inputArray = morseToEnglish.wordToTranslate.split("");
    console.log(inputArray);
    console.log(morseToEnglish);
   
    translation.innerHTML = inputArray.map(arrayItem => {
        if(morseToEnglish.alphabet[arrayItem]) {
            return morseToEnglish.alphabet[arrayItem]
        } else {
            return arrayItem
        }
    }).join("");

    translation.classList.add("pink");

    isTranslated = false
}

 
// btn.addEventListener('click', translateEnglishToMorse)

const translate = () => {
    if(isTranslated === false) {
        translateEnglishToMorse();
        translateBtn.innerHTML = "English";
    } else if (isTranslated === true) {
        translateMorseToEnglish();
        translateBtn.innerHTML = "Morse";
    }
}


translateBtn.addEventListener('click', translate)

const restart = () => {
    input.value = "";
    translation.innerHTML = "";
    isTranslated = false;
    console.log(isTranslated);
    translateBtn.innerHTML = "Morse";
}
 
clear.addEventListener('click', restart);
 