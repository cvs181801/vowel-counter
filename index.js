

const vowels = ["a", "e", "i", "o", "u"]

function countVowelsIterative(text) {
    let counter = 0;
    for (let letter of text.toLowerCase()) {
        if (vowels.includes(letter)) {
            counter++;
        }
    }
}

