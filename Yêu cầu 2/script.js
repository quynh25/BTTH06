//tạo số ngẫu nhiên
function generateRandomNumber(){
    arr=[]
    for (let i =0; i<Math.floor(Math.random() *(20-10)) +10;i++){
        arr.push(Math.floor(Math.random() *(100-10)) +10);
        
    }
    
    document.getElementById('addArray').innerHTML=arr.join(", ");
}

//sắp xếp

function arrange(){
    arr= document.getElementById('addArray').innerHTML.split(",")
   if(document.getElementById('increase').checked == true){
        arr.sort(function(a, b){return a - b});
        document.getElementById('addArrayChanged').innerHTML=arr;
   }
   if(document.getElementById('decrease').checked == true){
    arr.sort(function(a, b){return b - a});
    document.getElementById('addArrayChanged').innerHTML=arr;
    }

} 
//thêm vị trí
function addLocation(){
    number= document.getElementById('number').value
    index= document.getElementById('index').value

  
    if(number!="" && index!=""){
        arr= document.getElementById('addArrayChanged').innerHTML.split(",")
        arr.splice( index, 0, number)
        document.getElementById('addArrayChanged').innerHTML=arr.join(", ");
    }
    else{
       alert("Điền đầy đủ thông tin vào")
    }
}

