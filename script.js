const COLLECTION = document.querySelectorAll(".piano-key");
const PIANO = document.getElementById("piano");
const BUTTON = document.getElementById("btn");

const startSound = (event) => {
    if (event.target.classList.contains('piano-key')) {
        event.target.classList.add("piano-key-active");
    }
    playAudio(event);
}

const stopSound = (event) => {
    event.target.classList.remove("piano-key-active");
}

function playAudio(event) {
    if (event.target.classList.contains('piano-key')) {
        event.target.classList.add("piano-key-active");
    }
    const audio = new Audio();
    // if (event.target.contains('piano-key')) {
    const note = event.target.dataset.note;
    const src = `assets/audio/${note}.mp3`;
    audio.src = src;
    audio.currentTime = 0;
    audio.play();
}




function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.piano-key[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    console.log(e.keyCode);
    console.log(document.querySelector(`.piano-key[data-key="${e.keyCode}"]`));
    // elem.target.classList.add("piano-key-active");
}


function playNotes() {
    COLLECTION.forEach((elem) => {
        if (elem.target.contains("piano-key-active")) {
            playAudio();
        }
    })
}

const startCorrespondOver = (event) => {
    console.log(event);

    if (event.target.classList.contains("piano-key")) {
        event.target.classList.add("piano-key-active");
    }
    COLLECTION.forEach((elem) => {
        elem.addEventListener("mouseover", startSound)
        elem.addEventListener("mouseout", stopSound)

    });
}

const stopCorrespondOver = () => {
    COLLECTION.forEach((elem) => {
        elem.classList.remove("piano-key-active");

        elem.removeEventListener("mouseover", startSound);
        elem.removeEventListener("mouseout", stopSound);
    });
}
// document.addEventListener("click", startSound);


PIANO.addEventListener('mousedown', startCorrespondOver, false);
document.addEventListener('mouseup', stopCorrespondOver);
document.addEventListener('keydown', playSound);