function fillBookMeeting() {
	//for comfort time block hours
	var ele1 = document.getElementById('starthour');
	var ele2 = document.getElementById('endhour');
	for (var i = 0; i < 24; i++) {
		ele1.innerHTML = ele1.innerHTML + '<option value="' + i + '">' + i + '</option>';
		ele2.innerHTML = ele2.innerHTML + '<option value="' + i + '">' + i + '</option>';
	}
	//for duration
	var ele3 = document.getElementById('duration');
	for (var i = 0.5; i <= 12; i += 0.5) {
		ele3.innerHTML = ele3.innerHTML + '<option value="' + i + '">' + i + '</option>';
	}
	//for timezones
	var ele4 = document.getElementById('timezones2').getElementsByTagName('select')[0];
	var timezones = moment.tz.names();
	for (var i = 0; i < timezones.length; i++) {
		ele4.innerHTML = ele4.innerHTML + '<option value="' + timezones[i] + '">' + timezones[i] + '</option>';
	}
	//console.log(timezones);
	//for citys
	var ele5 = document.getElementById('cities');

}

function selectTimezoneToTextInput(value) {
	console.log('SELECT value passed to text INPUT is: '+value);
	var ele2 = document.getElementById('selectedvalues');
	var existingvalues = ele2.getElementsByTagName('div');
	for(var i=0;i<existingvalues.length;i++){
		if existingvalues[i]
	}
	//if value exists, do erase
	
	//if values doesn't exist, do add
	ele2.innerHTML=ele2.innerHTML+'<div class="inputedselect">'
}

onload = function() {
	fillBookMeeting();
	document.getElementById('timezonevalues').addEventListner("onChange", selectTimezoneToTextInput(this.value);)
}
