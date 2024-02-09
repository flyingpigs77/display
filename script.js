var width = 100;
var height = 50;
var counter = 0;
var fontSize = 20;

document.getElementById("header").style.left = "720px";
document.getElementById("heart").style.left = "0px";
document.getElementById("heart").style.top = "0px";
document.getElementById("heart2").style.left = "200px";
document.getElementById("heart2").style.top = "150px";
document.getElementById("heart3").style.left = "400px";
document.getElementById("heart3").style.top = "0px";
document.getElementById("heart4").style.left = "600px";
document.getElementById("heart4").style.top = "150px";
document.getElementById("heart5").style.left = "800px";
document.getElementById("heart5").style.top = "0px";
document.getElementById("heart6").style.left = "1000px";
document.getElementById("heart6").style.top = "150px";
document.getElementById("heart7").style.left = "1200px";
document.getElementById("heart7").style.top = "0px";
document.getElementById("heart8").style.left = "1400px";
document.getElementById("heart8").style.top = "150px";
document.getElementById("heart9").style.left = "1600px";
document.getElementById("heart9").style.top = "0px";
document.getElementById("heart10").style.left = "1800px";
document.getElementById("heart10").style.top = "150px"
document.getElementById("heart11").style.left = "0px";
document.getElementById("heart11").style.top = "300px";
document.getElementById("heart13").style.left = "1600px";
document.getElementById("heart13").style.top = "300px";
document.getElementById("heart14").style.left = "200px";
document.getElementById("heart14").style.top = "450px";
document.getElementById("heart15").style.left = "1400px";
document.getElementById("heart15").style.top = "450px";
document.getElementById("heart16").style.left = "1800px";
document.getElementById("heart16").style.top = "450px";
document.getElementById("heart17").style.left = "0px";
document.getElementById("heart17").style.top = "600px";
document.getElementById("heart18").style.left = "400px";
document.getElementById("heart18").style.top = "600px";
document.getElementById("heart19").style.left = "800px";
document.getElementById("heart19").style.top = "600px";
document.getElementById("heart20").style.left = "1200px";
document.getElementById("heart20").style.top = "600px";
document.getElementById("heart21").style.left = "1600px";
document.getElementById("heart21").style.top = "600px";
document.getElementById("heart22").style.left = "200px";
document.getElementById("heart22").style.top = "750px";
document.getElementById("heart23").style.left = "600px";
document.getElementById("heart23").style.top = "750px";
document.getElementById("heart24").style.left = "1000px";
document.getElementById("heart24").style.top = "750px";
document.getElementById("heart25").style.left = "1400px";
document.getElementById("heart25").style.top = "750px";
document.getElementById("heart26").style.left = "1800px";
document.getElementById("heart26").style.top = "750px";


function pressNo() {
    console.log("jit");
    counter++;
    if (counter < 5) {
        width *= 1.4;
        height *= 1.4;
        fontSize *= 1.4;
    }
    document.getElementById("yes").style.width = width + "px";
    document.getElementById("yes").style.height = height + "px";
    document.getElementById("yes").style.fontSize= fontSize + "px";
    document.getElementById("no").style.rotate = fontSize + "px";
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
        document.getElementById("header").innerHTML = "Let's Pretend You Said Yes!";
        document.getElementById("yes").style.visibility = "hidden";
        document.getElementById("no").style.visibility = "hidden";
        document.getElementById("header").style.fontSize= "100px";
        document.getElementById("header").style.top += 400;
        celebration();
    }    
}

function pressYes() {
    document.getElementById("header").innerHTML = "Wooh";
    document.getElementById("yes").style.visibility = "hidden";
    document.getElementById("no").style.visibility = "hidden";
    document.getElementById("header").style.fontSize= "100px";
}

function celebration() {
    var mover = 1;
    var lim1 = 0;
    timer = setInterval(function(){
        if (document.getElementById("heart").style.top >= "0px") {
            mover *= -1;
        }
        document.getElementById("heart").style.top += mover;
        document.getElementById("heart2").style.top += mover;
        document.getElementById("heart3").style.top += mover;
        document.getElementById("heart4").style.top += mover;
        document.getElementById("heart5").style.top += mover;
        document.getElementById("heart6").style.top += mover;
        document.getElementById("heart7").style.top += mover;
        document.getElementById("heart8").style.top += mover;
        document.getElementById("heart9").style.top += mover;
        document.getElementById("heart10").style.top += mover;
        document.getElementById("heart11").style.top += mover;
        document.getElementById("heart13").style.top += mover;
        document.getElementById("heart14").style.top += mover;
        document.getElementById("heart15").style.top += mover;
        document.getElementById("heart16").style.top += mover;
        document.getElementById("heart17").style.top += mover;
        document.getElementById("heart18").style.top += mover;
        document.getElementById("heart19").style.top += mover;
        document.getElementById("heart20").style.top += mover;
        document.getElementById("heart21").style.top += mover;
        document.getElementById("heart22").style.top += mover;
        document.getElementById("heart23").style.top += mover;
        document.getElementById("heart24").style.top += mover;
        document.getElementById("heart25").style.top += mover;
        document.getElementById("heart26").style.top += mover;
    }, 1000);
}