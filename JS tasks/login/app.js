function validation(){

     var uname=document.getElementById("Uname").value;
     spn1=document.getElementById("spn1");

    if(uname.length>=10){
        spn1.innerHTML="good";
        spn1.style.color="green"
    } else{
    spn1.innerHTML="Username must be 10 Charecter";
    spn1.style.color="red"
    }

}

function validate(){

     var psw=document.getElementById("psw").value;
     spn2=document.getElementById("spn2");

    if(psw.length>=8){
        spn2.innerHTML="Strong Password";
        spn2.style.color="green"
    } else{
    spn2.innerHTML="week Password";
    spn2.style.color="red"
    }

}
function check(){
    window.alert("LOGIN SUCCESS");
}