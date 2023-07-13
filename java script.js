document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;

    if (
      username === "" ||
      password === "" ||
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      phone === ""
    ) {
      event.preventDefault(); // Prevent form submission
      document.getElementById("errorMessage").style.display = "block";
    }
  });
