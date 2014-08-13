chrome.tabs.getSelected(null, function(tab) {
  // document.getElementById('currentLink').innerHTML = tab.url;
  window.name = tab.url;
  $("#exampleInputUrl1").val(tab.url)
});

function hello() {
  chrome.tabs.executeScript({
    file: 'info.js'
  });
}

// document.getElementById('clickme').addEventListener('click', fill);
// function fill(){
// $("#body").val("San Francisco")
//
// }

document.getElementById('clickme').addEventListener('click', fill);
function fill(){
$("#body").val("San Francisco");
}
