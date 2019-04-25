document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady(){
  firebase.auth().onAuthStateChanged(function(user){
    if(user){
    console.log(
      "name "+ user.displayName +"\n" + "email: " + user.email +"\n" + "photoURL: " + user.photoURL +"\n" + "emailVerified: " + user.emailVerified +"\n" + "ID: " + user.uid +"\n" + "Provider Data: " + user.providerData
    );
  }else{
    console.log("Signed Out second");
  }
});
}

function showAlert(){
  navigator.notification.alert(
    "You win!",
    function(){},
    "Title");
}

function takePicture(){navigator.camera.getPicture(onSuccess,onFail,{
  quality: 50,
  destinationType: Camera.DestinationType.FILE_URI,
  sourceType: Camera.PictureSourceType.CAMERA,
  encodingType: Camera.EncodingType.JPEG
});}

function pickPicture(){navigator.camera.getPicture(onSuccess,onFail,{
  quality: 50,
  destinationType: Camera.DestinationType.FILE_URI,
  sourceType: Camera.PictureSourceType.CAMERA,
  encodingType: Camera.EncodingType.JPEG
});}

function onSuccess(imageURI){
  var image = document.getELementbyId('imageAttachments');
  image.src = imageURI;
  console.log(imageURI);
}

function onFail(message){
  console.log(message);
}

function checkAvailable(){
  window.plugins.speechRecognition.isRecognitionAvailable(
  function(){
    console.log("Success");
  }, function(){
    console.log("Failed");
  });
}

$("#cameraButton").click(takePicture);
$("#galleryButton").click(pickPicture);
$("#speech_to_text").click(checkAvailable);
