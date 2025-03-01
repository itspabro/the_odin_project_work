// variables
signs = ["🪨", "📃", "✂️"];
symbols = ["❓", "🤔", "❌", "✅", "🟰"];
let signPlayer = symbols[0];
let signComputer = symbols[0];
let contentScoreTitle = "SCORE";
let contentResultLine = symbols[1];
let scorePlayer = 0;
let scoreComputer = 0;
let scoreResult = "LOSE";
let roundNumber = 0;


// board and elements
// the board
const board = document.querySelector("#board");

// score card
const scoreCard = document.querySelector("#scoreCard");
const scoreTitle = document.querySelector("#scoreTitle");
const scoreLine = document.querySelector("#scoreLine");

// round card
const roundCard = document.querySelector("#roundCard");
const roundTitle = document.querySelector("#roundTitle");
const signLine = document.querySelector("#signLine");
const resultLine = document.querySelector("#resultLine");

// sign card and buttons
const signCard = document.querySelector("#signCard");
const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");

// system card and button
const systemCard = document.querySelector("#systemCard");
const resetButton = document.querySelector("#reset");


// functions

// set start state
const gameStart = function() {
	resetButton.textContent = "Start";
	scoreCard.style.display = "none";
	roundCard.style.display = "none";
	signCard.style.display = "none";
};

// refresh board
const gameRefresh = function(noReset = false) {
	// refresh card information
	scoreTitle.textContent = contentScoreTitle;
	scoreLine.textContent = scorePlayer + " -- " + scoreComputer;
	roundTitle.textContent = "ROUND " + roundNumber;
	signLine.textContent = signPlayer + " -- " + signComputer;
	resultLine.textContent = contentResultLine;

	// set normal board settings if noReset is false
	if ( !noReset ) {
		resetButton.textContent = "Reset";
		scoreCard.style.display = "flex";
		roundCard.style.display = "flex";
		signCard.style.display = "flex";
	}
};

// reset game state
const gameReset = function() {
	// set starting state
	signPlayer = symbols[0];
	signComputer = symbols[0];
	contentScoreTitle = "SCORE"
	contentResultLine = symbols[1];
	scorePlayer = 0;
	scoreComputer = 0;
	roundNumber = 0;
	
	// refresh board
	gameRefresh();
};

// set game finish state
const gameFinish = function() {
	// set board finished state
	resetButton.textContent = "Play Again?";
	systemCard.style.display = "flex";
	roundCard.style.display = "none";
	signCard.style.display = "none";

	// announce result
	contentScoreTitle = "🎆🎉🥳 You " + scoreResult + " 🥳🎉🎆";
	gameRefresh(true); // use noReset parameter to keep cards from getting
						  // displayed
};

// get computer sign
const shootComputer = function() {
	return Math.floor( Math.random() * 3 );
};

// game play function, triggered by sign button
const shootPlayer = function( selectionPlayer, selectionComputer ) {
	// remove buttons
	signCard.style.display = "none";

	// set played signs
	signPlayer = signs[selectionPlayer];
	signComputer = signs[selectionComputer];

	// calculate the result:
	// -2 or 1 = player win
	// 0 = draw
	// any other result = computer win
	let roundResult = selectionPlayer - selectionComputer;

	if ( ( roundResult === -2 ) || (roundResult === 1 ) ) {
		winPlayer();
	} else if ( roundResult === 0 ) {
		winDraw();
	} else {
		winComputer();
	};
};

// player wins round
const winPlayer = function() {
	scorePlayer++;
	contentScoreTitle = "🎉 SCORE 🎉";
	contentResultLine = symbols[3];
	gameResult();
};

// player draws round
const winDraw = function() {
	contentScoreTitle = "🤔 SCORE 🤔";
	contentResultLine = symbols[4];
	gameResult();
};

// player loses round
const winComputer = function() {
	scoreComputer++;
	contentScoreTitle = "🤣 SCORE 🤣";
	contentResultLine = symbols[2];
	gameResult();
};

// delay function for gameResult()
//const delay = ms => new Promise(res => setTimeout(res, ms));
//async function delay(ms) {
//	await new Promise(resolve => setTimeout(resolve, ms));
//	console.log("delay");
//}
function delay(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
};

// display round result and determine next step
const gameResult = async function() {
	roundNumber++;
	
	if ( roundNumber === 5 ) {
		// at the end of the fifth round, determine score result
		if ( scorePlayer > scoreComputer ) {
			scoreResult = "WIN";
		} else if ( scorePlayer < scoreComputer ) {
			scoreResult = "LOSE";
		} else {
			scoreResult = "DREW";
		};

		// hide reset button for the wait period
		systemCard.style.display = "none";

		gameRefresh(true); // so sign card doesn't get displayed
		// wait two seconds before finishing the game
		await delay(2000);

		// finish the game
		gameFinish();
	} else {
		// if not the end of the fifth round, continue the game
		gameRefresh();
	};
};


// button events
// reset button
resetButton.addEventListener( "click", () => {
	gameReset();
});

// rock button
btnRock.addEventListener( "click", () => {
	shootPlayer( 0, shootComputer() );
});

// paper button
btnPaper.addEventListener( "click", () => {
	shootPlayer( 1, shootComputer() );
});

// scissors button
btnScissors.addEventListener( "click", ()=> {
	shootPlayer( 2, shootComputer() );
});


// finally, start the game
gameStart();
