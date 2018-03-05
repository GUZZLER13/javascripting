var signe = "#";

if((rep === "yes") || (rep === "oui") || (rep === "Yes") || (rep === "YES") || (rep === "Oui") || (rep === "OUI")) {

	for (var i = 0; i < 7; i++) {
		console.log(signe);
  		signe += "#";
	}
}

else if((rep === "no") || (rep === "non") || (rep === "No") || (rep === "NO") || (rep === "Non") || (rep === "NON")) {

	alert("Quel dommmaaaaaage.... :-D");
	
}

else {

	alert("Je vous sens comme tiraillé");
	
}
