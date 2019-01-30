
var a
var test1 = function() {
	console.log('Enter your score: ')
	let stdin = process.openStdin()
  stdin.addListener("data",(value) => {
  	a=value
      if(a < 50 && a >= 0)
          console.log("Grade : E")
      else if(a >= 50 && a < 55)
          console.log("Grade : D")
      else if(a >= 55 && a < 60)
          console.log("Grade : D+")
      else if(a >= 60 && a < 65)
          console.log("Grade : C")
      else if(a >= 65 && a < 70)
          console.log("Grade : C+")
      else if(a >= 70 && a < 75)
          console.log("Grade : B")
      else if(a >= 75 && a < 80)
          console.log("Grade : B+")
      else if(a >= 80 && a <= 100)
          console.log("Grade : A")
      else
          console.log("Error!!!")
      stdin.destroy()
  })
}

module.exports.test1= test1;