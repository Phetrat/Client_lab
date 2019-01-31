let stdin = process.openStdin()

var test1 = function() {
	console.log('Enter temperature (C): ')
	stdin.addListener("data",(value) => {
			 console.log( "Fahrenheit is " + ((9/5) *(value)+32))  //  9/5*c+32
			stdin.destroy()
	})
}

module.exports.test1= test1;

