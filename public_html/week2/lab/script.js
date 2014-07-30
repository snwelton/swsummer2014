/*
 * Make sure to validate that an email is 
 * entered into the input(just that it has a length.
 * 
 * Validate the comments field to make sure that is has
 * a length greater than 0 and less than 150.
 */
    
  function submitForm() {
    
    var fullname = document.getElementById("name");
    var fullnameErr = document.getElementById("err_name");
    var email = document.getElementById('email');
    var emailErr = document.getElementById('err_email');
    var comments = document.getElementById('comments');
    var commentsErr = document.getElementById('err_comments');
    
    var hasErrors = false;
    
    // name
    if ( fullname.value.length ) {
        fullname.classList.remove('bad');
        fullname.classList.add('good');        
        fullnameErr.innerHTML = '';
        
    } else {
        hasErrors = true;
        
        fullname.classList.remove('good');
        fullname.classList.add('bad');       
        fullnameErr.innerHTML = "<p>Full Name is not valid.</p>";       
    }
    
    
    // email
      if ( email.value.length ) {
            emailErr.innerHTML = '';
            email.classList.add('good');
            email.classList.remove('bad');
            
            
        } else {
            
            hasErrors = true;
            err_email.innerHTML = '<p>Email is not valid.</p>';
            email.classList.add('bad');
            email.classList.remove('good');
        }   
 
        if ( comments.value.length > 0 && comments.value.length < 150 ) {
            comments.classList.remove('bad');
            comments.classList.add('good');        
            commentsErr.innerHTML = '';
        
        } else {
            hasErrors = true;
        
            comments.classList.remove('good');
            comments.classList.add('bad');       
            commentsErr.innerHTML = "<p>Comment is not valid.</p>";       
        }
 
    }
    
    