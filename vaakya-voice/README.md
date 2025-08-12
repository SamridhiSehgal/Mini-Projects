# VAAKYA-VOICE 🎙️

A comprehensive web-based voice interaction platform that enables seamless conversion between text and speech, supporting multiple Indian languages. Built with vanilla JavaScript, HTML5, and CSS3, Vaakya Voice provides an intuitive interface for both text-to-speech and speech-to-text functionality.

## 🌟 Features

### Core Capabilities
- **Text-to-Speech (TTS)**: Convert written text into natural-sounding speech
- **Speech-to-Text (STT)**: Transcribe spoken words into written text
- **Multi-language Support**: Comprehensive support for 13 Indian languages
- **Real-time Processing**: Instant conversion without server dependencies
- **Browser-based**: No installation required, runs entirely in the browser

### Language Support
- **English (India)** - en-US
- **Hindi** - hi-IN
- **Punjabi** - pa-IN
- **Bengali** - bn-IN
- **Telugu** - te-IN
- **Tamil** - ta-IN
- **Marathi** - mr-IN
- **Urdu** - ur-IN
- **Gujarati** - gu-IN
- **Oriya** - or-IN
- **Kannada** - kn-IN
- **Malayalam** - ml-IN
- **Assamese** - as-IN

## 🚀 Quick Start

### Prerequisites
- Modern web browser with Web Speech API support (Chrome, Edge, Safari, Firefox)
- Microphone access for speech-to-text functionality
- Internet connection for initial page load (works offline after loading)

### Running the Application
1. **Clone or Download**: Download the project files to your local machine
2. **Open in Browser**: Simply open `index.html` in any modern web browser
3. **Grant Permissions**: Allow microphone access when prompted for speech-to-text features
4. **Start Using**: Choose your preferred mode (Speak or Listen) and begin interacting

### File Structure
```
vaakya-voice/
├── index.html              # Landing page with mode selection
├── texttovoice.html        # Text-to-speech interface
├── voicetotext.html        # Speech-to-text interface
├── styling.css             # Unified stylesheet for all pages
├── script.js               # Navigation logic for landing page
├── sctexttovoice.js        # Text-to-speech functionality
├── scvoicetotext.js        # Speech-to-text functionality
└── README.md              # This documentation file
```

## 🎯 How to Use

### Text-to-Speech Mode
1. **Navigate**: Click "Speak" on the landing page
2. **Enter Text**: Type or paste your text in the provided textarea
3. **Select Language**: Choose your desired language from the dropdown
4. **Generate Speech**: Click "Speak" to hear the text in the selected language
5. **Adjust Settings**: Change voice, speed, or pitch through browser speech settings

### Speech-to-Text Mode
1. **Navigate**: Click "Listen" on the landing page
2. **Select Language**: Choose the language you'll be speaking
3. **Start Recording**: Click "Listen" to begin speech recognition
4. **Speak Clearly**: Talk into your microphone at normal speed
5. **View Results**: Your speech will appear as text in the textarea
6. **Edit Text**: Modify the transcribed text as needed

## 🛠️ Technical Architecture

### Frontend Technologies
- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Responsive design with gradient backgrounds and modern styling
- **Vanilla JavaScript**: No frameworks, lightweight and fast

### Web APIs Used
- **Web Speech API**: Core speech recognition and synthesis functionality
- **SpeechSynthesisUtterance**: Text-to-speech implementation
- **SpeechRecognition**: Speech-to-text implementation
- **Web Audio API**: Audio processing and playback

### Browser Compatibility
| Browser | Text-to-Speech | Speech-to-Text |
|---------|----------------|----------------|
| Chrome  | ✅ Full Support | ✅ Full Support |
| Edge    | ✅ Full Support | ✅ Full Support |
| Safari  | ✅ Full Support | ✅ Partial Support |
| Firefox | ✅ Full Support | ⚠️ Limited Support |

## 🔧 Customization Options

