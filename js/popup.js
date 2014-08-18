// chrome.webRequest.onHeadersReceived.addListener(function(details) {
//     // ... your code that checks whether the request should be blocked ...
//     //  (omitted for brevity)
//     var scheme = /^https/.test(details.url) ? "https" : "http";
//     return {redirectUrl: scheme + "://robwu.nl/204" };
// }, {
//     urls: ["<all_urls>"],
//     types: ["main_frame", "sub_frame"]
// }, ["responseHeaders", "blocking"]);
//

chrome.tabs.getSelected(null, function(tab) {
  // document.getElementById('currentLink').innerHTML = tab.url;
  window.name = tab.url;
  $("#exampleInputUrl1").val(tab.url)
});

// chrome.tabs.executeScript(null, {
//     file: 'bg.js'
// });

// $(document).ready(function(){
// $('#clickme').on('click', function() {
//   chrome.runtime.sendMessage({ data: "test"}, function(response){
//     console.log(response);
//   });
// });
//
//
// // document.getElementById('clickme').addEventListener('click', hello);
//
// function hello(){
//   console.log("hello")
//   // console.log()
//   // $("#body").val("Santa");
// //   chrome.tabs.executeScript(null,
// //       {code:"document.body.style.backgroundColor='" + e.target.id + "'"});
// //       console.log(e.target.id)
// //   window.close();
// // }
//
// }
