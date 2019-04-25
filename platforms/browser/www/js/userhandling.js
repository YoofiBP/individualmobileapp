  if(!isUserSignIn()){
    window.location.href = "#login";
  }

function signIn(){
var provider = new firebase.auth.GoogleAuthProvider();

firebase.auth().signInWithPopup(provider).then(function(result){
  var token = result.credential.accessToken;
  var user = result.user;
}).catch(function(error){
  var errorCode = error.code;
  var errorMessage = error.message;
  var email = error.email;
  var credential = error.credential;
});
}

function signOut(){
  firebase.auth().signOut().then(function(){
    console.log("Signed Out First");
  }).catch(function(error){
    console.log("Failed");
  });
}

function isUserSignIn(){
  return !!firebase.auth().currentUser;
}

function validateEmail(){
  var email = $("#email").val();
  var emailError = "";
  if(email.length == 0 || !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
    emailError+="Please enter a valid email\n";
  }
    return emailError;
}


function validatePassword(){
  var password = $("#password").val();
  var passwordError = "";
  if(password.length == 0){
    passwordError+="Please enter a password\n";
  }
    return passwordError;
}

function validateLogin(){
  var loginError = "";
  var password = $("#password").val();
  var email = $("#email").val();
  loginError += validatePassword();
  loginError += validateEmail();
  if(loginError != ""){
    console.log(loginError);
    navigator.notification.alert(loginError, function(){}, "Invalid Login Details");
  }else{
    firebase.auth().signInWithEmailAndPassword(email,password).catch(function(error){
      var errorCode = error.code;
      var errorMessage = error.message;
      // console.log(errorCode);
      // console.log(errorMessage);
    });
  }
}

$("#loginButton").click(validateLogin);
$("#googleButton").click(signIn);
$("#signOut").click(signOut);
