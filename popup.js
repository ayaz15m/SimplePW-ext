chrome.tabs.getSelected(null, function(tab) {
  document.getElementById('currentLink').innerHTML = tab.url;
  window.name = document.getElementById('currentLink').innerHTML = tab.url;
});

function hello() {
  chrome.tabs.executeScript({
    file: 'info.js'
  });
}

document.getElementById('clickme').addEventListener('click', hello);