### Styling Customization
The `styling.css` file contains organized CSS variables for easy theme modification:
- **Color Schemes**: Modify gradient backgrounds in `.table`, `.Words`, `.Voice` classes
- **Typography**: Change font families, sizes, and weights throughout the stylesheet
- **Layout**: Adjust spacing, borders, and responsive breakpoints

### Language Configuration
To add new languages:
1. Add new `<option>` elements in both `texttovoice.html` and `voicetotext.html`
2. Use appropriate BCP 47 language codes (e.g., "en-GB", "fr-FR")
3. Test pronunciation accuracy for the new language

### Voice Selection
The application automatically detects available system voices. To customize:
- Modify the `sctexttovoice.js` file to filter or prioritize specific voices
- Implement voice selection dropdown for user preference

## 📱 Responsive Design

### Mobile Optimization
- **Flexible Layouts**: Adapts to screen sizes from 320px to 4K displays
- **Touch-friendly**: Large buttons and input areas for mobile interaction
- **Viewport Configuration**: Proper meta tags for mobile browsers

### Cross-platform Testing
- **Desktop**: Windows, macOS, Linux compatibility
- **Mobile**: iOS Safari, Android Chrome tested
- **Tablet**: iPad, Android tablet optimization

## 🔒 Privacy & Security

### Data Handling
- **Local Processing**: All speech processing happens in-browser
- **No Data Storage**: Text and audio are not stored or transmitted
- **Privacy First**: No external API calls or data collection

### Security Features
- **HTTPS Required**: Microphone access requires secure context
- **User Consent**: Explicit permission requests for microphone access
- **Session-based**: Data cleared when browser tab is closed

## 🐛 Troubleshooting

### Common Issues

#### Speech Recognition Not Working
- **Check Browser Support**: Ensure you're using a compatible browser
- **Microphone Permissions**: Verify microphone access is granted
- **Language Settings**: Confirm correct language is selected
- **Network Connection**: Some browsers require internet for speech recognition

#### No Audio Output
- **System Volume**: Check device volume and mute settings
- **Browser Permissions**: Allow audio playback in browser settings
- **Voice Selection**: Verify a voice is selected in system settings

#### Poor Recognition Accuracy
- **Quiet Environment**: Reduce background noise
- **Clear Speech**: Speak at moderate speed with clear pronunciation
- **Correct Language**: Ensure selected language matches spoken language
- **Microphone Quality**: Use a good quality microphone

### Debug Mode
Enable console logging by adding `console.log()` statements in the JavaScript files for detailed debugging information.

## 🚀 Future Enhancements

### Planned Features
- **Voice Commands**: Hands-free navigation and control
- **Audio Export**: Download generated speech as audio files
- **Text Export**: Save transcribed text to various formats
- **Voice Profiles**: Save and load custom voice settings
- **Real-time Translation**: Cross-language communication support

### Technical Improvements
- **Progressive Web App**: Offline functionality and app-like experience
- **WebRTC Integration**: Real-time voice communication
- **AI Enhancement**: Better accuracy with machine learning models
- **Accessibility**: Screen reader and keyboard navigation improvements

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### Development Setup
1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Test across different browsers
5. Submit a pull request

### Contribution Areas
- **Bug Fixes**: Report and fix issues
- **Language Support**: Add new Indian languages
- **UI/UX Improvements**: Enhance user experience
- **Documentation**: Improve guides and examples
- **Testing**: Help test on different devices and browsers

## 📄 License

This project is open source and available under the [MIT License](LICENSE). Feel free to use, modify, and distribute according to the license terms.

## 🙏 Acknowledgments

- **Web Speech API**: For providing the speech recognition and synthesis capabilities
- **Indian Language Community**: For language support and testing
- **Open Source Contributors**: For continuous improvements and feedback

## 📞 Support

For questions, issues, or contributions:
- **GitHub Issues**: Report bugs and request features
- **Documentation**: Check this README and inline code comments
- **Community**: Join discussions and share feedback

---

**Vaakya Voice** - Empowering voice interaction for Indian languages, one conversation at a time.
