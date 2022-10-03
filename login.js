

// login Code

var attempt=3;

function validate(){
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
 
  if ( username == "student" ){
   //alert ("Login successfully");
   if(password == "password")
   alert ("Login successfully");
   window.location.href = "profile.html"; 
   event.preventDefault();// Redirecting to other page.
  return false;
  }
  else if(username == "sadmin"){
    if(password == "password")
    alert ("Login successfully");
    window.location.href = "schoolAdminProfile.html"; 
    event.preventDefault();// Redirecting to other page.
  return false;

  }
  else if(username == "suadmin"){
    if(password == "password")
    alert ("Login successfully");
    window.location.href = "superAdminPorfile.html"; 
    event.preventDefault();// Redirecting to other page.
  return false;

  }
  else if(username == "bowner"){
    if(password == "password")
    alert ("Login successfully");
    window.location.href = "businessOwnerProfile.html"; 
    event.preventDefault();// Redirecting to other page.
  return false;

  }
  else{
  attempt --;// Decrementing by one.
  alert("You have left "+attempt+" attempt;");
  // Disabling fields after 3 attempts.
  if( attempt == 0){
  document.getElementById("username").disabled = true;
  document.getElementById("password").disabled = true;
  document.getElementById("submit").disabled = true;
  return false;
  }
  }
  }

 