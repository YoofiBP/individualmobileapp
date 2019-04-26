var db = firebase.firestore();


db.collection("videos").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().link}`);
    });
});
