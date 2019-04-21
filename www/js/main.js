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

function takePicture(){
  navigator.camera.getPicture(
    function(imageData){
      var image = document.getELementbyId('imageAttachments');
      image.src = "data:image/jpeg;base64," + imageData;
      console.log("Camera loaded");
    },
    function(message){
      console.log(message);
    },
    {
      destinationType: "FILE_URI",
      sourceType: "CAMERA",
      encodingType: "JPEG",
    }
    //options
);}

$("#takePicture").click(takePicture);
$("#share_with_contact").click(showAlert);
