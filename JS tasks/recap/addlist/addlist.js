let getitems=[];

function additems(){
    let item=document.getElementById('item').value;
    getitems.push(item);
    document.getElementById('item').value="";
    
    viewitems();
}

function viewitems(){
    let empty="";
    getitems.forEach(function(value,index){
        empty+='<tr><td><input type=checkbox>'+value+'</td></tr>';
    }) 
    document.getElementById('list').innerHTML=empty;
}