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

// variables		
    var fullname = document.getElementById('fullname');        
    var fullnameErr = document.getElementById('fullname_err');    
    var phone = document.getElementById('phone');
    var phoneErr = document.getElementById('phone_err');          
    var email = document.getElementById('email');
    var emailErr = document.getElementById('email_err');
    var comments = document.getElementById('description');
    var commentsErr = document.getElementById('description_err');
    var hasErrors = false;
    var myjson = [];

        
  // creat a function that saves the user data when save data button is clicked      
function saveUserData() {
    //clear the console
    console.clear();    
   
    var userData = {
        "Name"   : "",
        "Email"  : "",
        "Phone"  : "",
        "Comment"  : ""
    };

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
        console.log("Email isn't valid");
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

    // comments validator
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
        
     // save to local storage
   
    if(hasErrors === false){
        console.log('data has been entered');        
        //give the user data values that the user inputs
        userData.Name = fullname.value;
        userData.Email = email.value;
        userData.Phone = phone.value;
        userData.Comment = comments.value;
        
        //put user data into an array and store in local storage
        myjson.push(userData);
                
         var dataString = JSON.stringify(myjson);
            console.log(dataString);
            localStorage.setItem('userData', dataString);            
            
            var savedData = localStorage.getItem('userData');
            console.log(savedData);
            console.log(JSON.parse(savedData));
           
            console.log(typeof localStorage.getItem('data'));
            
            //clear the textboxes after the user saves data
            fullname.value = '';
            email.value = '';
            phone.value = '';
            comments.value = '';
            
            console.log(userData);
                        
            //generate a table
            var table = document.getElementById("tableData");
            
            //create an empty row fot the table
            var row = table.insertRow(0);
            
            //create cells within the row
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            var cell5 = row.insertCell(4);
            
            //full the cells with userdata
            cell2.innerHTML = userData.Name;
            cell3.innerHTML = userData.Email;
            cell4.innerHTML = userData.Phone;
            cell5.innerHTML = userData.Comment;   
            
    }
}
    
     //create a function that deletes last row in table
     function deleteLastRow(){
       var deleteLastRow = tableData.rows.length;
       tableData.deleteRow(deleteLastRow - 1);
         
     }


     // clear local storage
  function clearUserData(){
                  
                localStorage.clear();
   }
