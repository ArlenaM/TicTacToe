let grid = [];
let rows;
let columns;
let userChoice = prompt("Welcome to Tic Tac Toe! Who will emerge victorious? You must choose: X or O?")

// Get user input

//userChoice validation


// Make individual box and add event listener to each one
function makeBox(){
		let box = document.createElement("div");

		document.body.appendChild(box);
		box.classList.add("box");
		grid.push(box);

		for (let i = 0; i < grid.length; i++){
			grid[i].id ="box"+ i;
			grid[i].addEventListener("click", displayUserChoice);

	}
}

//make function to generate boxes
function makeGrid(rows,columns){
	for(let i = 0; i < rows; i++){
		for(let j = 0; i < (rows*columns); i++)
		makeBox();
	}
}

//function to handle user input -- make user input pretty!
function displayUserChoice(e){
	e.target.innerText = `${userChoice}`;

}


// Generate computer output --, generate a square to pick, check to see if square is already filled
function generateCompChoice(){
	let compChoice = ""

	if (userChoice === "X"){
		compChoice = "O";
	} else if (userChoice === "O"){
		compChoice = "X"
	}
	return compChoice;
}

function pickSquare(){

	let squareToPick = box.Math.floor(Math.random()*9)
	squareToPick.innerText = `{$compChoice}`; 
}




// Did someone win function --
// let didIWin = function(){
// 	if ()
// }

makeGrid(3,3);
generateCompChoice();



