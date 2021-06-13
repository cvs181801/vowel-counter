
// //define the vowels, and start counter at 0
 const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
 let counter = 0;

//grab the elements
  const goButton = document.getElementById("go-btn");
  const textValue = document.getElementById("textBox");
  const parentDiv = document.getElementById("resultDiv");
  const renderCounter = document.createElement('p');

//let text = textValue.Value; we ended up not needing this.

function countVowelsIterative(text) {
    let counter = 0;
  
    for (let letter of text) {
      if (vowels.includes(letter)) {
        counter++
      }
    }
        renderCounter.innerText = '';
        renderCounter.innerText = `Number of Vowels: ${counter}`;
        parentDiv.append(renderCounter);
        return counter;
  }

 //create an event listener that starts the vowel count when the user clicks on the 'go' button.
   goButton.addEventListener("click", function() {
       return countVowelsIterative(textValue.value);
   });
  
//*** data value test 

//console.log(typeof(textValue.value)); when I logged this to the console I still see String. 

// when I used the same method to log textValue to the console I see Object.

// and when I edited the above to  const textValue = document.getElementById("textBox").value; and then logged out textValue using this method, I saw String.

