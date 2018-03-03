/* Initialize Firebase
 var config = {
    apiKey: "AIzaSyB_WpuO5j-lxmD3_BhJkPJ_SsLyCQz3BQQ",
    authDomain: "hackattack-7197f.firebaseapp.com",
    databaseURL: "https://hackattack-7197f.firebaseio.com",
    projectId: "hackattack-7197f",
    storageBucket: "hackattack-7197f.appspot.com",
    messagingSenderId: "689435338603"
  };

  firebase.initializeApp(config);
*/

function login(){
  var userEmail = document.getNameByID("userEmail").value;
  var userPassword = document.getNameByID("psw").value;

  window.altert(userEmail+ " " + userPassword);
}

