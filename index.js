
//define the vowels
const vowels = ["a", "e", "i", "o", "u"]

//create a way to check each letter of the inserted text for vowels
function countVowelsIterative(text) {
    let counter = 0;
    for (let letter of text.toLowerCase()) {
        if (vowels.includes(letter)) {
            counter++;
        }
    }
    console.log(`Volume: ${counter}`)
    return counter;
}

//create an event listener that starts the vowel count when the user clicks on the 'go' button.

countVowelsIterative()

console.log("happy");
