var button = document.getElementById('start');
var container = document.getElementById('jitsi-container');
var api = null;
button.addEventListener('click',()=>{
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var stringLength = 30;
    function pickRandom(){
        return possible[Math.floor(Math.random()*possible.length)];
    }

    var randomString = Array.apply(null,Array(stringLength)).map(pickRandom).join('');
    var domain = "meet.jit.si";
    var options = {
        "roomName" : randomString,
        "parentNode":container,
        "width":1200,
        "height":800,


    };
    api = new JitsiMeetExternalAPI(domain,options);
});