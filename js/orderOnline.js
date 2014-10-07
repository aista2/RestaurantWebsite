var total = 0;

function removeItem(){
	var itemData = event.currentTarget.parentElement;
	var itemToRemove = itemData.parentElement;

	var priceItem = itemToRemove.getElementsByClassName('price');
	var item = priceItem[0].textContent.trim().substring(1);
	total = parseFloat(total) - parseFloat(item);

	$('#total').text(total.toFixed(2));

	$(itemToRemove).remove();
}

$(document).ready(function(){

	$('.add').click(function(){
		var row = this.parentElement;
			//description
		var itemDescription = row.getElementsByClassName('desc')[0];
		var itemName = itemDescription.textContent.trim();

		//price
		var priceItem = row.getElementsByClassName('price')[0];
		var price = priceItem.textContent.trim();

		
		total = parseFloat(total) +  parseFloat(price.substring(1));
		$('#total').text(total.toFixed(2));

		//appendToDom
		var stringToInsert = '<tr><td>' 
		+ itemName + ' </td><td class="price">' +price + '</td><td><span onclick ="removeItem()" class="removeItem">Remove</span></td></tr>';
		$('#totalOrder').append(stringToInsert);
	});

	$('#makePayment').click(function(){
		$('#paymentForm').removeClass("hidden");
		$('#makePayment').addClass('hidden');

	});
});

function validateOnlinePayment(){
	var name = $('#name');
	var cardNumber = $('#cardNumber');
	var securityCode = $('#securityCode');
	var yearSelected = $('#yearSelected');
	var monthSelected = $('#monthSelected');

	var cardNum = parseInt(cardNumber.val());
	var secNum = parseInt(securityCode.val());

	var errors = "";
	 $('#errorMessage').empty();

	 var isValid = true;

	if(name.val() ===''){
		name.addClass('errorBlock');
		errors = "* Please enter your name.<br>";
		isValid = false;
	}
	else{
		name.removeClass('errorBlock');
	}

	if(cardNumber.val() === ''){
		cardNumber.addClass('errorBlock');
		isValid = false
		errors+= "* Please provide a cardNumber. <br>";
	}
	
	else if(cardNum){
		if(cardNumber.val().length != 12){
			errors += "* CardNumber must be 12 digits Number. <br>";
			isValid = false
		}else{
			cardNumber.removeClass(('errorBlock'));
		}	
	}
	else if(!cardNum){
		errors += "* CardNumber must be 12 digits Number. <br>";
		isValid = false
	}

	if(securityCode.val() === ''){
		securityCode.addClass('errorBlock');
		errors+= "* Please provide Security Code. <br>";
		isValid = false
	}
	else if(secNum){
		if(securityCode.val().length != 3){
			errors += "* securityCode must be 3 digits Number. <br>";
			isValid = false
		}else{
			securityCode.removeClass(('errorBlock'));
		}	
	}
	else if(!secNum){
		securityCode.addClass('errorBlock');
		errors += "* securityCode must be 3 digits Number. <br>";
	}

	if(yearSelected.val() === 'Year'){
		yearSelected.addClass('errorBlock');
		errors+= "* Please provide expiry year. <br>";
		isValid = false
	}else{
		yearSelected.removeClass('errorBlock');
	}
	if(monthSelected.val() === 'Month'){
		monthSelected.addClass('errorBlock');
		errors+= "* Please provide expiry month. <br>";
		isValid = false
	}else{
		monthSelected.removeClass('errorBlock');
	}

  $('#errorMessage').append(errors);
  if (isValid){
  alert('Thank you! Your Order is successfull');
	$('#name').empty();
	$('#cardNumber').empty();
	$('#securityCode').empty('');
	$('#yearSelected').empty();
	$('#monthSelected').empty();
  }else{
  	return false;
  }
}