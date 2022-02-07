const form = document.getElementById('form');
const name1 = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const date1 = document.getElementById('date');
const gender = document.getElementById('gender').selectedIndex = -1;
const number  = document.getElementById('number');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const name2 = name1.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
    const date2 = date1.value; 
    const gender1 = gender.value;
    const number1 = number.value.trim();
    let flag = true;

	if(name2 !="")
    {
        if(!name2.match(/^[A-Za-z ]+$/)){
            setErrorFor(name1, 'Name does not contain any digit');
            flag = false;
        } 
        else{
            setSuccessFor(name1);

        } 
    }
    else{
        setErrorFor(name1, 'Name cannot be blank'); 
        flag = false;  
    }
    
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
        flag = false;
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
        flag = false;

	} else {
		setSuccessFor(email);
	}
    if(number1 === '') {
		setErrorFor(number, 'Number cannot be blank');
        flag = false;

	}else if (!isphone(number1)) {
		setErrorFor(number, 'Numbae does not contain more than 10 digits');
        flag = false;

    }  
    else {
		setSuccessFor(number);
	}
   

    if(date2 === '') {
		setErrorFor(date1, 'Date cannot be blank');
        flag = false;

	}else {
		setSuccessFor(date1);
	}

	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
        flag = false;

	} else {
		setSuccessFor(password);
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'Password2 cannot be blank');
        flag = false;

	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords does not match');
        flag = false;

	} else{
		setSuccessFor(password2);
	}
    if(flag){
    
        document.getElementById('form').reset();
        window.location.href ="/success.html"
    }
    return flag;
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isphone(number){

    return /^[6-9][0-9]{9}$/.test(number);
}













