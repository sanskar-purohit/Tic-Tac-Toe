let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#rest");
let newGamebtn = document.querySelector("#new-game");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //player X and player O

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
//for reset button
const resetGame = () =>{
    turnO = true;
    enableBtn();
    msgContainer.classList.add("hide");
    
}

boxes.forEach((box) => {
  box.addEventListener("click", () => {
   // console.log("box was click");
    if (turnO) {
      //player O
      box.innerText = "O";
      turnO = false;
    } else {
      //player X
      box.innerText = "x";
      turnO = true;
    }
    //dobara value change na ho  isliye disabled lgaya he .innerText
    box.disabled = true;
    checkWinner();
  });
});
//for stop the game to disable the btns
const disableBtn = () =>{
    for ( let box of boxes){
        box.disabled = true;
    }
}
//for restart the game to enable the btns
const enableBtn = () =>{
    for ( let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
//winner ko dikhane  ke
const showWinner = (winner) =>{
    msg.innerText = `Congratulations , Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBtn();
}
const checkWinner = () => {
  for (let pattern of winPatterns) {
   
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;
    if(pos1Val != "" && pos2Val !="" && pos3Val !=""){
        if(pos1Val === pos2Val && pos2Val === pos3Val){
           //console.log("winner",pos1Val);
            showWinner(pos1Val);
        }
    }
  }
};
newGamebtn.addEventListener('click',resetGame);
reset.addEventListener('click',resetGame);



