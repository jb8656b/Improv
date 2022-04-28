(function(){
    "use strict";
    window.addEventListener("load", init);
    function init(){

        createParameters();

        const images = new Array("rhythm0.jpg", "rhythm1.jpg", "rhythm2.jpg", "rhythm3.jpg", "rhythm4.jpg");

        //Slider code

        var slider = document.getElementById("myRange");
        var output = document.getElementById("sliderNumber");
        output.innerHTML = slider.value; // Display the default slider value

        // Update the current slider value (each time you drag the slider handle)

        var sliderValue = 30;

        var imageChangeButton = document.createElement("button");
        imageChangeButton.innerHTML = "Set Image Change Interval. \n (Currently " 
        + sliderValue + " seconds)";
        imageChangeButton.setAttribute("id", "imageChangeButton");
        imageChangeButton.addEventListener("click", function(){
            // clearInterval(myInterval);
            autoChangeImage(images, sliderValue);
            console.log("Image change speed changed to " + sliderValue);
            imageChangeButton.innerHTML = "Set Image Change Interval. \n (Currently " 
            + sliderValue + " seconds)";
        });
        var buttonContainer2 = document.getElementById("buttonContainer2");
        buttonContainer2.setAttribute("class", "center");
        buttonContainer2.appendChild(imageChangeButton);


        slider.oninput = function() {
            // imageChangeButton.onclick = autoChangeImage(images, sliderValue);
            output.innerHTML = this.value;
            sliderValue = this.value;
            // setTimeout(sliderValue);
            console.log(this.value);
            // createParameters();
        }        
        let resetButton = document.createElement("button");
        resetButton.innerHTML = "Reset";
        resetButton.setAttribute("id", "resetButton");
        resetButton.setAttribute("class", "center");
        let mainContainer = document.getElementById("mainContainer");
        let buttonContainer = document.getElementById("buttonContainer");
        // mainContainer.appendChild(resetButton);
        buttonContainer.appendChild(resetButton);
        resetButton.addEventListener("click", createParameters);

      }
    function logToConsole(){
        console.log("poop");
    }
    function createParameters(){
        console.log("createParameters called");
        let key = chooseKey();
        let mode = chooseMode();
        //Hopefully, this is the only bit of spaghetti code in here
        if (mode == "major"){
            var modeNumber = 0;
        }
        if (mode == "minor"){
            var modeNumber = 1;
        }
        let tempo = chooseTempo(90, 140);
        let timeSignature = chooseTimeSignature();
        let chordProgression = chooseChordProgression(modeNumber, 4);

        console.log(key);
        let keyPlace = document.getElementById("keyPlace");
        let tempoPlace = document.getElementById("tempoPlace");
        let timeSignaturePlace = document.getElementById("timeSignaturePlace");
        let chordProgressionPlace = document.getElementById("chordProgressionPlace");

        let fullKey = key.concat(" ", mode);

        keyPlace.innerHTML = (fullKey);
        tempoPlace.innerHTML = (tempo + " BPM");
        timeSignaturePlace.innerHTML = (timeSignature);
        chordProgressionPlace.innerHTML = (chordProgression.join(", "));
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
        //Adding other modes requires changes elsewhere in the code
        //due to proper spaghetti code
        console.log("chooseMode called");
        const modes = new Array("major", "minor");
        var number = Math.floor(Math.random() * modes.length);
        let mode = modes[number];
        return mode;
    }
    function chooseTempo(lowestBPM, highestBPM){
        console.log("chooseTempo called");
        // let lowestBPM = 90;
        // let highestBPM = 140;
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

        // "\xB0" is a properly rendered degree sign
        const majorChords = new Array("I", "ii", "iii", "IV", "V", "vi", "vii\xB0");
        const minorChords = new Array("i", "ii\xB0", "III", "iv", "V", "VI", "VII");
        var chord = "I";
        if (mode == 0){
            var chord = majorChords[(Math.floor(Math.random() * majorChords.length))];
        }
        if (mode == 1){
            var chord = minorChords[(Math.floor(Math.random() * minorChords.length))];
        }
        return chord;
    }
    function chooseChordProgression(mode, numberOfChords){
        //mode = 0 is major
        //mode = 1 is minor
        console.log("chooseChordProgression called");
        console.log(chooseChord(mode));
        // var numberOfChords = 4;
        const chordProgression = new Array();
        for (let i = 0; i < numberOfChords; i++){
            chordProgression.push(chooseChord(mode));
        }
        console.log("Chord Progression Array is: " + chordProgression);
        return chordProgression;
    }
    function autoChangeImage(images, interval){
        // if(myInterval == true){
        //     clearInterval(myInterval);
        //     console.log("cleared interval");
        // }
        var myInterval = window.setInterval(function(){
            console.log("Image Changed");
            var i = Math.floor(Math.random() * images.length);
            document.getElementById('image').src=images[i];
            console.log("image " + i + " selected");
            i++;
        }, (interval * 1000));
        let imageChangeButton = document.getElementById("imageChangeButton");
        imageChangeButton.addEventListener("click", function(){
            clearInterval(myInterval);
            console.log("Interval should be cleared");
        })
    }
})();