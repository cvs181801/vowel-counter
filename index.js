
//define the vowels, and start counter at 0
const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
let counter = 0;

//grab the elements
  const goButton = document.getElementById("go-btn");
  const textValue = document.getElementById("textBox");
  const parentDiv = document.getElementById("resultDiv");
  const renderCounter = document.createElement('p');

  textValueArr = [];


//create a way to count the vowels in the text the user types in
// function countVowelsIterative(text) {
//     let counter = 0;
//     textValueArr.push(textValue.value); 
//     for (let letter of textValueArr) {
//         if (textValueArr.includes(letter)) {
//             counter++;
//         }  
//     }
    
//     renderCounter.innerText = '';
//     renderCounter.innerText = `Number of Vowels: ${counter}`;
//     parentDiv.append(renderCounter);
//     return counter;
    
// }

//I rerwrote the above function using a while loop instead.
function countVowelsIterative(text) {
    let counter = 0;
    while (textValueArr.length) {
        counter++;
    }
     renderCounter.innerText = '';
     renderCounter.innerText = `Number of Vowels: ${counter}`;
     parentDiv.append(renderCounter);
     return counter;
}

countVowelsIterative(textValue);

 //create an event listener that starts the vowel count when the user clicks on the 'go' button.
  goButton.addEventListener("click", function() {
      return countVowelsIterative(textValue.value);
  });
  
//countVowelsIterative(textValue);





