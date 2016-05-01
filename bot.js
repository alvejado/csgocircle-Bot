document.getElementById("play-points").value=1;
var resulter = 1;

var loop = window.setInterval(function() {
    if(document.getElementById("rolled-text-1").className == "rolled-text hidden-xs hidden-sm hidden-md"){
        var result = document.getElementById("rolled-number").innerHTML;
        if(result == 11 || result == 10 || result == 9 || result == 8 || result == 14 || result == 13 || result == 12 || result == 0){
            resulter = 0;
        }else{  
            document.getElementById("play-points").value=1;
            resulter = 1;
        }
        
    }
    
}, 4000);

var fazAposta = window.setInterval(function() {
    var tempo = document.getElementById("countdown-timer").innerHTML;
    
    if(tempo < 25.0 && tempo > 24.0){
        if(resulter == 0){
            document.getElementById("play-points").value=document.getElementById("play-points").value*2+2;
            system.play.bet.red();
            resulter = 1;
        }else{
            system.play.bet.red();
        }
        
    }
}, 100);
