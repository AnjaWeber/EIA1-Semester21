// click listener anlegen, sobald die Seite geladen wurde
window.addEventListener("load", addClickListenersDrumpad);

// funktion spielt Ton von der gegebenen Sound-Quelle ab
// soundQuelle ist der Pfad zur Sound-Datei, die abgespielt werden soll
function play(soundQuelle: string): void {
    // HTMLAudioElement erzeugen
    var sound: HTMLAudioElement = new Audio(soundQuelle);
    // Ton abspielen
    sound.play();
}

// Funktion fügt den Buttons ihre Click listener hinzu
function addClickListenersDrumpad(): void {
    // Click listener für die einzelnen Töne:
    document.querySelector("#button1").addEventListener("click", function (): void { soundClick("assets/A.mp3"); });
    document.querySelector("#button2").addEventListener("click", function (): void { soundClick("assets/C.mp3"); });
    document.querySelector("#button3").addEventListener("click", function (): void { soundClick("assets/F.mp3"); });
    document.querySelector("#button4").addEventListener("click", function (): void { soundClick("assets/G.mp3"); });
    document.querySelector("#button5").addEventListener("click", function (): void { soundClick("assets/hihat.mp3"); });
    document.querySelector("#button6").addEventListener("click", function (): void { soundClick("assets/laugh-1.mp3"); });
    document.querySelector("#button7").addEventListener("click", function (): void { soundClick("assets/laugh-2.mp3"); });
    document.querySelector("#button8").addEventListener("click", function (): void { soundClick("assets/snare.mp3"); });
    document.querySelector("#button9").addEventListener("click", function (): void { soundClick("assets/kick.mp3"); });
    // Click listener für den Play-Button
    document.querySelector(".play").addEventListener("click", function (): void { playClick(); });
    // Click listener für den Shuffle-Button
    document.querySelector(".shuffle").addEventListener("click", function (): void { remix(); });
    // Click listener für den Delete-Button
    document.querySelector(".delete").addEventListener("click", function (): void { beatLoeschen(); });
    // Click listener für den Record-Button
    document.querySelector(".record").addEventListener("click", function (): void { recordClick(); });
}

// Liste mit den Beat-Tönen, die abgespiel werden wenn der Beat abgespielt wird
var toeneBeat: string[] = ["assets/kick.mp3", "assets/snare.mp3", "assets/hihat.mp3"];

// Liste mit allen verfügbaren Tönen
var alleToene: string[] = ["assets/hihat.mp3", "assets/kick.mp3", "assets/snare.mp3", "assets/F.mp3", "assets/G.mp3", "assets/A.mp3", "assets/C.mp3", "assets/laugh-1.mp3", "assets/laugh-2.mp3", "assets/leer.mp3"];

// Indikator ob der beat aktuell abgespielt wird oder nicht
var playing: boolean = false;

// Indikator ob der Aufnahmemodus aktiv ist
var aufnahmeAktiv: boolean = false;

// Variable in die die Interval-ID abgelegt wird, wenn der Beat abgespielt wird
var intervalId: number;

//Funktion die ausgeführt wird, wenn einer der Sound-Buttons geklickt wird
// soundQuelle ist der Pfad zur Sound-Datei, die abgespielt werden soll
function soundClick(soundQuelle: string): void {
    // ton abspielen
    play(soundQuelle);

    // prüfen ob Aufnahmemodus aktiv ist
    if (aufnahmeAktiv) {
        // wenn Aufnamemodus aktiv ist, wird der abgespielte Ton der Beat-Ton-Liste hinzugefügt
        toeneBeat.push(soundQuelle);
    }
}

//Funktion die ausgeführt wird, wenn Stop Button geklickt wird
function playClick(): void {
    // Prüfen ob der Beat aktuell abgespielt wird
    if (playing === false) {
        // wenn beat nicht abgespielt wird, wird der Beat gestartet und aus dem Play-Button wird ein Stop-Button gemacht...
        // Funktion aufrufen, die das macht:
        startBeat();
    } else {
        // Wenn der beat abgespielt wird, wird dieser gestoppt und aus dem Stop-Button ein Play-Button gemacht...
        // Funktion aufrufen, die das macht:
        stopBeat();
    }
}

