// Select the element in DOM
var $wrapper = document.querySelector('.wrapper'),

//HTML code
 newHTML = '<div style="background:#FFF;position:fixed;bottom:0px;right:0px;color:#000;border-radius:2px;">Initial Value: <input type="text" id="initial_value" value="1"><br/><input type="radio" name="color" value="red" disabled checked> Red - <input type="radio" name="color" value="black" disabled> Black</div>';
 
// Insert HTML
$wrapper.insertAdjacentHTML('afterbegin', newHTML);

var initial_value = document.getElementById("initial_value").value;

document.getElementById("play-points").value=initial_value; //start bet with 1

var loop = window.setInterval(function() {
    var rooled_text_1 = document.getElementById("rolled-text-1").className;
    if(rooled_text_1 == "rolled-text hidden-xs hidden-sm hidden-md"){ //check if the round ended
        var result = document.getElementById("rolled-number").innerHTML; //get result
        
        if(result == 11 || result == 10 || result == 9 || result == 8 || result == 14 || result == 13 || result == 12 || result == 0){
            document.getElementById("play-points").value=document.getElementById("play-points").value*2+1;
            //lost, then change this var for after to bet (bet*2+1)
        }else{  
            document.getElementById("play-points").value=initial_value; //won, then change bet for initial value
            document.getElementsByName("color")[0].disabled = false;
            document.getElementsByName("color")[1].disabled = false;
        }  
    }
    
}, 4000);

var tobet = window.setInterval(function() {
    var tempo = document.getElementById("countdown-timer").innerHTML; //get time 
    if(tempo < 25.0 && tempo > 24.0){
        if(document.getElementsByName("color")[0].checked == true){
            system.play.bet.black();
        }else{
            system.play.bet.red();
        }
            document.getElementsByName("color")[0].disabled = true;
            document.getElementsByName("color")[1].disabled = true;
    }
}, 600);
