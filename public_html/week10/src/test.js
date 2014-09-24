/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function hello(){
    return 'hello';
}

function addTen(amt){
    return amt + 10;
}

function percent( amt ) {
    return amt / 100 + '%';
}


function dollar( amt ) {   
    console.log(parseInt(amt, 10));
    amt = amt.replace('$', '');
    return parseInt(amt, 10);
}
