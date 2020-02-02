var active_screen = 1;
console.log('Start');
console.log(active_screen);

$(document).ready(function() {
    console.log('Ready');
    console.log(active_screen);
    if(active_screen=="1"){
        console.log('First Screen');
//        $("center")
        $("#center").load('static/html/step1-choose-side.html');

    }
});