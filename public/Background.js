
/* global chrome */
 //var getTitleAtUrl = require('get-title-at-url');

chrome.tabs.onUpdated.addListener(
    function(tabId, changeInfo, tab) {
      // read changeInfo data and do something with it
      // like send the new url to contentscripts.js
     if (changeInfo.url && changeInfo.status === "complete") {
        // your code here
     
       console.log(changeInfo.url);
       let url = changeInfo.url;
      //  getTitleAtUrl(url, function(title){
      //     alert("This is " + title);
      // });
      // };
      chrome.tabs.query({ active: true }, function (tab) {
        console.log(tab)
        console.log(""+tab[0].title)
      });
     }
    }
  );
