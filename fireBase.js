var app_firebase = {};

  (function(){
  var firebaseConfig = {
    apiKey: "AIzaSyAM7f13JjoJugtR70kL-Gp_6hNq-xcumt0",
    authDomain: "rmtfirebaseproject.firebaseapp.com",
    databaseURL: "https://rmtfirebaseproject.firebaseio.com",
    projectId: "rmtfirebaseproject",
    storageBucket: "rmtfirebaseproject.appspot.com",
    messagingSenderId: "583859729743",
    appId: "1:583859729743:web:4a3627e7dbb34fd1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  app_firebase = firebase;
})()
