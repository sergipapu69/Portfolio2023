var date = new Date();
	var current_date = date.getMonth()+1+"/"+ date.getDate()+"/"+date.getFullYear();
	var date_time = current_date;	
	document.getElementById("date").innerHTML = date_time;

	var date = new Date();
	var current_time = date.getHours()+":"+date.getMinutes();
	var date_time = current_time;	
	document.getElementById("hours").innerHTML = date_time;