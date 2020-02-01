


 var firebaseConfig = {
  apiKey: "AIzaSyCo9SGCze7mPZQrYCwWDz8_bQV8kcnRoFs",
  authDomain: "login-form-9b0d1.firebaseapp.com",
  databaseURL: "https://login-form-9b0d1.firebaseio.com",
  projectId: "login-form-9b0d1",
  storageBucket: "login-form-9b0d1.appspot.com",
  messagingSenderId: "294810059319",
  appId: "1:294810059319:web:81b3216671094c4baaf5b2",
  measurementId: "G-TH8RX2GF17"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  const auth=firebase.auth();

  //get firebase element

  
  
   




function myfunction(){

location.replace("C:\Users\songul\Desktop\tesoki\single.html");


}


function prefunction(){

location.replace('proj2.html');

}


//pass matching
$('#password, #confirm-password').on('keyup', function () {
    if ($('#password').val() == $('#confirm-password').val()) {
        $('#message').html('Matching').css('color', 'green');
    } else 
        $('#message').html('Not Matching').css('color', 'red');
});


function postfunction(){


  location.replace('createpost.html');

}

//upload img from desktop
$(document).ready(function() {

    
  var readURL = function(input) {
      if (input.files && input.files[0]) {
          var reader = new FileReader();

          reader.onload = function (e) {
              $('.avatar').attr('src', e.target.result);
          }
  
          reader.readAsDataURL(input.files[0]);
      }
  }
  

  $(".file-upload").on('change', function(){
      readURL(this);
  });
});





