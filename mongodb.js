
      
// function myFormat() {
  
//   if(document.form1.Email.value ==""){
//       document.querySelector("#span1").innerHTML= "Email Address must not be empty"
//       document.querySelector('#email').style.borderColor='red'
//       document.form1.Email.focus();
//       return true;
//     }
//   if(document.form1.fname.value ==""){
//     document.querySelector("#span2").innerHTML ="First name must be between 1 and 20 characters long"
//     document.querySelector('#fname').style.borderColor='red'
//     document.form1.fname.focus() ;
//     return true;
//     }
//   if(document.form1.lname.value ==""){
//     document.querySelector("#span3").innerHTML ="Last name must be between 1 and 20 characters long"
//     document.querySelector('#lname').style.borderColor='red'
//     document.form1.lname.focus();
//     return true;
//   }  
//   if(document.form1.password.value =="" || document.myForm.password.value.length != 8  ){
//       document.querySelector('#span4').style.display='block'
//       document.querySelector('#password').style.borderColor='red';
//       document.form1.password.focus();

//        return true;
//   }
//   if(document.form1.cname.value ==""){
//       document.querySelector("#span5").innerHTML = "Input is not valid"
//       document.querySelector('#cname').style.borderColor='red';
//       document.form1.cname.focus();
//        return true;
//   }
//   else{
//     document.querySelector('input').style.borderColor= 'green'; 
//     document.form1.focus();
//     return input;
//   };
  
// }








      let form= document.getElementById("form1");
      let fName= document.getElementById("fname");
      let lName= document.getElementById("lname");
      let Email = document.getElementById('Email');
      let passWord= document.getElementById("password");
      let emailError= document.getElementById('span1');
      let nameError= document.getElementById('span2');
      let lNameError= document.getElementById('span3');
      let passError= document.getElementById('span4');

      const number = /^[0-9]+$/;
      const name = /^[a-zA-Z]+$/;
      const emailFormat = /^\w+@[a-z]+\.[a-z]{2,3}$/;

    form.addEventListener('submit', function(e){
    e.preventDefault();
    let busari= true;

    if(!Email.value){
      emailError.textContent= "Email Address must not be empty"
      emailError.style.borderColor='red'
      Email.focus();
      busari=false;
    } else if(!Email.value.match(emailFormat)){
      emailError.textContent= "Email Address must not be empty";
      emailError.style.borderColor='red';
      Email.focus();
      busari=false;
    }
    else{
      emailError.textContent='correct';
      emailError.style.borderColor='green';
    
    }
    
    if(!fName.value){
      nameError.textContent ="First name must be between 1 and 20 characters long";
      nameError.textContent.style.borderColor='red';
      fName.focus() ;
      busari=false;
    } 
    else{
      nameError.textContent='correct';
      nameError.style.borderColor='green';
      
    }
    if(!lName.value){
      lNameError.textContent ="Last name must be between 1 and 20 characters long";
      lNameError.textContent.style.borderColor='red';
      lName.focus() ;
      busari=false;
    } 
    else{
      lNameError.textContent='correct';
      lNameError.style.borderColor='green';
      
    }
    if(!passWord.value){
      passError.style.display='inline';
      passWord.focus() ;
      busari=false;
    }
    else if(!passWord.value .match(number)){
      passError.style.display='inline';
      passWord.focus() ;
      busari=false;
    }
    else{
      passError.style.display='none';
      passError.style.borderColor='green';
    }
     if(busari){
      form.submit
     }
});

  function myFormat(){
  
    if(!Email.value){
      emailError.textContent= "Email Address must not be empty"
      emailError.style.borderColor='red'
      Email.focus() ;
      // busari=false;
      return false;
    } else if(!Email.value.match(emailFormat)){
      emailError.textContent= "Email Address must not be empty";
      emailError.style.borderColor='red';
      Email.focus() ;
      // busari=false;
      return false;
    }
    else{
      emailError.textContent='correct';
      emailError.style.borderColor='green';
    
    }
    
    if(!fName.value){
      nameError.textContent ="First name must be between 1 and 20 characters long";
      nameError.textContent.style.borderColor='red';
      fName.focus() ;
      // busari=false;
      return false;
    } 
    else{
      nameError.textContent='correct';
      nameError.style.borderColor='green';
      
    }
    if(!lName.value){
      lNameError.textContent ="Last name must be between 1 and 20 characters long";
      lNameError.textContent.style.borderColor='red';
      lName.focus() ;
      // busari=false;
      return false;
    } 
    else{
      lNameError.textContent='correct';
      lNameError.style.borderColor='green';
      
    }
    if(!passWord.value){
      passError.style.display='inline';
      passWord.focus() ;
      // busari=false;
      return false;
    }
    else if(!passWord.value .match(number)){
      passError.style.display='inline';
      passWord.focus() ;
      // busari=false;
      return false;
    }
    else{
      passError.style.display='none';
      passError.style.borderColor='green';
    }
     
  }; 
     
