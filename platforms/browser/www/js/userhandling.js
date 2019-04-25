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

var constraints = {
  password: {
    presence: true,
    length: {
      minimum: 6,
      message: "must be at least 6 characters"
    }
  }
}

function validateSignUpPassword(){
  var user_password = $("#password").val();
  var result = validate({password: user_password}, constraints)
  console.log(result);
  alert(result.password);
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

function signUp(){
  var signUpError = "";
  var displayname = $('#first_name').val() + " " + $('#last_name').val();
  var email = $('#sign_email').val();
  signUpError+=validateEmail();
  var password = $('#sign_password').val();
  var confirmpassword = $('#confirm_password').val();
  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error){
    if(!error){
      var user = firebase.auth(currentUser);
      user.updateProfile({
        displayName: displayname
      }).then(function(){
        console.log("Success");
      })
    }
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
  })
}

$("#signUpButton").click(signUp);
$("#loginButton").click(validateLogin);
$("#googleButton").click(signIn);
$("#signOut").click(signOut);
$('#signUpButton').click(signUp);
