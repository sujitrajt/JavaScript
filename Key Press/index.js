const element = document.getElementById("myDiv");
let x = 0;
let y = 0;
window.addEventListener("keydown",(event) => {
    // console.log(event)
    switch(event.key){
        case "ArrowDown":
            y+=5;
            element.style.top = y + "px";
            break;
        case "ArrowUp":
            y-=5;
            element.style.top = y + "px";
            break;
        case "ArrowRight":
            x+=5;
            element.style.left= x + "px";
            break;
        case "ArrowLeft":
            x-=5;
            element.style.left = x + "px";
            break;
        default:
            break;

    }
})
setCookie("email","sujitraj",365)
setCookie("email","a.@gmail.com",365)

console.log(document.cookie);

function setCookie(name,value,expiration){
    const date = new Date();
    date.setTime(date.getTime() + (expiration *24 *60 *60 *1000))
    let expire = "expires="+date.toUTCString();
    document.cookie =`${name} = ${value}; ${expire}; path =/`
}
function deleteCookie(name){
    setCookie(name,null,null)
}
