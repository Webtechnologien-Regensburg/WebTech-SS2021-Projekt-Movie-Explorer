import FetchHelper from "../http/FetchHelper.js";

/**
 * Diese Optionen werden beim Erstellen des Graphen verwendet, um dessen Aussehen und Verhalten zu gestalten. 
 * All das kann über weitere Parameter vielfältig angepasst werden. Eine Übersicht über die 
 * Konfigurationsmöglichkeiten der Graphen finden Sie hier: https://visjs.github.io/vis-network/docs/network/
 */
const DEFAULT_OPTIONS = {
    nodes: { // Standard-Design aller Knoten
        shape: "dot",
        size: 20,
        font: {
            size: 15,
            color: "#ffffff",
        },
        borderWidth: 2,
    },
    edges: { // Standard-Design aller Kanten
        width: 2,
        color: "#ffffff",
        font: {
            face: "Space Grotesk",
        },
    },
    groups: { // Spezifisches Design für verschiedene Gruppen (siehe sample.json)
        genre: {
            color: {
                background: "#ffc857ff",
                border: "#fafafa",
                highlight: {
                    border: '#ffffff',
                    background: '#ffc857ff'
                },
            },
            size: 40,
        },
        movie: {
            color: {
                background: "#db3a34ff",
                border: "#fafafa",
                highlight: {
                    border: '#ffffff',
                    background: '#ffc857ff'
                },
            },
            size: 20,
        },
        actor: {
            color: {
                background: "#177e89ff",
                border: "#fafafa",
                highlight: {
                    border: '#ffffff',
                    background: '#ffc857ff'
                },
            },
        }
    },
};

/**
 * Über diese Klasse wird ein einzelner Graph verwaltet. Dem Konstruktor wird ein Javascript-Objekt mit den
 * darzustellenden Daten übergeben. Zusätzlich kann auch ein Objekt mit Optionen für die Darstellung und
 * das Verhalten des Graphen übergeben werden. Falls kein solches Objekt übergeben wird, werden die 
 * Default-Optionen (siehe oben) verwendet.
 */
class MovieGraph {

    constructor(data, options) {
        this.data = {
            nodes: data.nodes,
            edges: data.edges
        };
        this.options = options || DEFAULT_OPTIONS;
    }

    // Methode zum Setzen eines Listeners (Callback) der aufgerufen werden soll, wenn Genre im Graphen ausgewählt werden
    setOnGenreSelectedListener(callback) {
        this.onGenreSelected = callback;
    }

    // Methode zum Setzen eines Listeners (Callback) der aufgerufen werden soll, wenn Filme im Graphen ausgewählt werden
    setOnMovieSelectedListener(callback) {
        this.onMovieSelectedListener = callback;
    }

    // Methode zum Setzen eines Listeners (Callback) der aufgerufen werden soll, wenn Schauspieler*innen im Graphen ausgewählt werden
    setOnActorSelectedListener(callback) {
        this.onActorSelectedListener = callback;
    }

    /**
     * Diese Methode rendert den Graphen in einem HTML-Element, das als Parameter an die Methode übergeben wird.
     */
    render(el) {
        /**
         * In der Callback-Methode des Click-Events verweist this auf die Graphendarstellung, nicht mehr auf unser
         * MovieGraph-Objekt. Damit wir innerhalb des Callbacks trotzdem darauf zugreifen können, speichern wir 
         * uns die ursprüngliche this-Referenz in dieser lokalen Variable.
         */
        let that = this;
        this.network = new vis.Network(el, this.data, this.options);
        // Wir setzten eine Klick-Listener auf den Graphen, um darüber informiert zu werden, wenn die Nutzer*innen einzelne Elemente auswählen 
        this.network.on("click", function(params) {
            let clickedNodeIndex = this.getNodeAt(params.pointer.DOM),
                node = that.data.nodes[clickedNodeIndex]; // Die Daten (aus sample.json) werden im Konstruktor des MovieGraph-Objektes (hier "that") in der Eigenschaft data gespeichert
            // Je nach Typ des angeklickten Elements rufen wir eine andere der gesetzten Callback-Methoden (siehe "setOn..."-Methoden) auf und informieren so andere Stellen der App über den Event
            switch (node.group) {
                case "genre":
                    that.onGenreSelected(node);
                    break;
                case "movie":
                    that.onMovieSelectedListener(node);
                    break;
                case "actor":
                    that.onActorSelectedListener(node);
                    break;
                default:
                    break;
            }
        });
    }

}

export default MovieGraph;