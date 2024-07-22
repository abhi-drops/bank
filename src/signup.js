

function signup() {
  if (uacnum.value in localStorage) {
    alert("account number already in use ")
  }else{
    user = {
      uacnum : uacnum.value,
      uname : uname.value,
      upass : upass.value,
      ubal : 0
  }

  localStorage.setItem(uacnum.value,JSON.stringify(user))
      uacnum.value = ""
      uname.value = ""
      upass.value = ""
      alert("User data successfully stored");
      window.location = './signin.html';
  }

}