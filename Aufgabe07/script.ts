window.addEventListener("load", addClickListenersDrumPad)

function playSample(soundQuelle: string) {

    var sound: HTMLAudioElement = new Audio(soundQuelle);
    sound.play();
}

function addClickListenersDrumPad() {
    document.querySelector("#button1").addEventListener('click', function () { playSample("assets/A.mp3"); });
    document.querySelector("#button2").addEventListener('click', function () { playSample("assets/C.mp3"); });
    document.querySelector("#button3").addEventListener('click', function () { playSample("assets/F.mp3"); });
    document.querySelector("#button4").addEventListener('click', function () { playSample("assets/G.mp3"); });
    document.querySelector("#button5").addEventListener('click', function () { playSample("assets/hihat.mp3"); });
    document.querySelector("#button6").addEventListener('click', function () { playSample("assets/laugh-1.mp3"); });
    document.querySelector("#button7").addEventListener('click', function () { playSample("assets/laugh-2.mp3"); });
    document.querySelector("#button8").addEventListener('click', function () { playSample("assets/snare.mp3"); });
    document.querySelector("#button9").addEventListener('click', function () { playSample("assets/kick.mp3"); });
    document.querySelector(".play").addEventListener('click', function () { playBeat() })
}
var toeneBeat: string[] = ['assets/kick.mp3', 'assets/snare.mp3', 'assets/hihat.mp3'];

function playBeat() {
    toeneBeat
    var zaehler: number=0
    

    setInterval(function () {
        playSample(toeneBeat[zaehler]);
        zaehler =  zaehler + 1;
        if (zaehler===3) {
            zaehler = 0; 
        }
        // Anweisungen
    }, 500);


}
