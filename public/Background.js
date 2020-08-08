/* global chrome */
var getTitleAtUrl = require('get-title-at-url');

chrome.tabs.query({active: true, currentWindow: true}, tabs => {
  let url = tabs[0].url;
  getTitleAtUrl(url,function (title){
    alert(title)
  })
});

// chrome.tabs.onUpdated.addListener(
//     function(tabId, changeInfo, tab) {
//       // read changeInfo data and do something with it
//       // like send the new url to contentscripts.js
//      if (changeInfo.url) {
//        console.log(changeInfo.url);
//        let url = changeInfo.url;
//        getTitleAtUrl(url, function(title){
//           alert(title);
//       });
//       };
//      }
    
//   );