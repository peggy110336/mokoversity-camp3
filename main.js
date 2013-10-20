var gameModule =(function(){

	var timeoutover,
	    counter=0;

	var colors = ['#ff0000', '#0000ff', 'yellow'];
   		length = colors.length;

	function touchEvent(evt){
		var X = evt.clientX;
			Y = evt.clientY;
			tmp = (ballx - X)*(ballx - X)+(bally-Y)*(bally-Y);

		console.log("Clicked : "+X+" , "+Y);

		if(tmp<ballr*ballr)
			console.log("Good Hit!");
	}

	function start(){
		document.getElementById("main").addEventListener("click",touchEvent,false);
		startgame();
	}

	function startgame(){
	 
		var canvas = document.getElementById('game'),
			ctx = canvas.getContext('2d'),
			ballx = Math.floor(Math.random() * 300),
			bally = Math.floor(Math.random() * 500),
			ballr = Math.floor(Math.random() * 100);

		canvas.width=480;
		canvas.height=320;

		ctx.fillStyle=colors[counter % length];
		ctx.beginPath();
		ctx.arc(ballx,bally,ballr,0,Math.PI * 2,true);
		ctx.fill();

		if(counter>=10){
				gameover();
		}
		else{
				timeoutover = setTimeout(startgame,1000);
				counter = counter+1;
				
			}
	 }

	 function gameover(){

	 		console.log("Counter = "+counter);
	 }

	 return{
				start : start
				
		}
	
})();

gameModule.start();



