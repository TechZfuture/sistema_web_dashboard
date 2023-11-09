const firebaseConfig = {
    apiKey: "AIzaSyCs544yD8ZWo1dFVsSdm34tCzUU-98hh0M",
    authDomain: "colegio-6e684.firebaseapp.com",
    projectId: "colegio-6e684",
    storageBucket: "colegio-6e684.appspot.com",
    messagingSenderId: "572783225840",
    appId: "1:572783225840:web:a94b0cab53649970664b35",
    measurementId: "G-3CV57109EF",
  };
  
  firebase.initializeApp(firebaseConfig);

  let auth = firebase.auth();

  function login() {
    auth.signInWithEmailAndPassword(form.email().value, form.password().value).then(user => {
        window.location.href = "../pages/home.html"
    }).tach(error => {
        console.log(error)
    })
  }