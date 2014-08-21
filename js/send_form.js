$('#form').submit(function() {
  event.preventDefault();
  // document.write('<script type="text/javascript" src="http://crypto-js.googlecode.com/svn/tags/3.1.2/build/rollups/aes.js"></script>');
  if (document.getElementById('exampleInputUrl1').value == null || document.getElementById('exampleInputDescription1').value == "" || document.getElementById('exampleInputUsername1').value == "" || document.getElementById('exampleInputPassword1').value == "" ) {
    if($('#warn').val() == null){
      $('#contact_form').prepend("<h3><font color='red' id='warn'>All fields are required</font></h3><br><br>");
    }
  } else {
      // var password = encrypt($('#exampleInputPassword1').val());
      // var plaintext = 'pssst ... đon’t tell anyøne!';

        // var encryptedAES = CryptoJS.AES.encrypt(password, plaintext);
      var encryptedAES = CryptoJS.AES.encrypt("Message", "ayaz");
      // var ayaz = prompt("Secret Passphrase")
      // var decrypted = CryptoJS.AES.decrypt(encryptedAES, ayaz);
      // console.log("prompt", ayaz)
      // console.log("decrypted1",decrypted.toString(CryptoJS.enc.Utf8));
      // var encryptedAES2 = CryptoJS.AES.encrypt("Message2", "Secret Passphrase");
      // var decrypted2 = CryptoJS.AES.decrypt(encryptedAES2, "Secret Passphrase");
      // console.log("decrypted2",decrypted2.toString(CryptoJS.enc.Utf8));

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

      $('#contact_form').html("<div id='message'></div>");
      $('#message').html("<h2>Site has been added!</h2>")

  }
});

//
// function encrypt(text){
//   var cipher = crypto.createCipher('aes-256-cbc','d6F3Efeq')
//   var crypted = cipher.update(text,'utf8','hex')
//   crypted += cipher.final('hex');
//   return crypted;
// }
