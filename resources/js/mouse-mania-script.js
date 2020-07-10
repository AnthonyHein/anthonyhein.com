$(document).ready(function() {
    
    $('.goal-mouse').click(function () {
        $('#mouse-mania-won').html('ROCK ON!');
        $('canvas').hide();
        $('.goal-mouse').hide();
    });
    
});

console.log("Script loaded.");

// Modified from bouncing DVD Logo
// Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/131-bouncing-dvd-logo.html
// https://youtu.be/0j86zuqqTlQ

let xArr;
let yArr;

let xSpeedArr;
let ySpeedArr;

let pointer;

function preload() {
    pointer = loadImage("resources/img/mouse-pointer.png");
}

function setup() {
    offset = document.getElementById("mouse-mania-div").offsetTop;
    height = $('#mouse-mania-div').height();
    width = $('#mouse-mania-div').width();
    cnv = createCanvas(width, height);
    cnv.position(0, offset);
    
    xArr = new Array(50);
    yArr = new Array(50);
    xSpeedArr = new Array(50);
    ySpeedArr = new Array(50);
    
    for (i = 0; i < xArr.length; i++) {
        xArr[i] = random(width);
        yArr[i] = offset + random(height);
        xSpeedArr[i] = random(10);
        ySpeedArr[i] = random(10);
    }
    
}

function draw() {
    // background(255, 255, 255);
    clear();
    
    for (i = 0; i < xArr.length; i++) {
        image(pointer, xArr[i], yArr[i]);
        
        xArr[i] = xArr[i] + xSpeedArr[i];
        yArr[i] = yArr[i] + ySpeedArr[i];


        if (xArr[i] + pointer.width >= width) {
            xSpeedArr[i] = -xSpeedArr[i];
            xArr[i] = width - pointer.width;
        } else if (xArr[i] <= 0) {
            xSpeedArr[i] = -xSpeedArr[i];
            xArr[i] = 0;
        }

        if (yArr[i] + pointer.height >= height) {
            ySpeedArr[i] = -ySpeedArr[i];
            yArr[i] = height - pointer.height;
        } else if (yArr[i] <= 0) {
            ySpeedArr[i] = -ySpeedArr[i];
            yArr[i] = 0;
        }
    }
}