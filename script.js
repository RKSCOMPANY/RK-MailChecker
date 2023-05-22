  
  function checkEmail() {
    var emailInput = document.getElementById("emailInput");
    var result = document.getElementById("result");

    var email = emailInput.value;

    // Simple email validation using regex
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
        result.textContent = "Valid email address.";
    } else {
        result.textContent = "Invalid email address.";
    }
}
