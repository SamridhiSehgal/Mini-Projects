const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (!SpeechRecognition) {
    alert("Your browser does not support speech recognition. Please use a compatible browser.");
} else {
    const recognition = new SpeechRecognition();
    recognition.continuous = false; // Stop automatically after recognizing speech
    recognition.interimResults = false; // Do not show interim results

    const startButton = document.getElementById("startButton");
    const outputText = document.getElementById("outputText");
    const languageSelect = document.getElementById("languageSelect");

    startButton.addEventListener("click", () => {
        recognition.lang = languageSelect.value; // Set the language based on user selection
        recognition.start(); // Start the speech recognition
        startButton.disabled = true; // Disable the button while listening
        startButton.textContent = "Listening..."; // Change button text
    });

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript; // Get the recognized text
        outputText.value = transcript; // Display the text in the textarea
        startButton.disabled = false; // Enable the button again
        startButton.textContent = "Listen"; // Reset button text
    };

    recognition.onerror = (event) => {
        console.error("Error occurred in recognition: " + event.error);
        startButton.disabled = false; // Enable the button again
        startButton.textContent = "Listen"; // Reset button text
    };

    recognition.onend = () => {
        startButton.disabled = false; // Enable the button again
        startButton.textContent = "Listen"; // Reset button text
    };
}