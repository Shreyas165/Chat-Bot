document.addEventListener("DOMContentLoaded", () => {
  const inputField = document.getElementById("input");
  inputField.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
      let input = inputField.value;
      inputField.value = "";
      output(input);
    }
  });
});

function output(input) {
  let product;

  // Regex remove non word/space chars
  // Trim trailing whitespce
  // Remove digits - not sure if this is best
  // But solves problem of entering something like 'hi1'

 // let text = input.toLowerCase().replace(/[^\w\s]/gi, "").replace(/[\d]/gi, "").trim();
 // text = text
    
   // .replace(/i feel /g, "")
   // .replace(/whats/g, "what is")
   // .replace(/please /g, "")
   // .replace(/ please/g, "")
   // .replace(/r u/g, "are you");
   let text =input.trim();
  if (compare(prompts, replies, text)) { 
    // Search for exact match in `prompts`
    console.log(prompts);
    console.log(replies);
    console.log(text);
    product = compare(prompts, replies, text);
    console.log("line no 35 ---->",product);
  } else if (text.match(/thank/gi)) {
    product = "You're welcome!"
    console.log("line no 38---->",product);
  } else if (text.match(/( Firstyear|Coordinator)/gi)) {
    // If no match, check if message contains `Firstyearcoordinator`
    product =  FirstyearCoordinator[Math.floor(Math.random() * FirstyearCoordinator.length)];
  } 
  
  
  else if (text.match(/(ASection|MathsTeacher)/gi)) {
    // If no match, check if message contains `ASectionMathsTeacher`
    product =  ASectionMathsTeacher[Math.floor(Math.random() * ASectionMathsTeacher.length)];
    console.log("line no 48 ---->",product);
  }
  
  else {
    // If all else fails: random alternative
    product = alternative[Math.floor(Math.random() * alternative.length)];
    console.log("line no 54 ---->",product);
  }

  // Update DOM
  addChat(input, product);
}

function compare(promptsArray, repliesArray, string) {
  let reply;
  let replyFound = false;
  console.log("promptsArray---->",promptsArray);
  console.log("repliesArray---->",repliesArray);
  for (let x = 0; x < promptsArray.length; x++) {
    for (let y = 0; y < promptsArray[x].length; y++) {
      if (promptsArray[x][y] === string) {
        let replies = repliesArray[x];
        console.log(replies);
        reply = replies[Math.floor(Math.random() * replies.length)];
        replyFound = true;
  
       // Stop inner loop when input value matches prompts
        break;
      }
    }
    if (replyFound) {
      // Stop outer loop when reply is found instead of interating through the entire array
      break;
    }
  }
  return reply;
}

function addChat(input, product) {
  const messagesContainer = document.getElementById("messages");

  let userDiv = document.createElement("div");
  userDiv.id = "user";
  userDiv.className = "user response";
  userDiv.innerHTML = `<img src="user.png" class="avatar"><span>${input}</span>`;
  messagesContainer.appendChild(userDiv);

  let botDiv = document.createElement("div");
  let botImg = document.createElement("img");
  let botText = document.createElement("span");
  botImg.src = "bot-mini.png";
  botImg.className = "avatar";
  botDiv.className = "bot response";
  botText.innerText = "Typing...";
  botDiv.appendChild(botText);
  botDiv.appendChild(botImg);
  messagesContainer.appendChild(botDiv);
  // Keep messages at most recent
  messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;

  // Fake delay to seem "real"
  setTimeout(() => {
    botText.innerText = `${product}`;
    textToSpeech(product)
  }, 2000
  )

}
