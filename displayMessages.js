import messages from './messages.json' assert {type: 'json'};

let message;

function displayMessage(jsonArray){

    for (let i = 0; i < jsonArray.messages.length; i++) {
        if(i == 0){
             console.log(`Message: ${jsonArray.messages[i].text}`);
             document.getElementById('message').innerHTML = jsonArray.messages[i].text;
        }
        else{
            let j = 1;
            function myLoop() { 
                setTimeout(function() {   
                    document.getElementById('message').innerHTML = jsonArray.messages[j].text;
                  j++;                 
                  if (j < jsonArray.messages.length) {
                    myLoop();
                  }
                  else if(j == jsonArray.messages.length){
                      j = 0;
                      myLoop();
                  }              
                }, jsonArray.messages[j].duration*1000)
              }
            myLoop();
        }
    }
}

displayMessage(messages);