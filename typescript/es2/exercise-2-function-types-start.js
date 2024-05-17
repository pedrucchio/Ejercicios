"use strict";
/**
 * START: Follow the instructions below.
 */
Object.defineProperty(exports, "__esModule", { value: true });
// Add types to this function declaration.
function doubleThePopulation(value) {
    return value * 2;
}
// Correct or remove the function calls which cause type errors.
console.log(doubleThePopulation(5));
// doubleThePopulation("6.12");
console.log(doubleThePopulation(6.12));
console.log(doubleThePopulation(8526));
// doubleThePopulation(false);
console.log(doubleThePopulation(0));
// Alter this function so the `language2` parameter is optional.
// Hint: Check `language2` is not `undefined` before passing it to `console.log()`.
function languagesSpoken(country, language1, language2) {
    console.log("The languages spoken in ".concat(country, " are:"));
    console.log(language1);
    if (typeof (language2) === "string") {
        console.log(language2);
    }
}
languagesSpoken("Colombia", "Spanish", "English");
languagesSpoken("Greece", "Greek");
languagesSpoken("New Zealand", "English", "Māori");
