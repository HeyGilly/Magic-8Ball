const phrases = [
    "That sounds like a plan",
    "Well I'm not sure",
    "Maybe not",
    "Maybe so",
    "Computer says no",
    "Nope",
    "Oh no you didnt.",
    " Let your hair down",
    "Paint the town red.",
    "You are a rock!",
    "Throw in the towel.",
    "YOLO",
    "Not on your life",
    "Good guys always win",
];

const randomPhrases = document.getElementById('tryAgain');

 function changeContent() {
     randomPhrases.textContent = phrases[Math.floor(Math.random() * 14)];
     randomPhrases.style.cssText =
        'color:white;width:4.7em;text-align:center;margin-top:-25px;opacity:1;';
 }

function fadeOutEffect() {
     changeContent()
     var fadeEffect = setInterval(function () {
        if (!randomPhrases.style.opacity) {
            randomPhrases.style.opacity = 1;
        }
        if (randomPhrases.style.opacity >= 0) {
            randomPhrases.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect);
        }
    }, 300);
}
document.getElementById("questionButton").addEventListener('click', fadeOutEffect);






