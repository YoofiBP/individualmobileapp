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

$('#add_entry').click(function(){
  var user = firebase.auth().currentUser;
  db.collection('entries').add({
    title: $('#journal_title').val(),
    content: $('#journal_post').val(),
    userdisplayName: user.displayName
  }).then(function(docRef){
    console.log(docRef.id);
    $.mobile.changePage("#journal");
  }).catch(function(error){
    console.log(error);
  });
})
