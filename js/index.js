import { app, auth } from "../config.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User

    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    window.location.href = "../auth/auth.html";
  }
});

document.getElementById("signout-button").addEventListener("click", function() {
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    console.error(error)
  });
});