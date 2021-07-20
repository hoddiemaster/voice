var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() {
    document.getElementById("text_box").innerHTML = "";
    recognition.start();
    console.log("startClick");
}
recognition.onresult = function (event) {
    console.log(event); var Content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById("text_box").innerHTML = content;
    speak()
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data = document.getElementById("text_box").value;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    
}