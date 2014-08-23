
$('#form').submit(function() {
  event.preventDefault();
  if (document.getElementById('exampleInputUrl1').value == null || document.getElementById('exampleInputDescription1').value == "" || document.getElementById('exampleInputUsername1').value == "" || document.getElementById('exampleInputPassword1').value == "" ) {
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

      $.post('http://simplepw.herokuapp.com/dashboard', formData);

      $('#contact_form').html("<div id='message'></div>");
      $('#message').html("<h2>Site has been added!</h2>")

  }
});
