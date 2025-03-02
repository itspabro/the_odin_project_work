// variables
let numA = 0;
let numB = 0;
let numC = 0;
let operationQueue = "none";
let displayValue = 0;
let displayReset = false;


// elements
const output = document.getElementById("output");
const btnAC = document.getElementById("btnAC");
const btnPlusMinus = document.getElementById("btnPlusMinus");
const btnPercent = document.getElementById("btnPercent");
const btnDivide = document.getElementById("btnDivide");
const btnSeven = document.getElementById("btnSeven");
const btnEight = document.getElementById("btnEight");
const btnNine = document.getElementById("btnNine");
const btnMultiply = document.getElementById("btnMultiply");
const btnFour = document.getElementById("btnFour");
const btnFive = document.getElementById("btnFive");
const btnSix = document.getElementById("btnSix");
const btnSubtract = document.getElementById("btnSubtract");
const btnOne = document.getElementById("btnOne");
const btnTwo = document.getElementById("btnTwo");
const btnThree = document.getElementById("btnThree");
const btnAdd = document.getElementById("btnAdd");
const btnZero = document.getElementById("btnZero");
const btnDecimal = document.getElementById("btnDecimal");
const btnEqual = document.getElementById("btnEqual");


// functions

// refresh display by updating "output"
const displayRefresh = function() {
	if ( displayValue > 999999999 ) {
		valueToDisplay = displayValue.toExponential(4);
	} else {
		valueToDisplay = displayValue;
	};
	display.textContent = valueToDisplay;
};

// append digit to output
const displayAppend = function( digit ) {
	// reset display if appending to zero
	if ( ( displayValue === 0 ) || ( displayReset ) ) {
		displayValue = digit;
		displayReset = false;
	// only append if less than 9 digits displayed
	} else if ( displayValue.toString().length < 9 ) {
		displayValue = `${displayValue}` + `${digit}`;
	};

	// refresh display and log operation
	displayRefresh();
	console.log( "displayAppend " + digit + " " + displayValue );
};

// reset calculator to starting state
const resetCalculator = function() {
	numA = 0;
	numB = 0;
	numC = 0;
	operationQueue = "none";
	displayValue = 0;

	// update display and log operation
	displayRefresh();
	console.log("resetCalculator");
};

// calculation addition
const calcAdd = function( numA, numB ) {
	numC = +numA + +numB; // add + before variables to force math addition
	console.log( "calcAdd " + numA + " + " + numB + " = " + numC );
	return numC;
};
calcAdd( 1, 2 );

// calculation subtraction
const calcSubtract = function( numA, numB ) {
	numC = numA - numB;
	console.log( "calcSub " + numA + " - " + numB + " = " + numC );
	return numC;
}
calcSubtract( 2, 1 );

// calculation multiplication
const calcMultiply = function( numA, numB ) {
	numC = numA * numB;
	console.log( "calcMul " + numA + " * " + numB + " = " + numC );
	return numC;
}
calcMultiply( 2, 8 );

// calculation division
const calcDivide = function( numA, numB ) {
	numC = numA / numB;
	//deal with long numbers by just chopping them off
	if ( numC.toString().length > 9 ) {
		numC = parseFloat( numC.toString().slice( 0, 10 ) );
	};
	console.log( "calcDiv " + numA + " / " + numB + " = " + numC );
	return numC;
}
calcDivide( 1, 3 );

// calculation plus or minus
const calcPlusMinus = function( numA ) {
	if ( numA > 0 ) {
		numC = numA - ( numA * 2 );
	} else if ( numA < 0 ) {
		numC = numA - ( numA * 2 ); // JS doesn't negative * negative = positive
	};
	console.log( "calcPoM " + numA + " = " + numC );
	return numC;
};
calcPlusMinus( -2 );

