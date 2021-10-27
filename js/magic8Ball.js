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




 function changeContent() {
    document.getElementById('tryAgain').textContent = phrases[Math.floor(Math.random() * 14)];
    document.getElementById('tryAgain').style.cssText =
        'color:white;width:4.7em;text-align:center;margin-top:-10px;';
}

