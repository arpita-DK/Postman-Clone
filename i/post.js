
function validateForm() {
  var x = document.forms["myform"]["emailinput"].value;
  if (x == "" || x == null) {
    alert("email must be filled out");
    return false;
  }
}


