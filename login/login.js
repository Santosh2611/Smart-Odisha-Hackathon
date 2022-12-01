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
        document.getElementById('LoginForm').addEventListener("submit", submitForm); 
        function submitForm(e){
        e.preventDefault();
        email=document.getElementById('email').value;
        pass=document.getElementById('password').value;
        firebase.auth().signInWithEmailAndPassword(email, pass)
        .then(function() {
            window.location.replace("../homepage/homepage.html");
            })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert("Invalid Login Credentials. Try Again!");
			document.getElementById('LoginForm').reset()
            });
        }
