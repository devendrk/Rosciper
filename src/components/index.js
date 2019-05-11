//code goes here
setState = 3;

function countdown(a) {
	a--;
	// document.getElementById("seconds").setState = timeleft;
	if (a > 0) {
		setTimeout(countdown, 1000);
		console.log(countdown);
	}
};

//setTimeout(countdown, 1000);
countdown(setState);