/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
// checks that first and last are entered correctly
function SpaceAlphaValidate( str ) {
        var alphaRegex = /^[a-zA-Z]+$/;
        return alphaRegex.test(str);			
}

// checks to make sure a valid email is entered
function EmailValidator (str) {
    var emailRegex = /^\[A-Z0-9._%+-]+@[a-zA-Z_]+?\.[a-zA-Z]{3}$/;
    return emailRegex.test(str);
}

// checks to make sure a valid phone number is entered
function PhoneValidator (str) {
    var phoneRegex = /(\d{3})-(\d{3})-(\d{4})/;
    return phoneRegex.test(str);
}


// check that the comments dont have any html
function strip_HTML(str) {
        var findHtml = /<(.|\n)*?>/gi;
        return str.replace(findHtml,"");
}

// make the savedate button clickable
saveData.addEventListener('click', saveUserData);

    
	// variables		
        var fullname = document.getElementById('fullname');        
        var fullnameErr = document.getElementById('err_fname');    
        var phone = document.getElementById('phone');
        var phoneErr = document.getElementById('err_phone');          
        var email = document.getElementById('email');
        var emailErr = document.getElementById('err_email');
        var comments = document.getElementById('comments');
        var commentsErr = document.getElementById('err_comments');
        var hasErrors = false;
        
    function saveUserData() {
        
       // first name    checks that the input is correct and displays a error message if its incorrect
        if ( !fullname.value.length ) {
                console.log("Fullname needs a length");
        } else if ( SpaceAlphaValidate( fullname.value ) === false ) {
                console.log("Fullname needs Alpha chars");
        } else {
                console.log("Fullname is good");
        }
                
        if ( fullname.value.length ) {
         fullname.classList.remove('bad');
         fullname.classList.add('good');        
        // fullnameErr.innerHTML = '';        
          } else {
        hasErrors = true;
        
        fullname.classList.remove('good');
        fullname.classList.add('bad');       
        fullnameErr.innerHTML = "<p>FullName is not valid.</p>";       
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
         //emailErr.innerHTML = '';        
        } else {
        hasErrors = true;
        
        email.classList.remove('good');
        email.classList.add('bad');       
        emailErr.innerHTML = "<p>Full Name is not valid.</p>";       
        }
        
         // phone number validator
        if ( !phone.value.length ) {
                console.log("phone needs a length");
        } else if ( PhoneValidator( phone.value ) === false ) {
                console.log("phone needs numbers");
        } else {
                console.log("phone is good");
        }
        
          if ( phone.value.length ) {
         phone.classList.remove('bad');
         phone.classList.add('good');        
         //phoneErr.innerHTML = '';        
        } else {
        hasErrors = true;
        
        phone.classList.remove('good');
        phone.classList.add('bad');       
        phoneErr.innerHTML = "<p>phone is not valid.</p>";       
        }
        
        
        // comments
       // comments.value = strip_HTML(comments.value);
        
       /* if (!comments.value.length){
            console.log("comments needs a length");
            hasErrors = true; 
            commentsErr.innerHTML = "<p>Comments are not valid.</p>"; 
            comments.classList.remove('good');
         comments.classList.add('bad'); 
        }  
         else {
            console.log("Commets are good");
           comments.classList.remove('bad');
         comments.classList.add('good'); */       
        // commentsErr.innerHTML = '';        
      
        
        }
        
        // clears form and displayes the users valid input
        if (hasErrors === false){
        var clearForm = document.getElementById("mainform");
        clearForm.style.display = 'none';
        var showData = document.getElementById("data");
        showData.style.display = 'block';
        showData.innerHTML = '<p> Name is ' + fullname.value + '</p>' +        
                '<p>Email is ' + email.value +'</p>'+ '<p>Phone is ' + phone.value + 
                '<p>comments are '+ comments.value +'</p>';
                
    }
        
       
      

    // save to local storage
    var myjson = {};
    myjson.data = ['fullname', 'email' ,'phone', 'comments'];
        localStorage.setItem('data', JSON.stringify(data) );

        var savedData = localStorage.getItem('data');

        console.log(savedData);
        console.log(JSON.parse(savedData));





 function show() {
                div.style.display = 'block';
            }
            
           //document.getElementById('hide').addEventListener('click', hide);
           // document.getElementById('show').addEventListener('click', show);


     var dataArray = [];
            
            dataArray.push({"fullname":'', "phone": '', "email" : '',"coments" : ''
            });
          
            
            var dataString = JSON.stringify(data);
            console.log(dataString);
            localStorage.setItem('test', dataString);
            
            
            var localData = localStorage.getItem('test');
            
            var dataObj = JSON.parse(localData);
            console.log(dataObj);
            
            
            var storageData = ( typeof(localStorage.getItem('data')) === 'string' ? localStorage.getItem('data') : '' );
            
            console.log(typeof localStorage.getItem('data'));
            
           
           
   // make the clear data button clickable
   clearData.getEventListener('click', clearUserData),        
   // clear local storage function        
   function clearUserData(){

               fullName.innerHTML ='';      
               emali.innerHTML = '';      
               phone.innerHTML = '';      
               comments.innerHTML = '';      
                localStorage.clear();
   };

           