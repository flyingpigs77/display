var width = 100;
var height = 50;
var counter = 0;
var fontSize = 20;
var row1 = 0;
var row2 = 150;
var row3 = 300;
var row4 = 450;
var row5 = 600;
var row6 = 750;
var mover = -1;
var yes = false;

document.getElementById("header").style.left = "720px";

document.getElementById("heart").style.left = "0px";
document.getElementById("heart").style.top = "1000px";
document.getElementById("heart2").style.left = "200px";
document.getElementById("heart2").style.top = "1000px";
document.getElementById("heart3").style.left = "400px";
document.getElementById("heart3").style.top = "1000px";
document.getElementById("heart4").style.left = "600px";
document.getElementById("heart4").style.top = "1000px";
document.getElementById("heart7").style.left = "1200px";
document.getElementById("heart7").style.top = "1000px";
document.getElementById("heart8").style.left = "1400px";
document.getElementById("heart8").style.top = "1000px";
document.getElementById("heart9").style.left = "1600px";
document.getElementById("heart9").style.top = "1000px";
document.getElementById("heart10").style.left = "1800px";
document.getElementById("heart10").style.top = "1000px"
document.getElementById("heart11").style.left = "0px";
document.getElementById("heart11").style.top = "1000px";
document.getElementById("heart12").style.left = "400px";
document.getElementById("heart12").style.top = "1000px";
document.getElementById("heart13").style.left = "1600px";
document.getElementById("heart13").style.top = "1000px";
document.getElementById("heart14").style.left = "200px";
document.getElementById("heart14").style.top = "1000px";
document.getElementById("heart15").style.left = "1400px";
document.getElementById("heart15").style.top = "1000px";
document.getElementById("heart16").style.left = "1800px";
document.getElementById("heart16").style.top = "1000px";
document.getElementById("heart17").style.left = "0px";
document.getElementById("heart17").style.top = "1000px";
document.getElementById("heart18").style.left = "400px";
document.getElementById("heart18").style.top = "1000px";
document.getElementById("heart19").style.left = "800px";
document.getElementById("heart19").style.top = "1000px";
document.getElementById("heart20").style.left = "1200px";
document.getElementById("heart20").style.top = "1000px";
document.getElementById("heart21").style.left = "1600px";
document.getElementById("heart21").style.top = "1000px";
document.getElementById("heart22").style.left = "200px";
document.getElementById("heart22").style.top = "1000px";
document.getElementById("heart23").style.left = "600px";
document.getElementById("heart23").style.top = "1000px";
document.getElementById("heart24").style.left = "1000px";
document.getElementById("heart24").style.top = "1000px";
document.getElementById("heart25").style.left = "1400px";
document.getElementById("heart25").style.top = "1000px";
document.getElementById("heart26").style.left = "1800px";
document.getElementById("heart26").style.top = "1000px";
document.getElementById("heart27").style.left = "600px";
document.getElementById("heart27").style.top = "1000px";
document.getElementById("heart28").style.left = "1200px";
document.getElementById("heart28").style.top = "1000px";

document.getElementById("heart").style.visibility = "hidden";
document.getElementById("heart2").style.visibility = "hidden";
document.getElementById("heart3").style.visibility = "hidden";
document.getElementById("heart4").style.visibility = "hidden";
document.getElementById("heart7").style.visibility = "hidden";
document.getElementById("heart8").style.visibility = "hidden";
document.getElementById("heart9").style.visibility = "hidden";
document.getElementById("heart10").style.visibility = "hidden";
document.getElementById("heart11").style.visibility = "hidden";
document.getElementById("heart12").style.visibility = "hidden";
document.getElementById("heart13").style.visibility = "hidden";
document.getElementById("heart14").style.visibility = "hidden";
document.getElementById("heart15").style.visibility = "hidden";
document.getElementById("heart16").style.visibility = "hidden";
document.getElementById("heart17").style.visibility = "hidden";
document.getElementById("heart18").style.visibility = "hidden";
document.getElementById("heart19").style.visibility = "hidden";
document.getElementById("heart20").style.visibility = "hidden";
document.getElementById("heart21").style.visibility = "hidden";
document.getElementById("heart22").style.visibility = "hidden";
document.getElementById("heart23").style.visibility = "hidden";
document.getElementById("heart24").style.visibility = "hidden";
document.getElementById("heart25").style.visibility = "hidden";
document.getElementById("heart26").style.visibility = "hidden";
document.getElementById("heart27").style.visibility = "hidden";
document.getElementById("heart28").style.visibility = "hidden";


