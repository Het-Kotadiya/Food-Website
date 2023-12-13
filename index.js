let tagLine = document.querySelector('.tagline');
let logInForm = document.querySelector('.login-form');
let logInBtn = document.getElementById('login');
let signUpBtn = document.getElementById('signup');
let signUpForm = document.querySelector('.signup-form')
let rotatingText = document.querySelector('.rotating-text')

let quotes = ['Hungry?', 'Cooking Gone Wrong?', 'Game Night?', 'Unexpected Guests?', 'Movie Night?']

logInBtn.addEventListener('click', () => {
    tagLine.style.display = 'block';
    logInForm.style.display = 'block'
    signUpForm.style.display = 'none';
});


signUpBtn.addEventListener('click', () => {
    tagLine.style.display = 'none';
    signUpForm.style.display = 'block';
    logInForm.style.display = 'none'
});


let currentQuoteIndex = 0;
function rotateQuotes() {
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    rotatingText.textContent = quotes[currentQuoteIndex];
}

// Set an initial quote
rotateQuotes();

// Change quote every 2 seconds
setInterval(rotateQuotes, 1600);