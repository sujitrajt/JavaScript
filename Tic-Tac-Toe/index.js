const cells = document.querySelectorAll(".cell")
const statusText = document.querySelector("#Status")
const restartBtn = document.querySelector("#resetBtn")
const winCond = [
    [0,1,3],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
let options = ["","","","","","","","",""];
let currentPlayer = "X";
let running = false;

initializeGame();
function initializeGame(){
    cells.forEach(cell => cell.addEventListener("click",cellClicked))
    restartBtn.addEventListener("click",restartGame)
    statusText.textContent = `${currentPlayer}'s turn`
    running = true
}
function cellClicked() {
    const cellIndex = this.getAttribute("cellIndex")
    if(options[cellIndex] != "" || !running){
        return 
    }
    updateCell(this,cellIndex);
    console.log("options",options)
    checkWinner();
}
function updateCell(cell,index){
    options[index] = currentPlayer;
    cell.textContent = currentPlayer
}
function changePlayer() {
    currentPlayer = (currentPlayer == "X") ? "O" : "X";
    statusText.textContent = `${currentPlayer}'s turn`
}
function restartGame(){
    currentPlayer = "X";
    options = ["","","","","","","","",""];
    statusText.textContent = `${currentPlayer}'s Turn` ; 
    cells.forEach(cell => cell.textContent ="")
    running = true;
}
function checkWinner() {
    let roundWon = false;
    for (let i = 0 ; i < winCond.length ; i++) {
        const condition = winCond[i];
        // console.log(condition[0])
        const cellA = options[condition[0]]
        const cellB = options[condition[1]]
        const cellC = options[condition[2]]
        console.log(cellA)
        // console.log(cellB)
        // console.log(cellC)
        if(cellA == "" && cellB == "" && cellC == "") {
            continue;
        }
        if(cellA == cellB && cellB == cellC ) {
            roundWon = true;
            break;
        }
    }
        
        if(roundWon){
            running = false;
            statusText.textContent = `${currentPlayer} is the winner ! Congragulations`;

        }
        else if (!options.includes("")){
            statusText.textContent = "The Game is Drawn";
            running = false;
        }
        else {
            changePlayer();
        }
}
