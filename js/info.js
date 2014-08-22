
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
        $('#ext').html("<div id='message'></div>");
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
  console.log("username", object.username)
  console.log("pw", object.password);


  // var decrypted = CryptoJS.AES.decrypt(encrypted, "Secret Passphrase", { format: JsonFormatter });
  //
  //   alert(decrypted.toString(CryptoJS.enc.Utf8));
  //



  // var decrypted = CryptoJS.AES.decrypt(JsonFormatter.parse(object.password), "ayazayaz");
  // debugger;
  // console.log('decrypted', decrypted, decrypted.toString());
  // console.log("d2", decrypted.toString(CryptoJS.enc.Utf8))



  //twitter, facebook, yahoo mail, wellsfargo, linkedin, amazon, ebay, pinterest, paypal, tumblr, instagram, netflix salesforce, vimeo
  //bleacherreport, aol, monster, xfinity/comcast, careerbuilder, github ---20
  $("#signin-email, #email, #username, #userid, #session_key-login, #login-email, #UsernameBox, #LoginForm_username, #ap_email, #userEmail, #user_email, #login_email, #inputEmailHandle, #signup_email, #id_username, #lgnId1, #logonId, #id, #EmailAddress, #user, #JobSeekerLoginV3_cbsys_login_email, #login_field, #login-appleId").val(object.username);
  $("#signin-password, #pass, #passwd, #password, #session_password-login, #login-password, #PasswordBox, #LoginForm_password, #ap_password, #userPassword, #user_password, #inputPassword, #login_password, #signup_password, #logonPassword, #id_password, #pwdId1, #Password, #JobSeekerLoginV3_cbsys_login_password, #login-password").val(object.password);
}


//2--imgur https://imgur.com/signin, apple store https://secure2.store.apple.com/us/sign_in?c=aHR0cDovL3N0b3JlLmFwcGxlLmNvbS91c3wxYW9zZmU4OGZjNWIyNThhYWVhOTM5MzVjZjI2NTk1OGE3MWUwY2Y0MmI2OA&r=SCDHYHP7CY4H9XK2H&s=aHR0cDovL3N0b3JlLmFwcGxlLmNvbS91c3wxYW9zZmU4OGZjNWIyNThhYWVhOTM5MzVjZjI2NTk1OGE3MWUwY2Y0MmI2OA&t=S99KKATD9FP9FHCP4 #login-appleId #login-password,
//1--ny times https://myaccount.nytimes.com/auth/login?URI=http:/www.nytimes.com/subscriptions/Multiproduct/lp3LWLU.html&OQ=adxcQ3D253253Q26adxaQ3D379360Q26pageQ3Dhomepage.nytimes.comQ2Findex.htmlQ26posQ3DBar1Q26campaignIdQ3D46K88#userid #password,
//3--at&t http://www.att.com/, target https://www-secure.target.com/EverestLoginView?langId=-1&storeId=10151&catalogId=10051&lnk=gnav_myaccount #logonId #logonPassword, BoA #id https://www.bankofamerica.com/,
//2--fandago https://www.fandango.com/account/signin?from=%2f #UsernameBox #PasswordBox, tripadvisor https://www.tripadvisor.com/Register,
//2--wall st cheat shher #LoginForm_username #LoginForm_password http://wallstcheatsheet.com/members/index.php?r=register/login, craigslist #inputEmailHandle #inputPassword https://accounts.craigslist.org/login?rt=L&amp;rp=%2Flogin%2Fhome,
//1--white pages #login-email #login-password https://secure.whitepages.com/profile/login,
