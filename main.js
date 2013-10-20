/*jslint browser: true, devel: true, closure: true */

var gameModule = (function (document) {

    "use strict";

    var counter = 0,
        ballx,
        bally,
        ballr,
        Scores = 0,
        colors = ['#ff0000', '#0000ff', 'yellow'],
        length = colors.length;

    function gameover() {
        console.log("Final Scores = " + Scores);
    }

    function touchEvent(evt) {
        var X = evt.clientX,
            Y = evt.clientY,
            tmp = (ballx - X) * (ballx - X) + (bally - Y) * (bally - Y);

        console.log("Clicked : " + X + " , " + Y);

        if (tmp < ballr * ballr) {
            Scores = Scores + (180 - ballr);
            console.log("Good Hit! Your Scores : " + Scores);
        }
    }

    function startgame() {
        var canvas = document.getElementById('game'),
            ctx = canvas.getContext('2d');

        ballx = Math.floor(Math.random() * 300);
        bally = Math.floor(Math.random() * 500);
        ballr = Math.floor(Math.random() * 100);

        canvas.width = 480;
        canvas.height = 320;

        ctx.fillStyle = colors[counter % length];
        ctx.beginPath();
        ctx.arc(ballx, bally, ballr, 0, Math.PI * 2, true);
        ctx.fill();

        if (counter >= 10) {
            gameover();
        } else {
            setTimeout(startgame, 1000);
            counter = counter + 1;
        }
    }

    function start() {
    	Scores = 0;
        document.getElementById("main").addEventListener("click", touchEvent, false);
        startgame();
    }

    return {
        start : start
    };
}(document));

gameModule.start();