<script>
		let timeout;
		let password = document.getElementById('password');
		let strengthBadge = document.getElementById('StrengthDisp');
		let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
		let mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))')
		function StrengthChecker(PasswordParameter){
        if(strongPassword.test(PasswordParameter)) {
            strengthBadge.style.backgroundColor = "green"
            strengthBadge.textContent = 'Strong'
        } else if(mediumPassword.test(PasswordParameter)){
            strengthBadge.style.backgroundColor = 'blue'
            strengthBadge.textContent = 'Medium'
        } else{
            strengthBadge.style.backgroundColor = 'red'
            strengthBadge.textContent = 'Weak'
        }
		
		password.addEventListener("input", () => {
		strengthBadge.style.display= 'block'
		clearTimeout(timeout);
		timeout = setTimeout(() => StrengthChecker(password.value), 500);

		if(password.value.length !== 0){
			strengthBadge.style.display != 'block'
		} else{
			strengthBadge.style.display = 'none'
		}
});
    }
	  </script>

	  <script type="module">
		
		import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
		import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
		const firebaseConfig = {
		  apiKey: "AIzaSyBghFH9uoDwacU5m7ZhY8Oy1MBKLe7XQQQ",
		  authDomain: "hackathon-592cc.firebaseapp.com",
		  databaseURL: "https://hackathon-592cc-default-rtdb.asia-southeast1.firebasedatabase.app",
		  projectId: "hackathon-592cc",
		  storageBucket: "hackathon-592cc.appspot.com",
		  messagingSenderId: "438630726877",
		  appId: "1:438630726877:web:6d50a73d4df7fe9dd66f34",
		};
	    </script>
	    <script>
		const app = initializeApp(firebaseConfig);
		const analytics = getAnalytics(app);
		const db = getDatabase(app);
		document.getElementById('SignupForm').addEventListener("submit", submitForm); 
		function submitForm(e) 
			{
    			e.preventDefault();		
            	set(ref(db, 'users/' + Math.random().toString(36).slice(2, 7)),{
        		firstname: document.getElementById('fname').value,
				lastname: document.getElementById('lname').value,
        		email: document.getElementById('email').value,
        		phone: document.getElementById('Phone').value,
				loc: document.getElementById('inputCity').value,
        		pass: document.getElementById('password').value
   				});
				alert("Your account has been created")
    			document.getElementById('SignupForm').reset();
			}
	    </script>