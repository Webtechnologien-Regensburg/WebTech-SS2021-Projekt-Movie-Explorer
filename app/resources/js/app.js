/* Hier ist der Client-seitige Einstiegspunkt Ihrer Anwendung*/

import FetchHelper from "./http/FetchHelper.js";
import MovieGraph from "./graph/MovieGraph.js";

const API_URL = "http://localhost:8080/";

function init() {
    console.log("Movie Explorer Client started.");

    // Test-Aufruf für Server-Client-Verbindung, bitte vor Abgabe entfernen!
    var data = { text: "Hello World" };
    FetchHelper.makePostRequest(API_URL + "test", data, function(result) {
        console.log(result);
    });

    // Test des Graphen (mit vis.js)
    FetchHelper.makeGetRequest("data/sample.json", function(result) { // Herunterladen der Beispieldaten (Genres, Filme und Schauspieler*innen)
        let myGraph = new MovieGraph(result), // Erstellen des Objekts, das den Graphen verwalten soll
            el = document.querySelector(".movie-graph"); // Referenzieren des HTML-Elements, in dem der Graph angezeigt werden soll
        myGraph.setOnGenreSelectedListener(onGraphElementSelected); // Setzen eines Klick-Listeners, mit dem das MovieGraph-Objekt über Interaktionen mit dem Graphen informiert
        myGraph.setOnMovieSelectedListener(onGraphElementSelected);
        myGraph.setOnActorSelectedListener(onGraphElementSelected);
        myGraph.render(el); // Rendern des Graphen im UI
    });
}

function onGraphElementSelected(node) {
    console.log("in: onGraphElementSelected");
    console.log(node);
}

init();