
let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".resetButton");
let newGamebtn = document.querySelector(".new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let score = document.querySelector(".score");
let x =0,o=0,count =0;
const patterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let draw = ()=>{
    count =0;
    msg.innerText ="here is a draw ";
    resetGame();
}
let enableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
    })
}
let resetGame = () => {
    count =0;
    console.log("started again(RESET) ");
    enableBoxes();
    msgcontainer.classList.add("hide");
    start =0

}
let start =0;
newGamebtn.addEventListener("click", () => {
    resetGame();
})

reset.addEventListener("click",resetGame);
let user = "x";
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        count++;
        console.log(`user ${user} has clicked ! `);
        if (user === 'x') {
            box.innerText = "x";
            user = "o"
        }
        else {
            box.innerText = "o";
            user = "x";
        }
        box.disabled = true;
        start =1;
        checkwinner();
        if(count==9){
            draw();
        }
    })

});
let showwinner = (winner) => {
    console.log(`congratulations the winner is ${winner}`);
    msgcontainer.classList.remove("hide");
    msg.innerText = winner + ' won the game';
    score.innerText = 'score: X = ' +x +' '+' O = '+o;
    boxes.forEach((box) => {
        box.disabled = true;
    })

}
const checkwinner = () => {
    for (let pattern of patterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if (pos1 != '' && pos2 != '' && pos3 != '') {
            if (pos1 === pos2 && pos2 === pos3) {
                console.log(`${pos1}  winner`);
                alert(`${pos1}  winner`);
                (pos1==='x')?x++:o++;
                showwinner(pos1);
            }
        }
    }
}