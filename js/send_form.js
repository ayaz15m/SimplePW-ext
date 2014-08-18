$('#form').submit(function() {
  event.preventDefault();
  if (document.getElementById('exampleInputUrl1').value == "" || document.getElementById('exampleInputDescription1').value == "" || document.getElementById('exampleInputUsername1').value == "" || document.getElementById('exampleInputPassword1').value == "" ) {
    if($('#warn').val() == null){
      $('#contact_form').prepend("<h3><font color='red' id='warn'>All fields are required</font></h3><br><br>");
    }
  } else {
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
