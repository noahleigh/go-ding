var socket = io();
var ding = new Audio('ding.mp3');

function spamPlay(audioObj){
    if (!audioObj.paused) {
        audioObj.currentTime = 0.0;
        audioObj.play();
    } else {
        audioObj.play();
    }
}

$('#ding-button').click(function(){
    spamPlay(ding);
    socket.emit('clicked');
    return false;
});

socket.on('increment-counter', function(counter){
    // $('#counter').text(counter);
    $('#progress-bar').text(counter+'%')
    $('#progress-bar').css('width', counter+'%');
    $('#progress-bar').attr('aria-valuenow', counter);
    if (counter == 100) {
        $('#progress-bar').addClass('progress-bar-success');
    } else {
        $('#progress-bar').removeClass('progress-bar-success');
    }
});

socket.on('play-ding', function(){
    spamPlay(ding);
});