function pressNo() {
    counter++;
    if (counter < 5) {
        width *= 1.3;
        height *= 1.3;
        fontSize *= 1.3;
    }
    document.getElementById("yes").style.width = width + "px";
    document.getElementById("yes").style.height = height + "px";
    document.getElementById("yes").style.fontSize= fontSize + "px";
    document.getElementById("no").style.rotate = fontSize + "px";
    // document.getElementById("yes").style.left = 
    if (counter == 1) {
        document.getElementById("header").innerHTML = "Wrong Answer.";
        document.getElementById("header").style.textAlign = "center";
    }    
    if (counter == 2) {
        document.getElementById("header").innerHTML = "Not Quite..";
        document.getElementById("header").style.textAlign = "center";
    }    
    if (counter == 3) {
        document.getElementById("header").innerHTML = "Almost There!";
        document.getElementById("header").style.textAlign = "center";
    }    
    if (counter == 4) {
        document.getElementById("header").innerHTML = "So Close";
        document.getElementById("header").style.textAlign = "center";
    }   
    if (counter == 5) {
        document.getElementById("header").innerHTML = "Let's Pretend You Said Yes!";
        document.getElementById("header").style.textAlign = "center";
        document.getElementById("yes").style.visibility = "hidden";
        document.getElementById("no").style.visibility = "hidden";
        document.getElementById("header").style.fontSize= "100px";
        document.getElementById("header").style.top += 400;
        document.getElementById("sloth2").style.visibility = "visible";
        flyIn();
    }    
}

function pressYes() {
    document.getElementById("header").innerHTML = "Yay!";
    document.getElementById("yes").style.visibility = "hidden";
    document.getElementById("no").style.visibility = "hidden";
    document.getElementById("header").style.fontSize= "100px";
    document.getElementById("sloth2").style.visibility = "visible";
    yes = true;
    flyIn();
}

function celebration() {
    var counter = 0;
    var timer = setInterval(function(){
        counter++;
        if (row1 <= 0 || row1 >= 30) {
            mover *= -1;
        }
        row1+=mover;
        row2+=mover;
        row3+=mover;
        row4+=mover;
        row5+=mover;
        row6+=mover;
        document.getElementById("heart").style.top = row1 + "px";
        document.getElementById("heart2").style.top = row2 + "px";
        document.getElementById("heart3").style.top = row1 + "px";
        document.getElementById("heart4").style.top = row2 + "px";
        document.getElementById("heart7").style.top = row1 + "px";
        document.getElementById("heart8").style.top = row2 + "px";
        document.getElementById("heart9").style.top = row1 + "px";
        document.getElementById("heart10").style.top = row2 + "px";
        document.getElementById("heart11").style.top = row3 + "px";
        document.getElementById("heart12").style.top = row3 + "px";
        document.getElementById("heart13").style.top = row3 + "px";
        document.getElementById("heart14").style.top = row4 + "px";
        document.getElementById("heart15").style.top = row4 + "px";
        document.getElementById("heart16").style.top = row4 + "px";
        document.getElementById("heart17").style.top = row5 + "px";
        document.getElementById("heart18").style.top = row5 + "px";
        document.getElementById("heart19").style.top = row5 + "px";
        document.getElementById("heart20").style.top = row5 + "px";
        document.getElementById("heart21").style.top = row5 + "px";
        document.getElementById("heart22").style.top = row6 + "px";
        document.getElementById("heart23").style.top = row6 + "px";
        document.getElementById("heart24").style.top = row6 + "px";
        document.getElementById("heart25").style.top = row6 + "px";
        document.getElementById("heart26").style.top = row6 + "px";
        if (yes) {
            document.getElementById("heart27").style.top = row4 + "px";
            document.getElementById("heart28").style.top = row3 + "px";
        }
    }, 30);
}    

