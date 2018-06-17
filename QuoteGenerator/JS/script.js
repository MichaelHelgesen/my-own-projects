// -----------------------  switch controller module ------------------------- //

var quoteController = (function() {

	// The variable to hold the quote.
	var quote;

	// The variable to hold the source.
	var source;

	// The function that generates a random number and fetch a quote from the switch
	function getRandomQuote() {
		
		// Get random number
		function getRandomInt(max) {
		  
		  return Math.floor(Math.random() * Math.floor(max));

		};

		// Set the max for random number
		var randomNumber = getRandomInt(2) + 1;

		// Switch which contains the quotes and sources.
		// Object would be better, but I wanted to practice switch. 
		switch (randomNumber) {

			case 1:
				quote = "Hello";
				source = "Person 1"
				break;
			
			case 2:
				quote = "Goodbye";
				source = "Person 2"
				break;
			
			default:
				quote = "Welcome to random quote generator";
				source = "No one"
		}
	};

	// Return functions for use in other modules.
	return {

		// Creates a random quote
		quoteGenerator: function()  {
			
			return getRandomQuote();

		},

		// Returns the "quote" variable
		quote: function() {

			return quote;

		},

		// Returns the "source" variable
		source: function() {

			return source;

		}

	};

})();




// ----------------------- UI controller module -----------------------//

var UIcontroller = (function() {

	// Collect all the HTML elements for easy management.
	var DOMstrings = {
		quoteField: "#quote",
		quoteSourceField: "#source",
		quoteButton: ".randomQuote"
	};

	// Return functions for use in other modules.
	return {

		// Return the DOM strings. 
		getDOMstrings: function() {

			return DOMstrings;

		}

	}

})();


// ---------------------- App controller module ----------------- //



var controller = (function(quoteController, UIcontroller) {

	var DOM = UIcontroller.getDOMstrings();

	var randQuote = document.querySelector(DOM.quoteField);

	var quoteSource = document.querySelector(DOM.quoteSourceField);

	// Define and add event to buttons
	var setupEventListeners = function() {

		// Define the category selector.
		document.querySelector(DOM.quoteButton).addEventListener("click", changeQuote);
			
	};

	// Function that is called when pressing the "random quote" button.
	var changeQuote = function() {

		// Generate a random quote
		quoteController.quoteGenerator();

		// Display the quote in DOM
		randQuote.textContent = quoteController.quote();

		// Display the source in DOM
		quoteSource.textContent = quoteController.source();

	};


	return {
	init: function() {
		
		console.log("Application has started");

		quoteController.quoteGenerator();

		quoteController.quote();

		setupEventListeners();

		}
	};


})(quoteController, UIcontroller);

controller.init();