// Abspielen des Beats starten und aus Play-Button einen Stop-Button machen
function startBeat(): void {
    // Aufnahmemodus beenden, wenn dieser aktiv sein sollte
    if (aufnahmeAktiv === true) {
        stopAufnahme();
    }

    // Indikator, dass der Beat abgespielt wird, wird auf "true" gesetzt
    playing = true;

    // Zähler um die Einträge in der Beat-Ton-Liste  einzeln durchzugehen
    var zaehler: number = 0;

    // Interval anlegen damit alle 500ms ein Ton aus der Liste abgespielt wird
    intervalId = setInterval(function (): void {
        // Ton aus der Ton-Liste an aktueller Zähler-Position abspielen
        play(toeneBeat[zaehler]);
        // zaehler hochzaehlen damit beim nächsten Durchlauf der nächste Ton aus der Liste abgespielt wird
        zaehler = zaehler + 1;
        // prüfen ob Zähler gleich der Länge der Ton-Liste ist
        if (zaehler === toeneBeat.length) {
            // Zähler auf 0 zurücksetzen, wenn der Wert des Zählers gleich der Länge des Arrays ist, damit die Ton-Liste wieder von vorne abgespielt wird
            zaehler = 0;
        }
    },                       500);

    // aus play button stop button machen
    // fa-play Klasse entfernen
    document.querySelector(".play i").classList.remove("fa-play");
    // fa-stop Klasse hinzufügen
    document.querySelector(".play i").classList.add("fa-stop");
}

// Abspielen des Beats stoppen und aus Stop-Button einen Play-Button machen
function stopBeat(): void {
    //aus stop button einen play button machen:
    //fa-play klasse hinzufügen
    document.querySelector(".play i").classList.add("fa-play");
    //fa-stop klasse entfernen
    document.querySelector(".play i").classList.remove("fa-stop");

    // musik stoppen
    //Intervall/Wiedergabe stoppen
    clearInterval(intervalId);

    // Indikator, dass der Beat abgespielt wird, wird auf "false" gesetzt
    playing = false;
}

//Remix erstellen
function remix(): void {
    //Liste der Töne zurücksetzen
    toeneBeat = [];
    var i: number = 0;
    // Anzahl an zufälligen Tönen in der Liste:
    var toeneTotal: number = 3;
    while (i < toeneTotal) {
        //zufälliger Ton auswählen
        var item: string = alleToene[Math.floor(Math.random() * alleToene.length)];
        //Ton zu Beat hinzufügen
        toeneBeat.push(item);
        i = i + 1;
    }
}

//Beat löschen
function beatLoeschen(): void {
    //Als Boat-Töne-Liste wird ein leeres Array gesetzt.
    toeneBeat = [];
}

function recordClick(): void {
    // prüfen ob aufnahmemodus aktiv ist
    if (aufnahmeAktiv === true) {
        // wenn aufnahmemodus aktiv ist, wird dieser gestoppt
        stopAufnahme();
    } else {
        // Wenn Aufnahmemodus nicht aktiv, wird dieser gestartet
        startAufnahme();
    }
}

//Aufnahmemodus starten
function startAufnahme(): void {
    //alter Beat löschen
    beatLoeschen();
    // wenn beat aktuell abgespielt wird, wird dieser gestoppt.
    if (playing === true) {
        stopBeat();
    }

    // Indikator ob Aufname aktiv ist auf "true" setzen.
    aufnahmeAktiv = true;

    // Record-Button rot einfärben indem die "record-active" Klasse hinzugefügt wird
    document.querySelector(".record i").classList.add("record-active");
}

// Aufanhmemodus stoppen
function stopAufnahme(): void {
    // Indikator ob Aufnahme aktiv ist auf "false" setzen.
    aufnahmeAktiv = false;

    // Rote Färbung vom Record-Button entfernen, indem die "record-active" Klasse entfernt wird
    document.querySelector(".record i").classList.remove("record-active");
}