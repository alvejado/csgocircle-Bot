document.getElementById("play-points").value=1; //start bet with 1

var resulter = 0;//

var loop = window.setInterval(function() {
    var rooled_text_1 = document.getElementById("rolled-text-1").className;
    if(rooled_text_1 == "rolled-text hidden-xs hidden-sm hidden-md"){ //check if the round ended
        var result = document.getElementById("rolled-number").innerHTML; //get result
        
        if(result == 11 || result == 10 || result == 9 || result == 8 || result == 14 || result == 13 || result == 12 || result == 0){
            document.getElementById("play-points").value=document.getElementById("play-points").value*2+1;
            resulter = 1; //lost, then change this var for after to bet (bet*2+1)
        }else{  
            document.getElementById("play-points").value=1; //won, then change bet for initial value
            resulter = 0; //restart
        }  
    }
    
}, 4000);

var tobet = window.setInterval(function() {
    var tempo = document.getElementById("countdown-timer").innerHTML; //get time 
    if(tempo < 25.0 && tempo > 24.0){
            system.play.bet.red();  
    }
}, 500);
