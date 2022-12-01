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
    function search(){
    search=document.getElementById('search').value.toUpperCase();
    var ref=firebase.database().ref('Users');
    ref.child('Users').orderByChild('name').limitToFirst(5).equalTo(search).on("value", function(snapshot) {
    console.log(snapshot.val());
    });
    }