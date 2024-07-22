// This is a JavaScript function that handles user sign-in functionality. It checks if the user exists in the localStorage based on the provided username, verifies the password, and redirects the user to the user.html page upon successful login.

function signin() {
  if (uacnum.value == '' || upass.value == '') {
    alert('Please enter your username and password!');
  }else{
    if (uacnum.value in localStorage) {
      user = JSON.parse(localStorage.getItem(uacnum.value));
      if (user.upass == upass.value) {
        console.log( user.uacnum);
        localStorage.setItem("ACTIVEUSER", user.uacnum);
        alert("user successfully logined");
        window.location.href = "./user.html";
      } else {
        alert("wrong password");
      }
    } else {
      alert("wrong username");
    }
  }


}