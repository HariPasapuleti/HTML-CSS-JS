const text = document.getElementById("textToConvert");
const convertBtn = document.getElementById("convertBtn");

convertBtn.addEventListener('click', function () {
    const speechSynth = window.speechSynthesis;
    const enteredText = text.value.trim();
    const error = document.querySelector('.error-para');

    // Check if speech is currently playing
    if (speechSynth.speaking) {
        speechSynth.cancel();
        convertBtn.textContent = "Play Speech";
    } else if (!enteredText.length) {
        error.textContent = "Please enter some text to convert into speech.";
    } else {
        error.textContent = "";
        const newUtterance = new SpeechSynthesisUtterance(enteredText);
        speechSynth.speak(newUtterance);
        convertBtn.textContent = "Playing Speech...";

        // Reset button text when speech ends
        newUtterance.onend = () => {
            convertBtn.textContent = "Play Speech";
        };
    }
});
