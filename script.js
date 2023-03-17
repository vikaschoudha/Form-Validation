let fname = document.getElementById('name')
let femail = document.getElementById('email')
let pwd = document.getElementById('password')
let cnf = document.getElementById('confirm password')

function formvalidate(){
    let returnval = true;
    if(fname.value.length <3){
        document.getElementById('nameError').innerHTML = 'name must be atleast 3 character'
        returnval = false
    }
    if(!femail.value.includes('@')){
        document.getElementById('emailError').innerHTML = 'Email must contain @'
        returnval = false

    }
    if(pwd.value.length < 8){
        document.getElementById('passwordError').innerHTML = 'password must be atleast 8 character'
        returnval = false
    }
    if(pwd.value != cnf.value){
        document.getElementById('cnfPwdError').innerHTML = 'password must match'
        returnval = false
    }
    return returnval;
}