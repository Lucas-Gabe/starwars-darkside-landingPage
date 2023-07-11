const person = document.querySelectorAll('.card');
const arrowAdvance = document.getElementById('arrow-forward');
const arrowBack = document.getElementById('arrow-back');
let currentPeople = 0;

let playSound = () => new Audio("").play()

let play = () => {
    let audio = document.getElementById("audio");
    audio.play();
}

let hideImage = () => {
    person.forEach(Image => {
        Image.classList.remove('selected')
    });
}

let showImage = () => {person[currentPeople].classList.add('selected')};

arrowAdvance.addEventListener('click', function(){
    if (currentPeople === person.length - 1) {
        window.alert("Último Sith. Veja os anteriores!");
        return;
    }
    currentPeople++;

    hideImage();
    showImage();
    play();
})

arrowBack.addEventListener('click', function(){
    if (currentPeople === 0) {
        play();
        window.alert("Primeiro Sith. Veja os próximos!");
        return;
    }

    currentPeople--;

    hideImage();
    showImage();
});




