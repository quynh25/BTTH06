
function myFunction(){
    array=[]
    for(let i=0; i<Math.floor(Math.random()*(20-10)) +10; i++){
        array.push(Math.floor(Math.random() *(100-10)) +10);
    }
    document.getElementById('text').innerHTML=array.join(" , ")  
}


function arranged(){
    array=document.getElementById('text').innerHTML.split(', ')
    if( document.getElementById('increase').checked==true){
        array.sort(function(a,b){return a-b})
        document.getElementById('result').innerHTML= array
    }

    if(document.getElementById('decrease').checked==true){
        array.sort(function(a,b){return b-a})
        document.getElementById('result').innerHTML= array
    }
    
}

function addElement(){
    number= document.getElementById('number').value
    index= document.getElementById('index').value
    if(index!="" && number!=""){
        array= document.getElementById('result').innerHTML.split(' , ')
        array.splice(index,0,number)
        document.getElementById('result').innerHTML=array.join(" , ");
    }
    else{
        alert("Bạn chưa nhập thông tin cần thêm")
    }
}