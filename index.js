
//define the vowels, and start counter at 0
const vowels = ["a", "e", "i", "o", "u"]
let counter = 0;

//grab the elements
  const goButton = document.getElementById("go-btn");
  const textValue = document.getElementById("textBox").value;


//create a way to count the vowels in the text the user types in
function countVowelsIterative(textValue) {
    let counter = 0;
    for (let letter of textValue.toLowerCase()) {
        if (vowels.includes(letter)) {
            counter++;
        }  
    }
    counter = 0;
    const parentDiv = document.getElementById("resultDiv");
    const renderCounter = document.createElement('p');
    renderCounter.innerText = '';
    renderCounter.innerText = `Number of Vowels: ${counter}`;
    parentDiv.append(renderCounter);
    return counter;
    
}
countVowelsIterative(textValue);

 //create an event listener that starts the vowel count when the user clicks on the 'go' button.
 goButton.addEventListener('click', event => {
    countVowelsIterative()
 });






