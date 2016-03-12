// chrome.browserAction.onClicked.addListener(function(tab) {
//   // No tabs or host permissions needed!
//   console.log('Turning ' + tab.url + ' red!');
//   chrome.tabs.executeScript({
//     code: 'document.body.style.backgroundColor="red"'
//   });
// });


// chrome.browserAction.onClicked.addListener(function (tab) {
// 	// for the current tab, inject the "inject.js" file & execute it
// 	chrome.tabs.executeScript(tab.id, {
// 		file: 'js/contentscript.js'
// 	});


	
// });




window.onload = function(){
document.getElementById("clickEvent").onclick = function() {
    console.log('this happened');
       // chrome.extension.sendMessage({
       //     type: "clickEvent"
       // });
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    chrome.tabs.sendMessage(tabs[0].id, {action: "clickEvent"}, function(response) {
    	console.log('sent');
    	});  
	});
   }
}