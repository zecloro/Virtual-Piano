document.addEventListener("keydown", function (event){
    if (event.code == "KeyA") {
        let audio = new Audio ("Audio/A.mp3");
        audio.play();
    } else if(event.code == "KeyS") {
        let audio = new Audio ("Audio/S.mp3");
        audio.play();
    } else if(event.code == "KeyD") {
        let audio = new Audio ("Audio/D.mp3");
        audio.play();
    } else if(event.code == "KeyF") {
        let audio = new Audio ("Audio/F.mp3");
        audio.play();
    } else if(event.code == "KeyG") {
        let audio = new Audio ("Audio/G.mp3");
        audio.play();
    } else if(event.code == "KeyH") {
        let audio = new Audio ("Audio/H.mp3");
        audio.play();
    } else if(event.code == "KeyJ") {
        let audio = new Audio ("Audio/J.mp3");
        audio.play();
    } else if(event.code == "KeyW") {
        let audio = new Audio("Audio/W.mp3");
        audio.play();
    } else if(event.code == "KeyE") {
        let audio = new Audio("Audio/E.mp3");
        audio.play();
    } else if(event.code == "KeyT") {
        let audio = new Audio("Audio/T.mp3");
        audio.play();
    } else if(event.code == "KeyY") {
        let audio = new Audio("Audio/Y.mp3");
        audio.play();
    } else if(event.code == "KeyU") {
        let audio = new Audio("Audio/U.mp3");
        audio.play();
    } else {
        console.log("Warning!");
    }
});