chrome.tabs.getSelected(null, function(tab) {
  window.name = tab.url;
  $("#exampleInputUrl1").val(tab.url)
});
