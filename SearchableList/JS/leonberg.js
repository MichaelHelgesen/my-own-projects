// Samler DOM-elementer for lettere redigering
var DOMstrings = {
    searchBox: "#searchBox input",
	list: ".aktive-liste",
	oppdragsNavn: ".oppdragsnavn",
    reset: ".resetSearch"
};

// Listen som skal søkes i.
var listToSearch = document.querySelector(DOMstrings.list).querySelectorAll(".listitem");

// Tekst som dukker opp hvis resultatet er null
var noResult = document.querySelector(".ingentreff");
noResult.style.display = "none";

// Søkefelt og knapper som utfører søket
var setupEventListeners = function() {

    // Søkeboksen
	document.querySelector(DOMstrings.searchBox).addEventListener("change", filterList);

    // Søkeboksen
	document.querySelector(DOMstrings.searchBox).addEventListener("keyup", filterList);

    // Resetknapp
    document.querySelector(DOMstrings.reset).addEventListener("click", resetList);

    

};

// Function som kjører når man søker i søkefeltet
var filterList = function () {

    var count = listToSearch.length;

    // Henter verdien fra søkefeltet
    var input = document.querySelector(DOMstrings.searchBox).value;

    // Ny RegExp basert på input
    var regex = new RegExp(input, 'gi');

    // Hvor i DOM skal den sammenligne med input
    var textToChange = document.querySelector(DOMstrings.list).querySelector(".oppdragsnavn");

        // Hvis input er mer enn 1
        if (input.length > 0) {

            // Gå gjennom listen
			for (i = 0; i < listToSearch.length; i++ ) {

                // Hvis det er match mellom regexp og innhold...
				if (listToSearch[i].querySelector(".oppdragsnavn").textContent.match(regex)) {

                    // ...så skal DIV vises
					listToSearch[i].style.display = "block";

                    // Matchende tegn markeres med gult
					var response = listToSearch[i].querySelector(".oppdragsnavn").innerText.replace(regex, function(str) {

            			return "<span style='background-color: yellow;'>" + str + "</span>"
        			});

                    // Erstatter innhold i DIV med regExp med gul bakgrunn
        			listToSearch[i].querySelector(".oppdragsnavn").innerHTML = response;

                    // Gjemmer "ingen resultat-knapp"
                    noResult.style.display = "none";

                // Hvis ikke match...
				} else {

                    // ...gjem DIV
					listToSearch[i].style.display = "none";

                    count -= 1;

					//noResult.style.display = "block";
				};

                if (count === 0) {
                    noResult.style.display = "block";
                };
			};

        // Hvis input er 0
		} else {

            // Gå gjennom listen...
			for (i = 0; i < listToSearch.length; i++ ) {

                // ...vis alle
				listToSearch[i].style.display = "block";

                // og fjern span kode med highlight.
				listToSearch[i].querySelector(".oppdragsnavn").innerHTML = listToSearch[i].querySelector(".oppdragsnavn").textContent;

				};

            noResult.style.display = "none";

            count = listToSearch.length;

			};

        };

var resetList = function () {
    document.querySelector(DOMstrings.searchBox).value = "";
    filterList();
};

setupEventListeners();