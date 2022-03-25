var decrease = document.getElementById("decrease");
var reset = document.getElementById("reset");
var increase = document.getElementById("increase");
var counter = document.querySelector(".counter");
var number= parseInt(counter.innerHTML);
colorVariable(number);

function decreaseNumber(){
number -=1;   
counter.innerHTML=number;
colorVariable(number);
}


function increaseNumber(){

    number += 1;
    counter.innerHTML=number;
    colorVariable(number);
       
}

function resetNumber(){
    number = 0;
    counter.innerHTML = number;
    colorVariable(number);
}






function colorVariable(number) {
    if(number < 0){
        counter.style.color = "red";
    }
    else if(number > 0){
        counter.style.color = "green";
    }
    else{
        counter.style.color="yellow";
    }
    
}


