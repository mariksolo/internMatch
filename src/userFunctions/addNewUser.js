export function addNewUser(user, db) {
    db.collection("users").doc(user.uid).set({
        displayName: user.displayName,
        email: user.email,
        uid: user.uid,
      })
      .then(function() {
        console.log("Document written");

      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
    
}
