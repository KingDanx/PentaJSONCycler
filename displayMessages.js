import messages from "./messages.json" assert { type: "json" };

let counter = 0;
let countDown = messages.messages[counter].duration;
document.getElementById("time").innerHTML = `Duration: ${countDown}`;
document.getElementById(
  "message"
).innerHTML = `Text: ${messages.messages[counter].text}`;

function cycleMessages(jsonArray) {
  setTimeout(function () {
    if (countDown == 0) {
      counter++;
      if (counter == jsonArray.messages.length) {
        counter = 0;
        countDown = jsonArray.messages[counter].duration;
      }
      countDown = jsonArray.messages[counter].duration;
      document.getElementById(
        "message"
      ).innerHTML = `Text: ${jsonArray.messages[counter].text}`;
      document.getElementById("time").innerHTML = `Duration: ${countDown}`;
      cycleMessages(messages);
    } else {
      countDown--;
      document.getElementById("time").innerHTML = `Duration: ${countDown}`;
      cycleMessages(messages);
    }
  }, 1000);
}

cycleMessages(messages);
