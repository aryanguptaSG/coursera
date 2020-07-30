const voice = document.querySelector(".voice");
const voice2text = document.querySelector(".voice2text");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recorder = new SpeechRecognition();

function addHumanText(text) {
  const chatContainer = document.createElement("div");
  chatContainer.classList.add("chat-container");
  const chatBox = document.createElement("p");
  chatBox.classList.add("voice2text");
  const chatText = document.createTextNode(text);
  chatBox.appendChild(chatText);
  chatContainer.appendChild(chatBox);
  return chatContainer;
}

function addBotText(text) {
  const chatContainer1 = document.createElement("div");
  chatContainer1.classList.add("chat-container");
  chatContainer1.classList.add("darker");
  const chatBox1 = document.createElement("p");
  chatBox1.classList.add("voice2text");
  const chatText1 = document.createTextNode(text);
  chatBox1.appendChild(chatText1);
  chatContainer1.appendChild(chatBox1);
  return chatContainer1;
}

function botVoice(message) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = "apologies!!!. i am still in developing mode. I don't have any idea about it.";

    if (message.includes('how are you')) {
      speech.text = "I am fine, thanks. How are you?";
    }
    else if (message.includes('hello')){
      speech.text ='hello sir .. ';
    }
    else if (message.includes('good morning')){
      speech.text ='good morning sir';
    }
    else if (message.includes('good afternoon')){
      speech.text ='good afternoon sir';
    }
    else if (message.includes('good evening')){
      speech.text ='good evening sir';
    }
    else if (message.includes('good night')){
      speech.text ='good night sir';
    }
    else if(message.includes('are you listening')){
      speech.text = " yes i was listening.!!";
      window.speechSynthesis.speak(speech);
      speech.text="press Activate Voice button to make me listen your voice .........thanks";
    }
    else if (message.includes('who are you')){
      speech.text = "hey i am aryan's assistant ...";
    }
    else if(message.includes("what is your name")){
      speech.text ="my name is arvi... actually aryan is confused ... he is thinking about my name.. you can suggest him my name.";
    }
    else if (message.includes("you doing")){
      speech.text='i am learning as much as possible.......i am fond of learning';
    }
    else if (message.includes("you do")){
      speech.text ="i can search anything from google ... i can search anyone's wikipedia...i can find location of any place.....and so many things i can do .. you tell me what do you want to do.";
    }
    else if (message.includes('thanks')||message.includes('thank you')||message =='ok'){
      speech.text="most welcome sir it's my duty ... can i do something for you ..";
    }
    else if (message.includes('you are cute')||message.includes("you are so cute")||message.includes("you are intelligent")){
      speech.text="thanks sir .. .......you are more  intelligent and cute than me.";
    }
    else if(message.includes('I am fine')||message.includes('I am happy')||message.includes('I am very happy')){
      speech.text = "happy for you.......... can i help you."
    }

    else if(message.includes('open Google')){
      window.open('https://www.google.com','_blank');
      return 0;

    }
    else if(message.includes('happy Friendship Day')){
      speech.text = ' same to you sir .. i am lucky to have you .';
    }
    else if(message.includes('open YouTube')){
      window.open('https://www.youtube.com','_blank');
      return 0;

    }
    else if(message.includes('shut up')||message.includes('get out')){
      speech.text=" i am sorry sir ... bye bye";
      window.speechSynthesis.speak(speech);
      window.open("index.html",'_self');
      return 0;
    }
    else if (message.includes("bye bye")){
      speech.text = 'bye bye sir ... have a nice day';
    }
    else if(message.includes('search about')||message.includes('search')){
      text = message.split(" ");
      if (text[0]=='search'&&text[1]=='about'){
        text.shift();
        text.shift();
      }
      else{
        text.shift();
      }
      search = text.join(" ");
      url = 'https://google.com/search?q='+search;
      window.open(url);
      speech.text = "this is search results";
      window.speechSynthesis.speak(speech);

      return 0;
    }
    else if (message.includes("location")||message.includes("map")||message.includes("Google maps")){
      text = message.split(" ");
      for (var i=0; i<=text.length ;i++){
        if(text[i]==='find'||text[i]==='of'||text[i]==='location'||text[i]==='the'||text[i]==='Google maps'||text[i]==='map'){
          text.splice(i, 1);
        }
      }
      search=text.join(" ");
      url = 'https://google.nl/maps/dir/'+search;
      window.open(url);
      speech.text = " this is the location of "+search;
      window.speechSynthesis.speak(speech);
      return 0 ;
     }
    else if(message.includes('Wikipedia')){
      text = message.split(" ");
      text.pop();
      search = text.join(" ");
      url = "https://en.wikipedia.org/wiki/"+search;
      window.open(url);
      return 0;
    }


    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
    var element = document.getElementById("container");
    element.appendChild(addBotText(speech.text));
}

recorder.onstart = () => {
  console.log('Voice activated');

};

recorder.onresult = (event) => {
  const resultIndex = event.resultIndex;
  const transcript = event.results[resultIndex][0].transcript;
  var element = document.getElementById("container");
  element.appendChild(addHumanText(transcript));
  botVoice(transcript);
};

voice.addEventListener('click', () =>{
  const speech = new SpeechSynthesisUtterance();
  speech.text = " i am listening";
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;
  window.speechSynthesis.speak(speech);
  recorder.start();
});



//https://www.google.nl/maps/dir/Allahabad+High+Court,+Nyaya+Marg,+Canton,+Dhoomanganj,+Prayagraj,+Uttar+Pradesh+211001/Bank+Rd,+Prayagraj,+Uttar+Pradesh+211002/@25.460409,81.8222861,14z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x399acb20afb206bd:0xbb47a507e1e4fee9!2m2!1d81.8213596!2d25.4532642!1m5!1m1!1s0x399aca9a6f6df389:0x3aac689d421918bd!2m2!1d81.8585495!2d25.4687823
