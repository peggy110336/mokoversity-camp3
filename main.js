var gameModule =(function(){

	var timeoutover,
	    counter=0;

	function start(){
	 
		var canvas = document.getElementById('game'),
			ctx = canvas.getContext('2d'),
			ballx = Math.floor(Math.random() * 300),
			bally = Math.floor(Math.random() * 500),
			ballr = Math.floor(Math.random() * 100);

		canvas.width=480;
		canvas.height=320;

		ctx.fillStyle='Black';
		ctx.beginPath();
		ctx.arc(ballx,bally,ballr,0,Math.PI * 2,true);
		ctx.fill();

		if(counter>=10){

		}else{
				timeoutover = setTimeout(start,1000);
				counter = counter+1;
				console.log("Counter = "+counter);
			}
	 }
	 	return{
				start : start
		}
	
})();
gameModule.start();
