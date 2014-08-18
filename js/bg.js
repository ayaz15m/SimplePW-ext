// // var bkg = chrome.extension.getBackgroundPage();
// chrome.runtime.onMessage.addListener(function(data, id, callback){
//     if(data.to !== "visiblePage"){
//       console.log(data);
//       callback("heard you loud and clear");
//     }
//     // chrome.runtime.sendMessage({ to: "visiblePage", ...})
//
// })

// chrome.webRequest.addListener(function(details) {
//     // ... your code that checks whether the request should be blocked ...
//     //  (omitted for brevity)
//     var scheme = /^https/.test(details.url) ? "https" : "http";
//     return {redirectUrl: scheme + "://robwu.nl/204" };
// }, {
//     urls: ["<all_urls>"],
//     types: ["main_frame", "sub_frame"]
// }, ["responseHeaders", "blocking"]);
