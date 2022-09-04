const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const items = document.querySelectorAll(".item");
let counter = 0;
let mouseClick = 0 ;
items.forEach(function(item) {
    let isclicked = false;
item.addEventListener("click",function(){
    let hexColor = "#";
    for(let i = 0;i < 6 ;i++){
        let random = getRandomNumber();
        hexColor +=hex[random]; 

    }
    item.style.background = hexColor;
    
    if(isclicked == false){
        counter++;
        isclicked = true;
    } 
    if(isclicked == true ){
        
        counter=counter;
    }
    if(counter===16){
        setTimeout(function(){
            alert("Game Over");
        })//setTimeout causes delay for an action

    }
})
function getRandomNumber(){
    let randomNumber = Math.floor(Math.random()*hex.length);
    return randomNumber;

}
//console.log(isclicked);
})