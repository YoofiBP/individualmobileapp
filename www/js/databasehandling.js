var db = firebase.firestore();

//$('#topicButton').click(listVideos($('#anotherSelect :selected').val()));
$('#anotherSelect').change(function(){
  $('.videos').empty();
  var topic  = $('#anotherSelect :selected').text();
  db.collection("videos").where("title", "==", topic).get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          $(".videos").append(doc.data().link);
          $(".videos").append(doc.data().title);
      });
  })
})
