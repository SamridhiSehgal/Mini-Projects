function navigateBasedOnSelection() {
    const speakRadio = document.getElementById('101');
    const listenRadio = document.getElementById('102');
    
    if (speakRadio.checked) {
        window.location.href = "texttovoice.html"; // Link to voice-to-text HTML file
    } else if (listenRadio.checked) {
        window.location.href ="voicetotext.html" ; // Link to text-to-voice HTML file
    }
}