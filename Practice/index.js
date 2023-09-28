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

document.getElementById("button2").onclick = function () {
    const subscribeChecked = document.getElementById('subCheckBox')
    if(subscribeChecked.checked){
        console.log("You are subscribed")
    }else{
        console.log("please subscribe");
    }

}
const subscribeChecked = document.getElementById('subCheckBox')

let students = ["sujitraj","tulasi","navuluru"]
// students.forEach(capital)
students.forEach(print)
// function capital (element,index,array) {
//     console.log(element)
//     array[index] = element[0].toUpperCase() + element.substring(1)

// }
console.log(students[0])
function print(element){
    console.log(element)
}

const car = {
    model : "Mustang",
    color : "red",
    year :2023,
    print : function () {
        console.log("Hello",this.model)
    }
}
console.log(car.color)
car.print()

class Player{
    score = 0;

    pause() {
        console.log("pause")
    }
    exit() {
        console.log("exit")
    }
}
const player1 = new Player();
console.log(player1.score());

