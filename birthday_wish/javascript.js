function fn(){
    var n = document.getElementById("username").value;
    document.getElementById("first").style.display="none";
    document.getElementById("second").style.display="none";
    document.getElementById("response").style.display = "block";
    document.getElementById("rname").innerHTML="welcome "+n+" To my Website";

}