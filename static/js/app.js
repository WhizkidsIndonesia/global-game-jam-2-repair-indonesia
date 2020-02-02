var active_screen = 1;

$(document).ready(function() {
    if(active_screen=="1"){
        $("#center").load('static/html/step1-choose-side.html');
    }

    $(document).on('click','#btnPilihJokowi',function(e){
         e.preventDefault();
        // your statements;
        alert("button");
     });


});

