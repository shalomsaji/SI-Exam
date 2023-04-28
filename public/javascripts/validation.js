function validateForm() {
    let phone = document.forms["register-form"]["phone"].value;
    if (phone == "") {
      alert("Enter valid phone number.");
      return false;
    }
  }

//Validation Message  
  var nameInput = document.getElementById("username");
  var phoneInput = document.getElementById('phone');

  nameInput.oninvalid = function(event) {

    event.target.setCustomValidity('Enter a valid name.');
  
  }
  phoneInput.oninvalid = function(event) {

    event.target.setCustomValidity('Enter a valid phone number.');
  
  }
  
  