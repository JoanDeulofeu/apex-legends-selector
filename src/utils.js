const capitalize = (str) => {
	if (typeof str !== "string") {
		return "";
	} else {
		return str.charAt(0).toUpperCase() + str.toLowerCase().slice(1);
	}
};

const timeOut = (ms) => new Promise((f) => setTimeout(f, ms));

const getRandomInt = (max = 0) => {
	return Math.floor(Math.random() * max);
};

export { capitalize, timeOut, getRandomInt };
