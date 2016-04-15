var socket = io();
var ding = new Audio('ding.mp3');
$('#ding-button').click(function(){
    if (!ding.paused) {
        ding.currentTime = 0.0;
        ding.play();
    } else {
        ding.play();
    }
    socket.emit('clicked');
    return false;
});

socket.on('increment-counter', function(counter){
    $('#counter').text(counter);
});

socket.on('play-ding', function(){
    if (!ding.paused) {
        ding.currentTime = 0.0;
        ding.play();
    } else {
        ding.play();
    }
});
