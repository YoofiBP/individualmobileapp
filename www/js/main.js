document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady(){
  console.log(navigator.camera);
}

function showAlert(){
  navigator.notification.alert(
    "You win!",
    function(){},
    "Title");
}

// function setOptions(srcType){
//   var options = {
//     quality: 50,
//     destinationType: Camera.DestinationType.FILE_URI,
//     sourceType: srcType,
//     encodingType: Camera.EncodingType.JPEG,
//   };
//   return options;
// }

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
