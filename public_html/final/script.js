/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var fullname = document.getElementById("fullname");
var fullnameErr = document.getElementById("err_name");
var email = document.getElementById("email");
var emailErr = document.getElementById("err_email");

var hasErrors = false;

// local storage
var data = {
    "email" : '',
    "Name" : ''
};
    
localStorage.setItem('data', JSON.stringify(data) );     // turns data into a text string and stores it in a var called data

 var savedData = localStorage.getItem('data');
            
            console.log(savedData);
            console.log(JSON.parse(savedData));

// Fullname
// checks that the input is correct and displays a error message if its incorrect

if ( !fullname.value.length ) {
    console.log("Fullname needs a length");
} else if ( SpaceAlphaValidate( fullname.value ) === false ) {
    console.log("Fullname needs Alpha chars");
} else {
    console.log("Fullname is good");
}

        
if (fullname.value.length) 
{
    fullname.classList.remove('bad');
    fullname.classList.add('good');
    fullnameErr.innerHTML = ' ';
}else 
{
    fullname.classList.remove('good');
    fullname.classList.add('bad');
    fullnameErr.innerHTML = "<p>Full Name is not valid</p>";
}


var name = document.getElementById('fullname'); 
    fullname.addEventListener('blur', saveName); 
function saveName(){                                    
     data.Name = fullname.value;
}

// checks that first and last are entered correctly
function SpaceAlphaValidate( str ) {
        var alphaRegex = /[a-zA-Z ]+/;
        return alphaRegex.test(str);			
}


// email

if (!email.value.length) {
    console.log("Email needs a length");            
} else if (EmailValidator(email.value) === false){
    console.log("Emiail isn't valid");
} else {
    console.log("Email is good");
}


if (email.value.length) 
{
    email.classList.remove('bad');
    email.classList.add('good');
    emailErr.innerHTML = '';
}else 
{
    email.classList.romve('good');
    email.classList.add('bad');
    emailErr.innerHTML = "<p>Email is not valid</p>";
}

    email.addEventListener('blur', saveEmail); 
function saveEmail(){                                    
     data.email = email.value;
} 

// checks to make sure a valid email is entered
function EmailValidator (str) {
    var emailRegex = /^[a-zA-Z]+[@]{1}[a-zA-Z]+.[a-zA-Z]{2,3}$/;
    return emailRegex.test(str);
}
