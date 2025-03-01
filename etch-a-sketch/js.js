// elements
const display = document.getElementById("display");
const btnRainbow = document.getElementById("rainbow");
const btnReset = document.getElementById("reset");
const slider = document.getElementById("slider");
const readout = document.getElementById("sliderReadout");


// control behavior
// rainbow button
let rainbowMode = false;

btnRainbow.addEventListener( "click", () => {
	if ( rainbowMode == false ) {
		rainbowMode = true;
	} else {
		rainbowMode = false;
	};
	console.log( "rainbow " + rainbowMode );
});

// reset button
btnReset.addEventListener( "click", () => {
	console.log("reset");
	clearGrid();
	createGrid();
});

// slider readout
readout.textContent = slider.value;
slider.oninput = function () {
	readout.textContent = this.value;

	// reset display when slider changes
	clearGrid();
	createGrid();
};


// display functions
// createGrid() - create a grid of divs in display
const createGrid = function() {
	// display is hard-coded to be 400x700 pixels. In order to have square cells,
	// need to make more cells left-to-right than slider value
	const gridResolutionVertical = slider.value; // vertical resolution same as slider
	const cellSize = 400 / gridResolutionVertical; // determine cell size
	const gridResolutionHorizontal = Math.round( slider.value * ( 7 / 4 ) ); // set horizontal resolution in proportion to the screen ratio
	console.log( gridResolutionVertical + "x" + gridResolutionHorizontal );

	// create vertical rows
	for ( let i = 0; i < gridResolutionVertical; i++ ) {
		const row = document.createElement("div");
		//row.id = "row" + i;
		row.className = 'row';
		row.style.height = `${cellSize}px`;
		display.appendChild(row);

		// create horizontal columns
		for ( let j = 0; j < gridResolutionHorizontal; j++ ) {
			const cell = document.createElement("div");
			cell.id = i + " " +j;
			cell.className = "cell";
			cell.style.width = `${cellSize}px`;
			cell.style.height = `${cellSize}px`;
			row.appendChild(cell);

			cell.addEventListener( "mouseover", () => {
				if ( rainbowMode ) {
					let randomColor = Math.floor( Math.random() * 16777215 ).toString(16);
					cell.style.backgroundColor = `#${randomColor}`;
				} else {
					cell.style.backgroundColor = "black";
				};
			});
		};
	};
};

// clear grid
const clearGrid = function() {
	// while there are rows, delete rows
	while ( display.firstChild ) {
		display.removeChild( display.firstChild );
	};
};


// create grid when page loads
createGrid();
