var socket = io();
$('#ding-button').click(function(){
    socket.emit('clicked');
    return false;
});

socket.on('increment-counter', function(counter){
    $('#counter').text(counter);
});
