

// document.addEventListener('DOMContentLoaded', function() {
//   var checkPageButton = document.getElementById('checkPage');
//   checkPageButton.addEventListener('click', function() {

//     chrome.tabs.getSelected(null, function(tab) {
//       d = document;

//       var f = d.createElement('form');
//       f.action = 'http://gtmetrix.com/analyze.html?bm';
//       f.method = 'post';
//       var i = d.createElement('input');
//       i.type = 'hidden';
//       i.name = 'url';
//       i.value = tab.url;
//       f.appendChild(i);
//       d.body.appendChild(f);
//       f.submit();
//     });
//   }, false);
// }, false);


 chrome.runtime.onMessage.addListener(function(){

     $.ajax({
    method: "POST",
    url: "http://127.0.0.1:3000/",
    data: arguments[0].source
      })
    .done(function( msg ) {
      alert( "Data Saved: " + msg );
    });


 })



// chrome.runtime.onMessage.addListener(function(request, sender) {
//   if (request.action == "getSource") {
//       message.innerText = request.source;
//   }
// });


// chrome.runtime.onMessage.addListener(function(request,sender){
//   console.log('recevied', request.data);
// })

// chrome.runtime.onMessage.addListener(
//   function(request, sender, sendResponse) {
//     console.log(sender.tab ?
//                 "from a content script:" + sender.tab.url :
//                 "from the extension");
//     if (request.greeting == "hello")
//       sendResponse({farewell: "goodbye"});
//   });


// window.onload = function() {


// }

// chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//   chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
//     console.log(response.farewell);
//   });
// });




  // chrome.extension.sendMessage({type:'jai'});
  // // var message = document.querySelector('#message');
  // console.log(chrome)

  // chrome.tabs.executeScript(null, {
  //   file: "js/getInfo.js"
  // }, function() {
  //   // If you try and inject into an extensions page or the webstore/NTP you'll get an error
  //   if (chrome.runtime.lastError) {
  //     message.innerText = 'There was an error injecting script : \n' + chrome.runtime.lastError.message;
  //   }
  // });





 //window.onload = onWindowLoad;