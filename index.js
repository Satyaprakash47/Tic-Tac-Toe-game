let boxes =  document.querySelectorAll('.box');
let rstbtn = document.querySelector('.rst-btn');
let winner = document.querySelector('#win');
let newGamebtn = document.querySelector('#new-btn');
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');

let turnX = true;
const winPattern=[
   [0,1,2],
   [0,3,6],
   [0,4,8],
   [1,4,7],
   [2,5,8],
   [2,4,6],
   [3,4,5],
   [6,7,8]
];
const resetGame = () =>{
   let turnX = true;
   enabledBtns();
   msgContainer.classList.add('hide');
}
//add click event to each box
boxes.forEach((box) => {
   box.addEventListener('click', ()=>{
      if (turnX){
         box.innerText = "X";
         turnX = false;
      }
      else{
         box.innerText = "O"
         turnX=true;
      }
      box.disabled = true;
      checkWinner();
   });

});
const disabledBtns = () =>{
   for(let box of boxes){
      box.disabled = true;
   }
}
const enabledBtns = () =>{
   for(let box of boxes){
      box.disabled = false;
      box.innerText = "";
   }
}
const showWinner = (winner) =>{
   msg.innerText = `Congratulations , Winner is ${winner}`;
   msgContainer.classList.remove("hide");
   disabledBtns();
}
const checkWinner = () =>{
   for(let pattern of  winPattern){
      let posVal1 = boxes[pattern[0]].innerText;
      let posVal2 = boxes[pattern[1]].innerText;
      let posVal3 = boxes[pattern[2]].innerText;
      
      if(posVal1 != "" && posVal2 != "" && posVal3 != ""){
         if(posVal1 === posVal2 && posVal2 === posVal3){
            showWinner(posVal1);
         }
      }
   }
}
