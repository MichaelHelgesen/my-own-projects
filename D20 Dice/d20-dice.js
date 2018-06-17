//Terningen starter med å vise et ikon eller et tegn eller lignende

//Trykke på "roll"
// Add event handler

	//Det genereres et tilfeldig tall mellom 1-20
		//Tallet vises over terningen i DOM.
		// Add the number to the UI
		//Forrige "roll" lagres, hvis eksisterer.
			//Forrige "roll" vises i DOM
			// Add last number to DOM

	//Trykker man på "-" eller "+" økes eller minskes tallet deretter.
	// Add event handler
		//Tallet over terningen oppdateres deretter.
		//Add the number to the UI
		//Er tallet èn, blir "-" borte eller svakere for å indikere at man ikke kan minke ytterligere.
		//Er tallet tyve blir "+" borte eller svakere for å indikere at ikke man kan øke ytterligere
	
//Trykke på "reset"
	//Tallet over terningen settes tilbake til utgangspunktet.
//Forrige "roll" forsvinner



////////////////////////// DICE CONTROLLER MODULE ///////////////////////////////

// Anonymous function, wich is immediately called
// or invoked because of the "()" operator on the end.
// Called "ifis" 
var diceController = (function() {


	var data = {
			diceNum: 0,
			lastNum: 0
	};


	// Function that gets a random number between 1 and "max" 
	// parameter
	var getRandomInt = function(max) {
		
		return Math.floor(Math.random() * Math.floor(max) + 1);

	};

	/*var plussDice = function() {
		if (data.diceNum > 0) {
			data.diceNum + 1;
		}
	}*/


	// These objects (methodes) are what gets assigned
	// to the diceController variable after
	// the function returns. This works thanks
	// to closures. 
	return {
		
		rollDice: function() {
			
			// Store the last number
			data.lastNum = data.diceNum;


			// Get a new random number between 1 - 20
			data.diceNum = (getRandomInt(20));
		},


		getNumbers: function() {
			return {
				dice: data.diceNum,
				lastDice: data.lastNum
			};
		},

		adjustDiceUp: function () {
			if (data.diceNum < 20 ) {
				data.diceNum = data.diceNum + 1;
			};
		},

		adjustDiceDown: function () {
			if (data.diceNum > 1 ) {
				data.diceNum = data.diceNum - 1;
			};
		},

		reset: function() {
			data.diceNum = 0;
			data.lastNum = 0;
			console.log(data);
		},




		testing: function() {
			console.log(data);
		},
		
	}

})();



/////////////////////////// UI CONTROLLER MODULE ////////////////////////////////

var UIController = (function() {

	// A central place to store HTML-classes. Makes it easier
	// to change later.
	var DOMstrings = {
		diceRoll: ".roll__btn",
		increaseDice: ".incr__btn",
		decreaseDice: ".decr__btn",
		diceNumber: ".diceNumber",
		lastNumber: ".lastnumber",
		reset: ".reset__btn"
	};


	return {


		// We rmake the  private DOMstrings public by returning the
		// object 
		getDOMstrings: function() {
			return DOMstrings;
		},


		// Add number to DOM
		displayDice: function(obj) {
			var element = document.getElementById("lastnumber");
			var up = document.getElementById("up");
			var down = document.getElementById("down");

			if (obj.dice === 0) {
				document.querySelector(DOMstrings.diceNumber).textContent = "0";
			} else {
				document.querySelector(DOMstrings.diceNumber).textContent = obj.dice;
			};
			
			
			if (obj.lastDice > 0) {
				document.querySelector(DOMstrings.lastNumber).textContent = obj.lastDice;
				element.classList.remove("hidden");
			} else {
				element.classList.add("hidden");
			}

			if (obj.dice <= 1) {
				down.classList.add("disable");
			} else {
				down.classList.remove("disable");
			};

			if (obj.dice === 20) {
				up.classList.add("disable");
			} else {
				up.classList.remove("disable");
			};

			
		}

	};

})();
	





/////////////////////// GLOBAL APP CONTROLLER MODULE ////////////////////////////

// Pass the other two modules as arguments to the 
// controller, so that this controller knows about
// the other two modules and can connect them.
var controller = (function(diceCtrl, UICtrl) {

	var setupEventListeners = function() {

		var DOM = UIController.getDOMstrings();

		//Set up event listener for when somebody click the
		// "random" button.
		document.querySelector(DOM.diceRoll).addEventListener("mousedown", ctrlAddNumber);

		// The increment button
		document.querySelector(DOM.increaseDice).addEventListener("mousedown", adjNumber);

		// The decrease button
		document.querySelector(DOM.decreaseDice).addEventListener("mousedown" , adjNumberDown);

		// The reset button
		document.querySelector(DOM.reset).addEventListener("mousedown" , restart);


		// Happens anywhere in the document, so no querySelector
		document.addEventListener("keypress", function(event) {

			if (event.keyCode === 32 || event.wich === 32) {
				 
				ctrlAddNumber();


			};

		});

	};

	var updateDice = function() {
		// New dicenumber
		diceController.rollDice();
		// Return the number
		var dice = diceController.getNumbers();
		// Display the number on the UI
		UIController.displayDice(dice);
	};

	var restart = function() {
		diceController.reset();
		var d = diceController.getNumbers();
		UIController.displayDice(d);
	}


	// To keep up with the "dry" principle, what happens when 
	// pressing a key and clicking the button is stored here and
	// passed to the event handlers
	var ctrlAddNumber = function() {

		// Store last number in a variable

		// 1. Get a new random number between 1 - 20
		updateDice();

		// 2. Store new number in a variable

		// 3. Display the random number in UI
		

		// 4. Display last number in UI

		diceController.testing();

	};






	var incDice = function() {
		diceController.adjustDiceUp();
		var d = diceController.getNumbers();
		UIController.displayDice(d);

		
		

	};

		
	var incDiceDown = function() {
		diceController.adjustDiceDown();
		var dice = diceController.getNumbers();
		UIController.displayDice(dice);
		

	};





	var adjNumber = function() {
			incDice();
			diceController.testing();		
	};

	var adjNumberDown = function() {
		
		incDiceDown();
		diceController.testing();
	};






	// Public initialization function. To make functions
	// public. 
	return {
		init: function() {
			console.log("Application has started");
			setupEventListeners();
			restart();
			//updateDice();
		}
	};


	// Get random number
	// Adjust random number
	// Reset number

// Pass arguments into the (ifi) function
})(diceController, UIController);


// Run the init function
controller.init();
var testing = document.querySelector(".roll__btn").value;
console.log(testing + "hello");