const lettersDiv = document.querySelector('#lettersDiv')
const wordsDiv = document.querySelector('#wordsDiv')
const button = document.querySelector('.form__button')

let currentLetter = [];
let = currentWords = [];
let = wordsCounts = {};
let letterCounts = {};



button.addEventListener('click', function() {
    
    // Contador de letras
    let typedText = document.getElementById("textInput").value;
    
    typedText = typedText.toLowerCase();
    typedText = typedText.replace(/[^a-z'\s]+/g, "");

    for (let i = 0; i < typedText.length; i++) {
        currentLetter = typedText[i];

        if (letterCounts[currentLetter] === undefined) {
            letterCounts[currentLetter] = 1;
        }

        else {
            letterCounts[currentLetter]++;
        }
    }

    for (let letter in letterCounts) {
        const span = document.createElement('span');
        const textCountent = `"${letter}": ${letterCounts[letter]}, `;
        span.innerText = textCountent;
        const letters = document.getElementById('lettersDiv');
        letters.appendChild(span);
    }

    // Contador de palavras
    
    textWords = typedText.split(/\s/);

    for (let j = 0; j < textWords.length; j++) {
        currentWords = textWords[j]

        if (wordsCounts[currentWords] === undefined) {
            wordsCounts[currentWords] = 1
        }

        else {
            wordsCounts[currentWords]++;
        }
    }

    for (let word in wordsCounts) {
        const span = document.createElement('span');
        const textCountentWords = `"${word}": ${wordsCounts[word]}, `;
        span.innerText = textCountentWords;
        const words = document.getElementById('wordsDiv');
        words.appendChild(span)
    }
    
})