document.getElementById("username").textContent = 'Name : K.Manikanda Aravinth';
document.getElementById("rno").textContent = 'Roll.No : RSP17010';
document.getElementById("dept").textContent = 'Domain : Full Stack Development';

var item=[];
var item1=[];

function Add(){
    var a = document.getElementById("etn").value;
    var b = document.getElementById("dob").value;

    item.push(a);
    item1.push(b);

    document.getElementById("etn").value="";
    document.getElementById("dob").value="";

    console.log(a);
    console.log(b);

}
