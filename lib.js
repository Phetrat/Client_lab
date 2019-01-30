let stdin = process.openStdin()

var test1 = function() {
	console.log('Enter number: ')
	stdin.addListener("data",(value) => {
		for (let i=1; i <= 12 ;i++){
			 console.log(value.toString().trim() + " x " + i + " = " + (value*i))
			stdin.destroy()

		}
	})
}

module.exports.test1= test1;




