console.log("hello from devtools");
console.log(chrome.devtools.network);
console.log(chrome.devtools.panels);

count = 0;
chrome.devtools.network.onRequestFinished.addListener(function(request) {
    console.log(request);
    count++;
});
console.log(count);

chrome.devtools.panels.create(
    "ColdFire",
    "coldfusion10.png",
    "panel.html",
    function(panel) { console.log("hello from callback"); 
});

chrome.devtools.network.onRequestFinished.addListener(
  function(request) {
    console.log(request);
  }
);