//let total = 0;

   function showDogInfo(name, breed, fees) {
      alert(`Dog's Name: ${name}\nBreed: ${breed}\nAdoption Fees: $${fees}`);
    }

    /* function addToTotal(fees) {
      total += fees;
      alert(`Total adoption fees: $${total}`);
    } */

    //jquery- lesson 9//

    $(".product-image").hover(function(){
        $(this).addClass('zoomed');},
function() {
  $(this).removeClass('zoomed');
});

    //checkout total
$(document).ready(function() {
  $('.p-adopt').click(function() {
    
    var price = parseFloat($(this).data('price'));

    
    var checkoutTotal = parseFloat($('#checkout-total').text().substring(1));

    
    var newTotal = checkoutTotal + price;

    
    $('#checkout-total').text('$' + newTotal);
    alert(`Total adoption fees: $${newTotal}`);
  });
});

//form data 

$(document).ready(function() {
  $('#checkout-form').submit(function(event) {
    event.preventDefault(); 

    
    var name = $('input[name="applicationName"]').val();
    var email = $('input[name="applicantEmail"]').val();
    var address = $('input[name="streetAddress"]').val();
    var city = $('input[name="cityName"]').val();
    var state = $('select[name="state"]').val();
    var zipCode = $('input[name="zipNumber"]').val();
    var isFirstTimeAdopter = $('input[name="special"]:checked').val();
    var pickupLocation = $('select[name="location"]').val();

    
    var formData = {
      name: name,
      email: email,
      address: address,
      city: city,
      state: state,
      zipCode: zipCode,
      isFirstTimeAdopter: isFirstTimeAdopter,
      pickupLocation: pickupLocation
    }; 

   
   
    console.log(formData);

    
    alert("Thank you. The form information has been received.");
  });
});





