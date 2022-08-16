let i =0
while(i<8){
    let j = Math.floor(Math.random()*74+48);
    i++;
    if(j <48 || j>57 && j<65 || j>90 && j< 97){
        i--;
        continue;}
    
    let x = String.fromCharCode(j);
    document.write(x);
}