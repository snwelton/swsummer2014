/*
 Let’s revisit form validation from week 2. 
  You will use your same form but create some new JavaScript. 
 
1. In your HTML make a fname and lname fields.
2. Using regular expression to validate your form.
    a. Full name must be a SpaceAlphaValidate, only characters and spaces allowed
    c. Email must start with characters, have a @ symbol, have another set 
       of characters have a period and end with 3 characters.
    d. Comments must not have any html.  Search for characters that have <> 
       wrapped around it.

3.  Once all the data is valid hide the form using [object].style.display='none'
    Display a div that will show the data entered.  You can add a div to the page
    and have it display:none to start.

 */

// checks that first and last are entered correctly
function SpaceAlphaValidate( str ) {
        var alphaRegex = /[a-zA-Z ]+/;
        return alphaRegex.test(str);			
}

// checks to make sure a valid email is entered
function EmailValidator (str) {
    var emailRegex = /^[a-zA-Z]+[@]{1}[a-zA-Z]+.[a-zA-Z]{2,3}$/;
    return emailRegex.test(str);
}

// check that the comments dont have any html
function strip_HTML(str) {
        var findHtml = /<(.|\n)*?>/gi;
        return str.replace(findHtml,"");
}

function submitForm() {    
	// variables		
        var fname = document.getElementById('fname');
        var fnameErr = document.getElementById('err_fname');
        var lnameErr = document.getElementById('err_lname');
        var lname = document.getElementById('lname');   
        var email = document.getElementById('email');
        var emailErr = document.getElementById('err_email');
        var comments = document.getElementById('comments');
        var commentsErr = document.getElementById('err_comments');
        var hasErrors = false;
    
       // first name    checks that the input is correct and displays a error message if its incorrect
        if ( !fname.value.length ) {
                console.log("Fname needs a length");
        } else if ( SpaceAlphaValidate( fname.value ) === false ) {
                console.log("Fname needs Alpha chars");
        } else {
                console.log("Fname is good");
        }
                
        if ( fname.value.length ) {
         fname.classList.remove('bad');
         fname.classList.add('good');        
         fnameErr.innerHTML = '';        
          } else {
        hasErrors = true;
        
        fname.classList.remove('good');
        fname.classList.add('bad');       
        fnameErr.innerHTML = "<p>Fist Name is not valid.</p>";       
          }
        
        // Last name
        if ( !lname.value.length ) {
                console.log("Lname needs a length");
        } else if ( SpaceAlphaValidate( lname.value ) === false ) {
                console.log("Lname needs Alpha chars");
        } else {
                console.log("Lname is good");
        }
        
          if ( lname.value.length ) {
         lname.classList.remove('bad');
         lname.classList.add('good');        
         lnameErr.innerHTML = '';        
        } else {
        hasErrors = true;
        
        lname.classList.remove('good');
        lname.classList.add('bad');       
        lnameErr.innerHTML = "<p>last Name is not valid.</p>";       
        }
        
        
        // email
        if (!email.value.length) {
            console.log("Email needs a length");            
        } else if (EmailValidator(email.value) === false){
            console.log("Emiail isn't valid");
        } else {
            console.log("Email is good");
        }
        
         if ( email.value.length ) {
         email.classList.remove('bad');
         email.classList.add('good');        
         emailErr.innerHTML = '';        
        } else {
        hasErrors = true;
        
        email.classList.remove('good');
        email.classList.add('bad');       
        emailErr.innerHTML = "<p>Full Name is not valid.</p>";       
        }
        
        
        // comments
        comments.value = strip_HTML(comments.value);
        
        if (!comments.value.length){
            console.log("comments needs a length");
            hasErrors = true; 
            commentsErr.innerHTML = "<p>Comments are not valid.</p>"; 
            comments.classList.remove('good');
         comments.classList.add('bad'); 
        }  
         else {
            console.log("Commets are good");
           comments.classList.remove('bad');
         comments.classList.add('good');        
         commentsErr.innerHTML = '';        
      
        
        }
        
        // clears form and displayes the users valid input
        if (hasErrors === false){
        var clearForm = document.getElementById("mainform");
        clearForm.style.display = 'none';
        var showData = document.getElementById("data");
        showData.style.display = 'block';
        showData.innerHTML = '<p> Name is ' + fname.value + ' ' + lname.value + '</p>' +        
                '<p>Email is ' + email.value +'</p>'+
                '<p>comments are '+ comments.value +'</p>';
                
    }
        
       
      
}