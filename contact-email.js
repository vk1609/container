function sendMail() {
  var templateParams = {
    name: document.getElementById("first-name").value,
    email: document.getElementById("email").value,
     message : document.getElementById("message").value
  };

  emailjs.send('service_pe0856i', 'template_kpp0jo4', templateParams)
    .then(function (response) {
      console.log('SUCCESS!', response.status, response.text);
      alert("Thank you for reaching out, We'll get back to you as soon as possible!")
      window.location.href = "home.html"
    }, function (error) {
      console.log('FAILED...', error);
      alert("There was an error, please try again later!")
      window.location.href = "home.html"

    });

}