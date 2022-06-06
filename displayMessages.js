import messages from "./messages.json" assert { type: "json" };

let counter = 0;
function myLoop(jsonArray) {
  setTimeout(function () {
    document.getElementById("message").innerHTML = jsonArray.messages[counter].text;
    counter++;
    if (counter < jsonArray.messages.length) {
      myLoop(messages);
    } else if (counter == jsonArray.messages.length) {
      counter = 0;
      myLoop(messages);
    }
  }, jsonArray.messages[counter].duration * 1000);
}
myLoop(messages);
