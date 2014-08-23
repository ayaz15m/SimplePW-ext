var xhr = new XMLHttpRequest();
xhr.open("GET", "http://simplepw.herokuapp.com/dashboard", true);
xhr.onreadystatechange = function() {
  if (xhr.readyState == 4) {
    console.log("xhr",xhr)
    if(xhr["status"] == 403){
      $('#whole').html("<div id='message'></div>");
      $('#message').html("<br><br><br><center><h2>Please login to continue<br><br><a role='menuitem' tabindex='-1' href='http://simplepw.herokuapp.com/' target='_newtab'>Go to Simple PW</a></h2></center>")
    } else {
      if(xhr["status"] == 404){

        $('#ext').html("<div id='message'></div>");
        $('#message').html("<h2>No sites found!</h2>")

        $('#message').append("<p>Please add sites.</p>")
        $('#message').append("<h3><a href='http://simplepw.herokuapp.com/' target='_newtab'>Go to Simple PW</a></h3>")
      } else {

          var sites = JSON.parse(xhr["response"])["dashboard"]
          var current_site = window.name

          var window_site = $(location).attr('href');

        for (var i = 0; i < sites.length; i++){

          var site = sites[i].url

          $('#dropdown').append("<li role='presentation'><a role='menuitem' tabindex='-1' href='" + site + "' target='_newtab'>" + sites[i].description + "</a></li>")

          if (site == current_site || site == window_site){
              var c = sites[i]
              fill(c)
          }
        }
      }
    }
  }
}
xhr.send();

function fill(object){
  // console.log('username', object.username)

  $("#signin-email, #email, #username, #userid, #session_key-login, #login-email, #UsernameBox, #LoginForm_username, #ap_email, #userEmail, #user_email, #login_email, #inputEmailHandle, #signup_email, #id_username, #lgnId1, #logonId, #id, #EmailAddress, #user, #JobSeekerLoginV3_cbsys_login_email, #login_field, #login-appleId").val(object.username);
  $("#signin-password, #pass, #passwd, #password, #session_password-login, #login-password, #PasswordBox, #LoginForm_password, #ap_password, #userPassword, #user_password, #inputPassword, #login_password, #signup_password, #logonPassword, #id_password, #pwdId1, #Password, #JobSeekerLoginV3_cbsys_login_password, #login-password").val(object.password);
}