// calculation equals
const calcEquals = function( operator, numA, numB ) {
	switch ( operator ) {
		case "add":
			return calcAdd( numA, numB );
		case "subtract":
			return calcSubtract( numA, numB );
		case "multiply":
			return calcMultiply( numA, numB );
		case "divide":
			return calcDivide( numA, numB );
		case "none":
			return numA; // just return the number that should be on the display
	};
};

// function button plus minus
const funcPlusMinus = function() {
	displayValue = calcPlusMinus( displayValue );
	displayRefresh();
};

// function button percent
const funcPercent = function() {
	// get a percent
	displayValue = calcDivide( displayValue, 100 );
	// numA is set by funcAdd/funcDivide
	// set displayValue to the percent value of numA before passing to funcEqual
	if ( ( operationQueue === "add" ) ||  ( operationQueue === "subtract" ) ) {
		displayValue = calcMultiply( numA, displayValue );
	};
	// automatically pass to funcEqual because that's how percent button works
	funcEqual();
};

// since most function buttons run the same code, we place it in a function
const setNumA = function() {
	displayReset = true;

	// if func button is pressed and there's already an operation queued, trigger
	// funcEqual to act on the result, otherwise it'll calculate against wrong num
	if ( !( operationQueue === "none" ) ) {
		funcEqual();
	};

	numA = displayValue;
};

// function button divide
const funcDivide = function() {
	setNumA();
	// queue the next operation
	operationQueue = "divide";
	console.log( "funcDiv " + numA + " " + operationQueue );
};

// function button multiply
const funcMultiply = function() {
	setNumA();
	// queue the next operation
	operationQueue = "multiply";
	console.log( "funcMul " + numA + " " + operationQueue );
};

// function button subtract
const funcSubtract = function() {
	setNumA();
	// queue the next operation
	operationQueue = "subtract";
	console.log( "funcSub " + numA + " " + operationQueue );
};

// function button addition
const funcAdd = function() {
	setNumA();
	// queue the next operation
	operationQueue = "add";
	console.log( "funcAdd " + numA + " " + operationQueue );
};

// function button equal
const funcEqual = function() {
	displayReset = true;
	numB = displayValue;
	numC = numA;
	numA = calcEquals( operationQueue, numA, numB );
	displayValue = numA;
	console.log( "funcEqual " + numC + " " + operationQueue + " " + numB + " " + displayValue );
	operationQueue = "none";
	displayRefresh();
};


// button behaviors
// AC
btnAC.addEventListener( "click", () => { // all clear
	resetCalculator();
});

// PlusMinus
btnPlusMinus.addEventListener( "click", () => {
	funcPlusMinus();
});

// Percent
btnPercent.addEventListener( "click", () => {
	funcPercent();
});

// Divide
btnDivide.addEventListener( "click", () => {
	funcDivide();
});

// Multiply
btnMultiply.addEventListener( "click", () => {
	funcMultiply();
});

// Subtract
btnSubtract.addEventListener( "click", () => {
	funcSubtract();
});

// Add
btnAdd.addEventListener( "click", () => {
	funcAdd();
});

// Equal
btnEqual.addEventListener( "click", () => {
	funcEqual();
});

// Decimal
btnDecimal.addEventListener( "click", () => {
	displayAppend(`.`);
});

// Zero
btnZero.addEventListener( "click", () => {
	displayAppend(0);
});

// One
btnOne.addEventListener( "click", () => {
	displayAppend(1);
});

// Two
btnTwo.addEventListener( "click", () => {
	displayAppend(2);
});

// Three
btnThree.addEventListener( "click", () => {
	displayAppend(3);
});

// Four
btnFour.addEventListener( "click", () => {
	displayAppend(4);
});

// Five
btnFive.addEventListener( "click", () => {
	displayAppend(5);
});

// Six
btnSix.addEventListener( "click", () => {
	displayAppend(6);
});

// Seven
btnSeven.addEventListener( "click", () => {
	displayAppend(7);
});

// Eight
btnEight.addEventListener( "click", () => {
	displayAppend(8);
});

// Nine
btnNine.addEventListener( "click", () => {
	displayAppend(9);
});
