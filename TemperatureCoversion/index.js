document.getElementById("submitButton").onclick = function(){
    let temp = document.getElementById("text1").value;
    if(document.getElementById("cbutton").checked){
        let celcius = toCelcius(temp);
        console.log(celcius);
        document.getElementById("tempLabel").innerHTML = "Temperature in Celius is " + celcius + "°C"
    }
    else if(document.getElementById("fbutton").checked){
        let farenheit = toFarenheit(temp);
        console.log(farenheit);
        document.getElementById("tempLabel").innerHTML = "Temperature in Farenheit is " + farenheit + "°F"
    }else{
        document.getElementById("tempLabel").innerHTML = "Select a Unit";
    }
}



function toCelcius(temp){
    return (temp - 32 ) * (5/9);
}
function toFarenheit(temp){
    return temp * 9/5 +32;
}