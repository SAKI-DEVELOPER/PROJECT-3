let dice = document.querySelector(".dice");
let list = document.getElementById("list");
let button = document.querySelector("button");
let title = document.querySelector("h1");


let face = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

let randomTurn = () => {
    return Math.floor(Math.random() * 6);
}

let randomFace = () => {
    
    return face[randomTurn()];
}

let rollAnimation = () => {
    setTimeout(() =>{
        dice.classList.add("roll-animation");
        setTimeout(() => {
         dice.classList.remove("roll-animation");   
        },1000);
    }, 100);
}
let rollCount = [];

button.addEventListener("click", () => {
    
    if(rollCount.length < 100){
    let rollHistory = [];
    dice.innerHTML = randomFace();
    rollHistory.push(dice.innerHTML);
    rollCount.push(dice.innerHTML);
    for(let i = 0; i < rollHistory.length; i++){
            let div1 = document.createElement("div");
            let div2 = document.createElement("div");
            let historyContainer = document.createElement("div");
                historyContainer.classList.add("listChild");
                div1.classList.add("historyDice");
                div2.classList.add("rollCount");
                div1.innerHTML = `${rollHistory[i]}`;
                div2.innerHTML = `Roll:${rollCount.length}`;
                list.appendChild(historyContainer);
                historyContainer.appendChild(div2);
                historyContainer.appendChild(div1);
            
        }
    }else{
        button.textContent = `Refresh`;
        title.textContent = `You hit the limit please refresh the page`;
        console.log("You hit the limit please Refresh the page");
        
    }
    

    
});

