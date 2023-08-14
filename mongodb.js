
      
function myFormat() {
  
  if(document.form1.Email.value ==""){
      document.querySelector("#span1").innerHTML= "Email Address must not be empty"
      document.querySelector('#email').style.borderColor='red'
      document.form1.Email.focus();
      return true;
    }
  if(document.form1.fname.value ==""){
    document.querySelector("#span2").innerHTML ="First name must be between 1 and 20 characters long"
    document.querySelector('#fname').style.borderColor='red'
    document.form1.fname.focus() ;
    return true;
    }
  if(document.form1.lname.value ==""){
    document.querySelector("#span3").innerHTML ="Last name must be between 1 and 20 characters long"
    document.querySelector('#lname').style.borderColor='red'
    document.form1.lname.focus();
    return true;
  }  
  if(document.form1.password.value =="" || document.myForm.password.value.length != 8  ){
      document.querySelector('#span4').style.display='block'
      document.querySelector('#password').style.borderColor='red';
      document.form1.password.focus();

       return true;
  }
  if(document.form1.cname.value ==""){
      document.querySelector("#span5").innerHTML = "Input is not valid"
      document.querySelector('#cname').style.borderColor='red';
      document.form1.cname.focus();
       return true;
  }
  else{
    document.querySelector('input').style.borderColor= 'green'; 
    document.form1.focus();
    return input;
  };
  
}
