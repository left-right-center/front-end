/* global chrome */
var getTitleAtUrl = require('get-title-at-url');

chrome.tabs.onUpdated.addListener(
    function(tabId, changeInfo, tab) {
      // read changeInfo data and do something with it
      // like send the new url to contentscripts.js
     if (changeInfo.url) {
       console.log(changeInfo.url);
       let url = changeInfo.url;
       getTitleAtUrl(url, function(title){
          alert(title);
      });
      };
     }
    
  );