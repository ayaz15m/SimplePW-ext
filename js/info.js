var xhr = new XMLHttpRequest();
xhr.open("GET", "http://0.0.0.0:3000/dashboard", true);
xhr.onreadystatechange = function() {
  if (xhr.readyState == 4) {
    console.log("xhr",xhr)
    if(xhr["status"] == 403){
      $('#whole').html("<div id='message'></div>");
      $('#message').html("<br><br><br><center><h2>Please login to continue<br><br><a role='menuitem' tabindex='-1' href='http://0.0.0.0:3000/' target='_newtab'>Go to Simple PW</a></h2></center>")
      // $('#dropdown').append("<li role='presentation'>Please log in to continue <a role='menuitem' tabindex='-1' href='http://0.0.0.0:3000/' target='_newtab'>Go to Simple PW</a></li>")
    } else {
      var z = JSON.parse(xhr["response"])["dashboard"]
      var s = window.name
      // console.log("window1",window.name)
      var ww = $(location).attr('href');
      // console.log("window22",ww)


      // console.log(z.length)
      if(z.length == 0){
        $('#home').html("<div id='message'></div>");
        $('#message').html("<h2>No sites found!</h2>")

        $('#message').append("<p>Please add sites.</p>")
        $('#message').append("<h3><a href='http://0.0.0.0:3000/' target='_newtab'>Go to Simple PW</a></h3>")
      }


      for (var i = 0; i < z.length; i++){
        var site = z[i].url
        // console.log(i, z[i].url)
        $('#dropdown').append("<li role='presentation'><a role='menuitem' tabindex='-1' href='" + site + "' target='_newtab'>" + z[i].description + "</a></li>")

        if (site == s || site == ww){
          // console.log("site", site)
            var c = z[i]
            // console.log("c", c)

            doSomething(c)
        }
      }
    }
  }
}
xhr.send();

function doSomething(object){
  window.username = object.username
  window.password = object.password

  // console.log('object', object)
  // console.log("username", object.username)
  // console.log("pw", object.password)

  //twitter, facebook, yahoo mail, wellsfargo, linkedin, amazon, ebay, pinterest, paypal, tumblr, instagram, netflix salesforce, vimeo
  //bleacherreport, aol, monster, xfinity/comcast, careerbuilder, github ---20
  // $("#signin-email, #email, #username, #userid, #session_key-login, #ap_email, #userEmail, #user_email, #login_email, #signup_email, #id_username, #lgnId1, #EmailAddress, #user, #JobSeekerLoginV3_cbsys_login_email, #login_field").val(object.username);
  // $("#signin-password, #pass, #passwd, #password, #session_password-login, #ap_password, #userPassword, #user_password, #login_password, #signup_password, #id_password, #pwdId1, #Password, #JobSeekerLoginV3_cbsys_login_password").val(object.password);
}
