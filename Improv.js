(function(){
    "use strict";
    window.addEventListener("load", init);
    function init(){
        console.log("test");
        console.log("this is a sentence");
        createParameters();
      }
    function createParameters(){
        console.log("createParameters called");
        let key = chooseKey();
        let mode = chooseMode();
        let tempo = chooseTempo();

        console.log(key);
        let keyPlace = document.getElementById("keyPlace");
        let tempoPlace = document.getElementById("tempoPlace");

        let fullKey = key.concat(" ", mode);

        keyPlace.innerHTML = (fullKey);
        tempoPlace.innerHTML = (tempo + " BPM");
        chooseTimeSignature();
        chooseChordProgression();
        //code goes here
    }
    function chooseKey(){
        console.log("chooseKey called");
        const keys = new Array("A", "Bb", "B", "C", "C#", "D", "Eb", "E", "F", "F#", "G", "Ab");
        var number = Math.floor(Math.random() * keys.length);
        console.log(number);
        let key = keys[number];
        return key;
    }
    function chooseMode(){
        console.log("chooseMode called");
        const modes = new Array("major", "minor");
        var number = Math.floor(Math.random() * modes.length);
        let mode = modes[number];
        return mode;
    }
    function chooseTempo(){
        console.log("chooseTempo called");
        let lowestBPM = 90;
        let highestBPM = 140;
        let difference = highestBPM - lowestBPM;
        var tempo = Math.floor(Math.random() * difference) + lowestBPM;
        return tempo;
    }
    function chooseTimeSignature(){
        console.log("chooseTimeSignature called");
        //code goes here
    }
    function chooseChordProgression(){
        console.log("chooseChordProgression called");
        //code goes here
    }
})();