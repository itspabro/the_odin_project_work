// variables
let signs = ["r", "p", "s"];
let tools = ["rock", "paper", "scissors"];
let winComputer = 0
let winUser = 0

// introduction
console.log("Rock Paper Scissors");
console.log("Best of three wins...");
console.log("");

// loop the games three times
for ( let i = 0; i < 3; i++ ) {
	// computer chooses sign
	let signComputer = Math.floor( Math.random() * 3 );

	// prompt user for their sign
	let userInput = prompt("Shoot!");
	let signUser = signs.indexOf(userInput.charAt(0).toLowerCase());

	// the above comes back as -1 if not a valid result
	// while loop until get an acceptable input
	while ( signUser < 0 ) {
		userInput = prompt("What was that? Try again!");
		signUser = signs.indexOf(userInput.charAt(0).toLowerCase());
	}

	// subtract computer from user sign to determine winner
	// -2 or 1 equals user win; 0 equals draw; any other result equals computer win (2, -1)
	let signResult = signUser - signComputer

	// announce round result
		// win
	if ( ( signResult === -2 ) || ( signResult === 1 ) ) {
		console.log( "Well done, " + userInput + " wins" )
		console.log( tools[signUser] + " beats " + tools[signComputer] )
		winUser++ // increment user wins
	
		// draw, no increment
	} else if ( signResult === 0 ) {
		console.log( "Hmm, " + userInput + " draws" )
		console.log( "We both chose " + tools[signUser] )

		// lose
	} else {
		console.log( "Hah, " + userInput + " loses" )
		console.log( tools[signComputer] + " beats " + tools[signUser] )
		winComputer++ // increment computer wins
	}

	console.log("")
};

// announce set result
console.log( winUser + " to " + winComputer )
if ( winUser > winComputer ) {
	console.log( "You WIN!" )
} else if ( winUser === winComputer ) {
	console.log( "We DRAW!" )
} else {
	console.log( "You LOSE!" )
}
