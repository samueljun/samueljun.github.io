function loadTab() {
	var hash = window.location.hash;
	if (hash != "") {
		$("a[href='" + hash + "']").tab("show");
	}
}

// http://stackoverflow.com/questions/4060004/calculate-age-in-javascript
function _calculateAge(birthday) { // birthday is a date
	var ageDifMs = Date.now() - birthday.getTime();
	var ageDate = new Date(ageDifMs); // miliseconds from epoch
	return Math.abs(ageDate.getUTCFullYear() - 1970);
}

$(document).ready(function() {
	loadTab();
	$(window).on("hashchange", loadTab);
	$('#age').html(_calculateAge(new Date('5/8/92')));
});
