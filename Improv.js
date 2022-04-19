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
        console.log(key);
        let keyPlace = document.getElementById("keyPlace");
        let fullKey = key.concat(" ", mode);
        keyPlace.innerHTML = (fullKey);
        chooseTempo();
        chooseTimeSignature();
        chooseChordProgression();
        //code goes here
    }
    function chooseKey(){
        console.log("chooseKey called");
        // var number = Math.floor(Math.random() * 12);
        const keys = new Array("A", "Bb", "B", "C", "C#", "D", "Eb", "E", "F", "F#", "G", "Ab");
        var number = Math.floor(Math.random() * keys.length);
        console.log(number);
        let key = keys[number];
        
        // if(number == 0){
        //     var key = "A";
        // }
        // if(number == 1){
        //     var key = "Bb";
        // }
        // if(number == 2){
        //     var key = "B";
        // }
        // if(number == 3){
        //     var key = "C";
        // }
        // if(number == 4){
        //     var key = "C#";
        // }
        // if(number == 5){
        //     var key = "D";
        // }
        // if(number == 6){
        //     var key = "Eb";
        // }
        // if(number == 7){
        //     var key = "E";
        // }
        // if(number == 8){
        //     var key = "F";
        // }
        // if(number == 9){
        //     var key = "F#";
        // }
        // if(number == 10){
        //     var key = "G";
        // }
        // if(number == 11){
        //     var key = "Ab";
        // }
        return key;
    }
    function chooseMode(){
        console.log("chooseMode called");
        var number = Math.floor(Math.random() * 2);
        console.log("mode: " + number);
        if(number == 0){
            var mode = "major";
        }
        if(number == 1){
            var mode = "minor";
        }
        return mode;
    }
    function chooseTempo(){
        console.log("chooseTempo called");
        //code goes here
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