function fn(){
    var n = document.getElementById("username").value;
    document.getElementById("first").style.display="none";
    document.getElementById("second").style.display="none";
        document.getElementById("aryan").style.display="none";
    document.getElementById("response").style.display = "block";
    document.getElementById("rname").innerHTML="welcome "+" ' "+n+" ' "+" To my Website";
    document.getElementById("rwish1").innerHTML="I Wish You A Very <br><br>Happy Friendship Day "+" <br><br>' "+n+" ' ";
    document.getElementById("rwish2").innerHTML="May God <br>Bless You<br>"+" ' "+n+" '";



}

function wish(){
  const speech = new SpeechSynthesisUtterance();
  speech.text = "hey dear ........... I wish you a very happy friendship day !!!";
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;
  window.speechSynthesis.speak(speech);
}
