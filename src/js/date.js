var date = new Date();
	var current_date = date.getMonth()+1+"/"+ date.getDate()+"/"+date.getFullYear();
	var date_time = current_date;	
	document.getElementById("date").innerHTML = date_time;