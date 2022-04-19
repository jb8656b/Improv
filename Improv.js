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
        if (mode == "major"){
            var modeNumber = 0;
        }
        if (mode == "minor"){
            var modeNumber = 1;
        }
        let tempo = chooseTempo();
        let timeSignature = chooseTimeSignature();
        let chordProgression = chooseChordProgression(modeNumber);

        console.log(key);
        let keyPlace = document.getElementById("keyPlace");
        let tempoPlace = document.getElementById("tempoPlace");
        let timeSignaturePlace = document.getElementById("timeSignaturePlace");

        let fullKey = key.concat(" ", mode);

        keyPlace.innerHTML = (fullKey);
        tempoPlace.innerHTML = (tempo + " BPM");
        timeSignaturePlace.innerHTML = (timeSignature);
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
        const possibleTop = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9);
        const possibleBottom = new Array(1, 2, 4, 8, 16);
        let top = possibleTop[(Math.floor(Math.random() * possibleTop.length))];
        let bottom = possibleBottom[(Math.floor(Math.random() * possibleBottom.length))];
        var timeSignature = (top.toString()).concat("/", (bottom.toString()));
        return timeSignature;
    }
    function chooseChord(mode){
        //mode = 0 is major
        //mode = 1 is minor
        const majorChords = new Array("I", "ii", "iii", "IV", "V", "vi", "vii°");
        const minorChords = new Array("i", "ii°", "III", "iv", "V", "VI", "VII");
        var chord = "I";
        if (mode == 0){
            var chord = majorChords[(Math.floor(Math.random() * majorChords.length))];
        }
        if (mode == 1){
            var chord = minorChords[(Math.floor(Math.random() * minorChords.length))];
        }
        return chord;
    }
    function chooseChordProgression(mode){
        console.log("chooseChordProgression called");
        console.log(chooseChord(mode));
        //mode = 0 is major
        //mode = 1 is minor

        //code goes here
    }
})();