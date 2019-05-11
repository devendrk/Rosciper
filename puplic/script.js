//code goes here
setState = 3;

function countdown() {
	setState--;
	var timeleft = document.getElementById("seconds").setState
	if (timeleft > 0) {
		setTimeout(countdown, 1000);
	}
};

setTimeout(countdown, 1000);