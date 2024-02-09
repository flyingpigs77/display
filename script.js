var width = 100;
var height = 50;
var counter = 0;
document.getElementById("heart").style.top = "760px";
document.getElementById("heart").style.width = "200px";
document.getElementById("heart").style.rotate = "45deg";

function pressNo() {
    console.log("jit");
    counter++;
   // while(counter <= 5) {
        width *= 1.3;
        height *= 1.5;
    //}
    document.getElementById("yes").style.width = width + "px";
    document.getElementById("yes").style.height = height + "px";
    // document.getElementById("yes").style.left = 
    if (counter == 1) {
        document.getElementById("header").innerHTML = "Wrong Answer.";
    }    
    if (counter == 2) {
        document.getElementById("header").innerHTML = "Not Quite..";
    }    
    if (counter == 3) {
        document.getElementById("header").innerHTML = "Almost There!";
    }    
    if (counter == 4) {
        document.getElementById("header").innerHTML = "So Close";
    }    
    if (counter == 5) {
        document.getElementById("header").innerHTML = "Wooh u said yes!";
    }    
}

function pressYes() {
    document.getElementById("header").innerHTML = "Wooh";
}

function celebration() {
    timer = setInterval(function(){
        
    }, 1000);
}