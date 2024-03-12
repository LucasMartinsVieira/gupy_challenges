function invertString(str) {
	var invertedString = "";
	for (var i = str.length - 1; i >= 0; i--) {
		invertedString += str.charAt(i);
	}
	return invertedString;
}

const name = "Lucas";
console.log(invertString(name));
