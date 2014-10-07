function formValidaton(){
var firstName = document.reservation.FirstName;
var lastName = document.reservation.LastName;
var email = document.reservation.Email;
var date = document.reservation.DateReservation;
var time = document.reservation.Time;
var noOfGuest = document.reservation.NoOfGuest;


var firstNameError = firstName.nextElementSibling;
var lastNameError = lastName.nextElementSibling;
var emailError = email.nextElementSibling;
var dateError = date.nextElementSibling;
var timeError = time.nextElementSibling;
var noOfGuestError = noOfGuest.nextElementSibling;


var isFormValid = true;

   if(firstName.value === '')
   {
      firstNameError.classList.remove('hidden');
      firstName.classList.add('errorBlock');
      isFormValid =false;
   }
   else{
      firstNameError.classList.add('hidden');
      firstName.classList.remove('errorBlock');
   }

  if(lastName.value === ''){
      lastNameError.classList.remove('hidden');
      lastName.classList.add('errorBlock');
      isFormValid =false;
   }
   else{
      lastNameError.classList.add('hidden');
      lastName.classList.remove('errorBlock');

   }
   if(email.value === ''){
      emailError.classList.remove('hidden');
      email.classList.add('errorBlock');
      isFormValid =false;
   }
   else{
      emailError.classList.add('hidden');
      email.classList.remove('errorBlock');

   }

   if(date.value === ''){
      dateError.classList.remove('hidden');
      date.classList.add('errorBlock');
      isFormValid =false;
   }
   else{
      dateError.classList.add('hidden');
      date.classList.remove('errorBlock');

   }

   if(time.value === ''){
      timeError.classList.remove('hidden');
      time.classList.add('errorBlock');
      isFormValid =false;
   }
   else{
      timeError.classList.add('hidden');
      time.classList.remove('errorBlock');

   }

   if(noOfGuest.value === ''){
      noOfGuestError.classList.remove('hidden');
      noOfGuest.classList.add('errorBlock');
      isFormValid =false;
   }
   else{
      noOfGuest.classList.add('hidden');
      noOfGuestError.classList.remove('errorBlock');
   }

   if(email.value === ''){
      emailError.classList.remove('hidden');
      email.classList.add('errorBlock');
      isFormValid =false;
   }
   else{
      emailError.classList.add('hidden');
      email.classList.remove('errorBlock');
   }

   if(isFormValid === false){
      document.getElementById('errorContainer').classList.remove('errorSection');
      return false;
   }
   alert("Thankyou! your reservation is successful");
}

function ReservationDatePicker(){
   $("#ReservationDate").datepicker();
}