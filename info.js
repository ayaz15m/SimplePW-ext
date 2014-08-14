var xhr = new XMLHttpRequest();
xhr.open("GET", "http://0.0.0.0:3000/dashboard", true);
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {

      var z = JSON.parse(xhr["response"])["dashboard"]
      var s = window.name

      for (var i = 0; i < z.length; i++){
        var site = "https://"+z[i].url+"/"

        if (site == s){
          console.log("site", site)
            var c = z[i]
        }
      }
  }
}
xhr.send();

$('#form').on("submit", function() {

  // console.log('test');

  var formData = {
    'url' 				: $('#exampleInputUrl1').val(),
    'description' 			: $('#exampleInputDescription1').val(),
    'username' 	: $('#exampleInputUsername1').val(),
    'password' 	: $('#exampleInputPassword1').val()
  };

  $.ajax({
    type 		: 'POST', // define the type of HTTP verb we want to use (POST for our form)
    url 		: 'http://0.0.0.0:3000/dashboard', // the url where we want to POST
    data 		: formData, // our data object

  })
});


// console.log("username", "object.username")
// console.log("pw", "object.password")
// // twitter, facebook, yahoo mail, wellsfargo, linkedin, amazon, ebay, pinterest, paypal, tumblr, instagram, netflix salesforce, vimeo
// //bleacherreport, aol, monster, xfinity/comcast, careerbuilder, github ---20
// $("#signin-email, #email, #username, #userid, #session_key-login, #ap_email, #userEmail, #user_email, #login_email, #signup_email, #id_username, #lgnId1, #EmailAddress, #user, #JobSeekerLoginV3_cbsys_login_email, #login_field").val("ayazm");
// $("#signin-password, #pass, #passwd, #password, #session_password-login, #ap_password, #userPassword, #user_password, #login_password, #signup_password, #id_password, #pwdId1, #Password, #JobSeekerLoginV3_cbsys_login_password").val("object.password");
// // $("#body").val("San Francisco");
