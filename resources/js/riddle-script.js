// From https://werxltd.com/wp/2010/05/13/javascript-implementation-of-javas-string-hashcode-method/
// IF YOU ARE SEEING THIS, THEN YOU PROBABLY TRIED TO CHEAT, TSK TSK.
function checkAnswer() {
    var answer = document.getElementById('riddle-answer').value;
    console.log(answer);
    var hash = 0, i, chr;
    for (i = 0; i < answer.length; i++) 
    {
      chr   = answer.charCodeAt(i);
      hash  = ((hash << 5) - hash) + chr;
      hash |= 0;
    }
    
    console.log(hash);
    if (hash == 1852442505 || hash == 1787798377)
    {
        document.getElementById('riddle-won').textContent = "Really?? This is incredible, nobody gets this right. Want to play sometime?";
    }
    return false;
}