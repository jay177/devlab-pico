const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const results = document.getElementById('results');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'fr-FR';
recognition.continuous = true;

function highlightVerbs(text) {
  const verbs = ['être', 'avoir', 'faire', 'dire', 'aller']; // Ajoutez d'autres verbes au présent si nécessaire
  const words = text.split(' ');
  return words.map(word => {
    if (verbs.includes(word)) {
      return `<span class="verb">${word}</span>`;
    }
    return word;
  }).join(' ');
}

startButton.addEventListener('click', () => {
  recognition.start();
});

stopButton.addEventListener('click', () => {
  recognition.stop();
});

recognition.addEventListener('result', event => {
  const transcript = Array.from(event.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');
  const formattedText = highlightVerbs(transcript);
  results.innerHTML = formattedText;
});
