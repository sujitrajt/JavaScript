let count = 0;
document.getElementById("decrement").onclick = function(){
    count -= 1 ;
    document.getElementById("count").innerHTML = count;
}
document.getElementById("reset").onclick = function(){
    count = 0 ;
    document.getElementById("count").innerHTML = count;

    
}
document.getElementById("increment").onclick = function(){
    count += 1 ;
    document.getElementById("count").innerHTML = count;

}