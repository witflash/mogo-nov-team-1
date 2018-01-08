var dataStat = {
		odo1: 42,
		odo2: 123,
		odo3: 15,
		odo4: 99,
		odo5: 24
	};


odometer.onmouseover = function() {
	setTimeout(function(){
		for (var key in dataStat) {
			document.getElementById(key).innerHTML = dataStat[key];
		}
	}, 100);
}