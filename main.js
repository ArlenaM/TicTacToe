let grid = [];
let rows;
let columns;
let userChoice = prompt("Welcome to Tic Tac Toe! Who will emerge victorious? You must choose: X or O?")
let compChoice = ""

//TODO: userChoice validation
//TODO: write use case for a tie --> keep totalCount
//TODO: Stop computer from choosing new square if user wins
//TODO: Create hard mode
//note: user always goes first

// Make individual boxes and add event listener to each one
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

//generates grid
function makeGrid(rows,columns){
	for(let i = 0; i < rows; i++){
		for(let j = 0; i < (rows*columns); i++)
		makeBox();
	}
}

//function to handle user input 
function displayUserChoice(e){
	e.target.innerText = `${userChoice}`;
	pickSquare();
	didIWin();

//should either start the game again or end it
}

// Generates computer choice of X or O 
function generateCompChoice(){

	if (userChoice === "X" || userChoice === "x"){
		compChoice = "O";
	} else if (userChoice === "O" || userChoice === "o"){
		compChoice = "X"
	}
	return compChoice;
}

// generates a square to pick, checks to see if square is already filled
function pickSquare(){

	let squareToPick = grid[Math.floor(Math.random()*9)];
	let pickedSquare = squareToPick.innerText;

	if (pickedSquare == ""){
		squareToPick.innerText = `${compChoice}`
	} else { 
		pickSquare();
		}
}

let didIWin = function(){
	if (
		(grid[0].innerText == `${userChoice}`)&&(grid[3].innerText== `${userChoice}`)&&(grid[6].innerText== `${userChoice}`) ||
		(grid[1].innerText == `${userChoice}`)&&(grid[4].innerText== `${userChoice}`)&&(grid[7].innerText== `${userChoice}`) ||
		(grid[2].innerText == `${userChoice}`)&&(grid[5].innerText== `${userChoice}`)&&(grid[8].innerText== `${userChoice}`) ||
		(grid[0].innerText == `${userChoice}`)&&(grid[4].innerText== `${userChoice}`)&&(grid[8].innerText== `${userChoice}`) ||
		(grid[2].innerText == `${userChoice}`)&&(grid[4].innerText== `${userChoice}`)&&(grid[6].innerText== `${userChoice}`) ||
		(grid[0].innerText == `${userChoice}`)&&(grid[1].innerText== `${userChoice}`)&&(grid[2].innerText== `${userChoice}`) ||
		(grid[3].innerText == `${userChoice}`)&&(grid[4].innerText== `${userChoice}`)&&(grid[5].innerText== `${userChoice}`) ||
		(grid[6].innerText == `${userChoice}`)&&(grid[7].innerText== `${userChoice}`)&&(grid[8].innerText== `${userChoice}`)
		)
		{
		return alert("You won the game!")
	} else if (
		(grid[0].innerText == `${compChoice}`)&&(grid[3].innerText== `${compChoice}`)&&(grid[6].innerText== `${compChoice}`) ||
		(grid[1].innerText == `${compChoice}`)&&(grid[4].innerText== `${compChoice}`)&&(grid[7].innerText== `${compChoice}`) ||
		(grid[2].innerText == `${compChoice}`)&&(grid[5].innerText== `${compChoice}`)&&(grid[8].innerText== `${compChoice}`) ||
		(grid[0].innerText == `${compChoice}`)&&(grid[4].innerText== `${compChoice}`)&&(grid[8].innerText== `${compChoice}`) ||
		(grid[2].innerText == `${compChoice}`)&&(grid[4].innerText== `${compChoice}`)&&(grid[6].innerText== `${compChoice}`) ||
		(grid[0].innerText == `${compChoice}`)&&(grid[1].innerText== `${compChoice}`)&&(grid[2].innerText== `${compChoice}`) ||
		(grid[3].innerText == `${compChoice}`)&&(grid[4].innerText== `${compChoice}`)&&(grid[5].innerText== `${compChoice}`) ||
		(grid[6].innerText == `${compChoice}`)&&(grid[7].innerText== `${compChoice}`)&&(grid[8].innerText== `${compChoice}`) 
		)
		{
		return alert("The computer won. You lost the game. :(")
	}
}

let playGame = function(){
	makeGrid(3,3);
	generateCompChoice();
}

playGame();