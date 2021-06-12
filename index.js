
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
    // const parentDiv = document.getElementById("buttonContainer");
    // const renderCounter = document.createElement('p');
    // renderCounter.innerText = `Number of Vowels: ${counter}`;
    // parentDiv.append(renderCounter);
    return counter;
    
}

countVowelsIterative();


//create an event listener that starts the vowel count when the user clicks on the 'go' button.

 const goButton = document.getElementById("go-btn");


 goButton.addEventListener ('click', function() {
    const textValue = document.getElementById("textBox");
     if (textValue.value){
     //return countVowelsIterative()
     console.log("weeee!");
     }
    
 })




