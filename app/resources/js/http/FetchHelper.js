// Hilfsklasse zum Durchführen von HTTP-Anfragen über die Fetch-API
class FetchHelper {
    /**
     * Führt eine HTTP-Anfrage aus und übergibt die Serverantwort als Parameter an die übergebene Callback-Methode.
     *
     * Parameter:
     *   url: Ziel der Anfrage
     *   options: Options-Objekt mit Spezifikationen der HTTP-Anfrage (Methode, Inhalt, ...)
     *   callback: Methode, der nach erfolgreicher Anfrage die Antwort des Servers übergeben werden soll
     *
     * Beispiel:
     *   options = {
     *      method: "PUT",
     *      body: JSON.stringify(JsonData),
     *      headers: { "Content-Type": "application/json" }
     *   };
     *
     *   FetchHelper.makeRequest(API_URL, options, function(result) {
     *      console.log(result); // Ausgabe der vom Server erhaltenen Antwort
     *   });
     */
    static async makeRequest(url, options, callback) {
        let response, result;

        response = await fetch(url, options);
        result = await response.json();
        callback(result);
    }
}

export default FetchHelper;
