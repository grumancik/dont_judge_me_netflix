setInterval(function(){if (document.getElementsByClassName("button continue-playing")) {
// Run the voice recognition script, and get return? Is this even close to right?-->$.getScript(speech_recognition.js, ){}
}},1000);

if (/*voice="stop judging me"*/){
  setInterval(function(){try{document.getElementsByClassName("button continue-playing")[0].click()}catch(e){}}, 33);
}
else if (/*voice="back to browse"*/) {
  setInterval(function(){try{document.getElementsByClassName("button back-to-browse")[0].click()}catch(e){}}, 33);
}
else {

}
