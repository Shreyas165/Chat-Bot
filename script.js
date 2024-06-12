document.addEventListener('DOMContentLoaded', function () {
    const startBtn = document.getElementById('start-btn');
    const resultTextarea = document.getElementById('result');

    
    if (!('webkitSpeechRecognition' in window)) {
        alert('Your browser does not support speech recognition. Please use Chrome or another supported browser.');
        return;
    }

   
    const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.continuous = true; 
    recognition.interimResults = false; 
    recognition.lang = 'en-US';

    
    recognition.onstart = function () {
        console.log('Speech recognition started.');
    };


    recognition.onend = function () {
        console.log('Speech recognition ended.');
    };

    
    recognition.onresult = function (event) {
        let transcript = '';
        for (let i = event.resultIndex; i < event.results.length; ++i) {
            transcript += event.results[i][0].transcript;
        }
        resultTextarea.value = transcript;
        console.log('Transcript:', transcript);
    };

   
    recognition.onerror = function (event) {
        console.error('Speech recognition error:', event.error);
    };

    
    startBtn.addEventListener('click', function () {
        recognition.start();
    });
});
