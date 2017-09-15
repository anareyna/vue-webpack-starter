var fn =  {
	numberBetween (min, max) {
		return (Math.random() * (max - min) + min).toFixed(2);
	},
	integerBetween (min, max) {
		return Math.round(Math.random() * (max - min) + min);
	},
	random (array) { 
		let index = Math.round(Math.random() * (array.length - 1))
		return array[index]
	}
}
module.exports = fn

