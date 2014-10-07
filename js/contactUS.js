function formValidaton(){
var firstName = document.contactUs.FirstName.value;
var lastName = document.contactUs.LastName.value;
var email = document.contactUs.Email.value; 
var message = document.contactUs.Message.value;

var firstNameError = document.contactUs.FirstName.nextElementSibling;
var lastNameError = document.contactUs.LastName.nextElementSibling;
var emailError = document.contactUs.Email.nextElementSibling;
var messageError = document.contactUs.Message.nextElementSibling;

var isFormValid = true;


   if(firstName === '')
   {
      firstNameError.classList.remove('hidden');
      isFormValid =false;
   }
   else{
      firstNameError.classList.add('hidden');
   }

  if(lastName === ''){
      lastNameError.classList.remove('hidden');
      isFormValid =false;
   }
   else{
      lastNameError.classList.add('hidden');

   }
   if(email === ''){
      emailError.classList.remove('hidden');
      isFormValid =false;
   }
   else{
      emailError.classList.add('hidden');

   }
   if(message === ''){
      messageError.classList.remove('hidden');
      isFormValid =false;
   }
   else{
      messageError.classList.add('hidden');
   } 


   if(isFormValid === false){
        return false;
   }
   alert("Thankyou, your message has been sent");
}
