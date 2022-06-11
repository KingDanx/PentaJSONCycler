import messages from "./messages.json" assert { type: "json" };

let counter = 0;
let countDown = messages.messages[counter].duration;
document.getElementById("time").innerHTML = `Duration: ${countDown}`;
document.getElementById(
  "message"
).innerHTML = `Text: ${messages.messages[counter].text}`;

function countDownFun(jsonArray) {
  setTimeout(function () {
    if (countDown == 0) {
      counter++;
      if (counter == jsonArray.messages.length) {
        counter = 0;
        countDown = messages.messages[counter].duration;
      }
      countDown = messages.messages[counter].duration;
      document.getElementById(
        "message"
      ).innerHTML = `Text: ${jsonArray.messages[counter].text}`;
      document.getElementById("time").innerHTML = `Duration: ${countDown}`;
      countDownFun(messages);
    } else {
      countDown--;
      document.getElementById("time").innerHTML = `Duration: ${countDown}`;
      countDownFun(messages);
    }
  }, 1000);
}

countDownFun(messages);
