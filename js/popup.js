chrome.tabs.getSelected(null, function(tab) {
  // document.getElementById('currentLink').innerHTML = tab.url;
  window.name = tab.url;
  $("#exampleInputUrl1").val(tab.url)
});

// chrome.tabs.executeScript(null, {
//     file: 'info.js'
// });

// $(document).ready(function(){
$('#clickme').on('click', function() {
  chrome.runtime.sendMessage({ data: "test"}, function(response){
    console.log(response);
  });
});


// document.getElementById('clickme').addEventListener('click', hello);

function hello(){
  console.log("hello")
  // console.log()
  // $("#body").val("Santa");
//   chrome.tabs.executeScript(null,
//       {code:"document.body.style.backgroundColor='" + e.target.id + "'"});
//       console.log(e.target.id)
//   window.close();
// }

}