function flyIn() {  
    document.getElementById("sloth").style.visibility = "hidden";
    var ypos1 = 1000, ypos2 = 1000, ypos3 = 1000, ypos4 = 1000, ypos5 = 1000, ypos6 = 1000;
    var counter1 = 0, counter2 = 0, counter3 = 0, counter4 = 0, counter5 = 0;
    document.getElementById("heart").style.visibility = "visible";
    document.getElementById("heart2").style.visibility = "visible";
    document.getElementById("heart3").style.visibility = "visible";
    document.getElementById("heart4").style.visibility = "visible";
    document.getElementById("heart7").style.visibility = "visible";
    document.getElementById("heart8").style.visibility = "visible";
    document.getElementById("heart9").style.visibility = "visible";
    document.getElementById("heart10").style.visibility = "visible";
    document.getElementById("heart11").style.visibility = "visible";
    document.getElementById("heart12").style.visibility = "visible";
    document.getElementById("heart13").style.visibility = "visible";
    document.getElementById("heart14").style.visibility = "visible";
    document.getElementById("heart15").style.visibility = "visible";
    document.getElementById("heart16").style.visibility = "visible";
    document.getElementById("heart17").style.visibility = "visible";
    document.getElementById("heart18").style.visibility = "visible";
    document.getElementById("heart19").style.visibility = "visible";
    document.getElementById("heart20").style.visibility = "visible";
    document.getElementById("heart21").style.visibility = "visible";
    document.getElementById("heart22").style.visibility = "visible";
    document.getElementById("heart23").style.visibility = "visible";
    document.getElementById("heart24").style.visibility = "visible";
    document.getElementById("heart25").style.visibility = "visible";
    document.getElementById("heart26").style.visibility = "visible";
    if (yes) {
        document.getElementById("heart27").style.visibility = "visible";
        document.getElementById("heart28").style.visibility = "visible";
    }
    var timer = setInterval(function() {
        counter1++;
        var mover1 = -1;
        ypos1 += mover1;
        document.getElementById("heart").style.top = ypos1 + "px";
        document.getElementById("heart3").style.top = ypos1 + "px";
        document.getElementById("heart7").style.top = ypos1 + "px";
        document.getElementById("heart9").style.top = ypos1 + "px";
        if (ypos1 <= 0) {
            clearInterval(timer);
            celebration();
        }
    },1);

    var timer2 = setInterval(function() {
        if (counter1 >= 150) {
            var mover2 = -1;
            ypos2 += mover2;
            document.getElementById("heart2").style.top = ypos2 + "px";
            document.getElementById("heart4").style.top = ypos2 + "px";
            document.getElementById("heart8").style.top = ypos2 + "px";
            document.getElementById("heart10").style.top = ypos2 + "px";
            if (ypos2 <= 150) {
                clearInterval(timer2);
            }
        }
    }, 1);

    var timer3 = setInterval(function() {
        if (counter1 >= 300) {
            var mover3 = -1;
            ypos3 += mover3;
            document.getElementById("heart11").style.top = ypos3 + "px";
            document.getElementById("heart12").style.top = ypos3 + "px";
            document.getElementById("heart13").style.top = ypos3 + "px";
            document.getElementById("heart28").style.top = ypos3 + "px";
            if (ypos3 <= 300) {
                clearInterval(timer3);
            }
        }
    }, 1);

    var timer4 = setInterval(function() {
        if (counter1 >= 450) {
            var mover4 = -1;
            ypos4 += mover4;
            document.getElementById("heart14").style.top = ypos4 + "px";
            document.getElementById("heart15").style.top = ypos4 + "px";
            document.getElementById("heart16").style.top = ypos4 + "px";
            document.getElementById("heart27").style.top = ypos4 + "px";
            if (ypos4 <= 450) {
                clearInterval(timer4);
            }
        }
    }, 1);

    var timer5 = setInterval(function() {
        if (counter1 >= 600) {
            var mover5 = -1;
            ypos5 += mover5;
            document.getElementById("heart17").style.top = ypos5 + "px";
            document.getElementById("heart18").style.top = ypos5 + "px";
            document.getElementById("heart19").style.top = ypos5 + "px";
            document.getElementById("heart20").style.top = ypos5 + "px";
            document.getElementById("heart21").style.top = ypos5 + "px";
            if (ypos5 <= 600) {
                clearInterval(timer5);
            }
        }
    }, 1);

    var timer6 = setInterval(function() {
        if (counter1 >= 750) {
            var mover6 = -1;
            ypos6 += mover6;
            document.getElementById("heart22").style.top = ypos6 + "px";
            document.getElementById("heart23").style.top = ypos6 + "px";
            document.getElementById("heart24").style.top = ypos6 + "px";
            document.getElementById("heart25").style.top = ypos6 + "px";
            document.getElementById("heart26").style.top = ypos6 + "px";
            if (ypos6 <= 750) {
                clearInterval(timer6);
            }
        }
    }, 1);
}
