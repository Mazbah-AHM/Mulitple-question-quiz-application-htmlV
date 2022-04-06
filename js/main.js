var objPeople = [
	{ // Object @ 0 index
		email: "sam@gamil.com",
		password: "codify"
	},
	{ // Object @ 1 index
		email: "matt",
		password: "academy"
	},
	{ // Object @ 2 index
		email: "chris",
		password: "forever"
	}

]

function getInfo() {
	var email = document.getElementById('email').value
	var password = document.getElementById('password').value

	for(var i = 0; i < objPeople.length; i++) {
		// check is user input matches username and password of a current index of the objPeople array
		if(email == objPeople[i].email && password == objPeople[i].password) {
			console.log(email + " is logged in!!!")
			// stop the function if this is found to be true
			return
		}
	}
	console.log("incorrect email or password")
}