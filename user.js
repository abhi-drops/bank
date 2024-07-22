

(function () {
  if ( 'ACTIVEUSER' in localStorage) {
    activeuser = localStorage.getItem('ACTIVEUSER');
    user = JSON.parse(localStorage.getItem(activeuser))

    document.getElementById('nav').innerHTML = `
    ${user.uname} | BALANCE : ${user.ubal} <span class=" d-none d-md-block">|</span>
    `
  }else{
    window.location = './signin.html';
  }
})();


function signout() {
  localStorage.removeItem('ACTIVEUSER');
  window.location = './signin.html';
}

function deposit() {
  depositAmount = damt.value;
  user.ubal += parseInt(depositAmount);
  localStorage.setItem(activeuser, JSON.stringify(user));
  document.getElementById('nav').innerHTML = `
    ${user.uname} | BALANCE : ${user.ubal} <span class=" d-none d-md-block">|</span>
    `
}

function withdraw(){

  if (wamt.value <= user.ubal) {
    withdrawAmount = wamt.value;
    user.ubal -= parseInt(withdrawAmount);
    localStorage.setItem(activeuser, JSON.stringify(user));
    document.getElementById('nav').innerHTML = `
    ${user.uname} | BALANCE : ${user.ubal} <span class=" d-none d-md-block">|</span>
    `
  }else{
    alert('Insufficient Balance')
  }

}

function transfer(){

  if (tamt.value <= user.ubal) {
    transferAmount = tamt.value;
    transferTo = acno.value;
    user.ubal -= parseInt(transferAmount);
    user2 = JSON.parse(localStorage.getItem(transferTo));
    user2.ubal += parseInt(transferAmount);
    localStorage.setItem(activeuser, JSON.stringify(user));
    localStorage.setItem(transferTo, JSON.stringify(user2));
    document.getElementById('nav').innerHTML = `
      ${user.uname} | BALANCE : ${user.ubal} <span class=" d-none d-md-block">|</span>
      `
    alert('amount transfered successfully')
  }else{
    alert('Insufficient Balance')
  }


}
