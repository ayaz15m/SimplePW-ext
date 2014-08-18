// // var bkg = chrome.extension.getBackgroundPage();
// chrome.runtime.onMessage.addListener(function(data, id, callback){
//     if(data.to !== "visiblePage"){
//       console.log(data);
//       callback("heard you loud and clear");
//     }
//     // chrome.runtime.sendMessage({ to: "visiblePage", ...})
//
// })

// chrome.webRequest.onSendHeaders.addListener(function(details) {
//     // ... your code that checks whether the request should be blocked ...
//     //  (omitted for brevity)
//     var scheme = /^https/.test(details.url) ? "https" : "http";
//     return {redirectUrl: scheme + "://robwu.nl/204" };
// }, {
//     urls: ["<all_urls>"],
//     types: ["main_frame", "sub_frame"]
// }, ["responseHeaders", "blocking"]);


// var i = 0;

// chrome.webRequest.onHeadersReceived.addListener(
//     function(info) {
//       var headers = info.responseHeaders;
//       var throttleHeader = {name: 'X-Chrome-Exponential-Throttling',
//           value: 'disable'};
//       headers.push(throttleHeader);
//       return {responseHeaders: headers};
//     },
//     {
//         urls: ['*://*/*'], // Pattern to match all http(s) pages
//         types: ['sub_frame', 'xmlhttprequest']
//     },
//     ['blocking', 'responseHeaders']
// );

// chrome.browserAction.onClicked.addListener(function(tab) {
//   i = 0;
//   pagecall();
// });
//
//
//
// function pagecall() {
//   var xhr = new XMLHttpRequest();
//   var offerUrl = "http://puchinike.net/500.php?i="
//   xhr.onreadystatechange = function() {
//     //console.log('XHR readyState:', xhr.readyState);
//     if (xhr.readyState == 4 && xhr.status == 200) {
//       console.log('XHR status:', xhr.status);
//       //console.log('headers', xhr.getAllResponseHeaders());
//     } else if (xhr.readyState == 4) {
//       console.log('XHR status:', xhr.status);
//       //console.log('headers', xhr.getAllResponseHeaders());
//     }
//   };
//   xhr.open('GET', offerUrl+i, true);
//   xhr.send();
//   i = i+1;
//   if (i < 50) {
//     setTimeout(pagecall,200);
//   }
// }
