const firebaseConfig = {
    apiKey: "AIzaSyA_sHmbSssZG-uC5NyjbJ5TUqUHRKbC04U",
    authDomain: "smartodishahack-1ff81.firebaseapp.com",
    databaseURL: "https://smartodishahack-1ff81-default-rtdb.firebaseio.com",
    projectId: "smartodishahack-1ff81",
    storageBucket: "smartodishahack-1ff81.appspot.com",
    messagingSenderId: "184914579055",
    appId: "1:184914579055:web:81d5161effd88e72acc79a",
    measurementId: "G-HDJLVLQ9VW"
    };
    firebase.initializeApp(firebaseConfig);
    document.getElementById('ForgotPassword').addEventListener("submit", submitForm);
    function submitForm(e)
    {
    e.preventDefault();
    email=document.getElementById('email').value;
    firebase.auth().sendPasswordResetEmail(email)
    .then(function() {
        alert("Mail Sent");
        })
    .catch((error) => {
        alert("We couldn't find an account associated with this email. Please try with an alternate email.");
        });
    }
    