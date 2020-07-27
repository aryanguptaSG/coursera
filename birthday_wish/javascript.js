function fn(){
    var n = document.getElementById("username").value;
    document.getElementById("first").style.display="none";
    document.getElementById("second").style.display="none";
        document.getElementById("aryan").style.display="none";

    document.getElementById("response").style.display = "block";
      document.documentElement.scrollTop=0;
    document.getElementById("rname").innerHTML="welcome "+" ' "+n+" ' "+" To my Website";
    document.getElementById("rwish1").innerHTML="I Wish You A Very <br><br>Happy Birthday "+" <br><br>' "+n+" ' ";
    document.getElementById("rwish2").innerHTML="May God <br>Bless You<br>"+" ' "+n+" '";




}
