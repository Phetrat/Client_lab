//let stdin = process.openStdin()
var i=1,a,b,bmi

var test1 = function() {
	console.log('Enter your height(m): ')
	let stdin = process.openStdin()
	stdin.addListener("data",(value) => {
		if (i === 1){
			a = value
			console.log('Enter your weight(kg): ')}
		else {
			b = value
			stdin.destroy()
			bmi = (b/(a*a))
			 console.log('BMI: '+bmi)
			if(bmi < 18)
			{
				return console.log('Too thin')
			}	
			else if(bmi >18 && bmi <24.9 )
			{
				return console.log('Normal')
			}
			else if(bmi > 25.0 && bmi<29.9)
			{
				return console.log('Over weight')
			}
			else
			{
				return console.log('Too fat')
			}
		}
	i++	
	})
}

module.exports.test1= test1;




