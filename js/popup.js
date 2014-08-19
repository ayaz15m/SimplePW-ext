chrome.tabs.getSelected(null, function(tab) {
  // document.getElementById('currentLink').innerHTML = tab.url;
  window.name = tab.url;
  $("#exampleInputUrl1").val(tab.url)
});

$(document).ready(function(){
  $('#clickme').on('click', function() {
    document.getElementById('clickme').addEventListener('click', fill_in);
  });
});

function fill_in(){
  chrome.tabs.executeScript({ code: 'window.username = "' + window.username });
  chrome.tabs.executeScript({ code: 'window.password = "' + window.password });
  chrome.tabs.executeScript({ file: 'js/jquery.js' });
  chrome.tabs.executeScript({ file: 'js/fill_form.js' });
}
