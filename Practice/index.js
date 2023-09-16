console.log("Hello World");
// Variable 3 types (var,let, const)
// let UserName = "Sujitraj Thirumurthy";
// console.log("Hello World",UserName);
// let userName = window.prompt("Enter the username");
// console.log("your name is ",userName)
let userName;
document.getElementById("button1").onclick = function() {
    userName = document.getElementById("nameText").value;
    console.log(userName)
    document.getElementById("welcome").innerHTML = "Hello world "+ userName;
}
  