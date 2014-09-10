/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

 var email = document.getElementById('email');
    var err_email = document.getElementById('err_email');
    var hasErrors = false;
    
    function submit() {
        
        if ( !email.value.length ) {
            hasErrors = true;
            err_email.innerHTML = '<p>Email is not valid.</p>';
            email.classList.add('bad');
            email.classList.remove('good');
            
            
            
            //console.log('email is empty');
            //.classList
            //innerHTML
        } else {
            err_email.innerHTML = '';
            email.classList.add('good');
            email.classList.remove('bad');
            //console.log('email is not empty');
        }   
 
    }
    
    
    
    // method
    function testing( str ){
        console.log(str);
   }

//testing('helloooooooooooo');