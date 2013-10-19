var gameModule =function(){

	function start()
	{
	 (function()
	 {	
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

	 })  ();
	}
}
