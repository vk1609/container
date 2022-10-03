function sendMail() {
  var templateParams = {
    name: document.getElementById("first-name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value
  };

  emailjs.send('service_a4wyg6o', 'template_gnm504z', templateParams)
    .then(function (response) {
      console.log('SUCCESS!', response.status, response.text);
      alert("Signup successful!, Credentials sent to your registered email address.")
      window.location.href = "login.html"
    }, function (error) {
      console.log('FAILED...', error);
      alert("There was an error, please try again later!")
      window.location.href = "home.html"

    });

}