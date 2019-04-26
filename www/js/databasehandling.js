var db = firebase.firestore();

function listVideos(title){
  db.collection("videos").where("title", "==", title).get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          $(".videos").append(doc.data().link);
          $(".videos").append(doc.data().title);
      });
  })
}


$('#anotherSelect').change(listVideos($('#anotherSelect :selected').text()));
//$('#anotherSelect').change(function(){location.reload()});
