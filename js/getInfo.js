// $(function() {

// 	// just place a div at top right
// 	var div = document.createElement('div');
// 	div.style.position = 'fixed';
// 	div.style.top = 0;
// 	div.style.right = 0;
// 	div.textContent = 'Injected!';
// 	document.body.appendChild(div);

// 	var x = $('.full-name').text();

// 	console.log(x);

// 	alert('inserted self... giggity');

// })();

// $(document).ready(function(){
// 	$('#logo>img').after('<img src="'+chrome.extension.getURL('icon.png')+'">').remove();
// });



// chrome.runtime.sendMessage({greeting:'hello'},function(response){
//     console.log('sent');
//   })

// chrome.extension.onMessage.addListener(function(request,sender){
// 	console.log(request.type);
// 	console.log(sender);
// 	alert('hi');
// })

chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
	console.log('received a request', request.action);
   switch(request.action) {
       case "clickEvent":
           scrapeIt();
           break;
   }

   return true;
});

function scrapeIt(){

	var dataObj ={};
	dataObj.name = $('.full-name').text();
	dataObj.title = $('.title').text();
	dataObj.location = $('#location-container .locality').text();
	dataObj.industry = $('.industry').text();
	dataObj.education = $('#overview-summary-education li').text();
	dataObj.photoUrl = $('.profile-picture img').attr('src');
	console.log(dataObj);

	chrome.runtime.sendMessage({
		action:"getSource",
		source: dataObj
	}, function(){});


}
 
// $(document).ready(function(){
// 	var dataObj ={};
// 	dataObj.name = $('.full-name').text();
// 	dataObj.title = $('.title').text();
// 	dataObj.location = $('#location-container .locality').text();
// 	dataObj.industry = $('.industry').text();
// 	dataObj.education = $('#overview-summary-education li').text();
// 	dataObj.photoUrl = $('.profile-picture img').attr('src');

// 	console.log(dataObj);

// 	// chrome.runtime.sendMessage({data:dataObj},function(response){
// 	// 	console.log("sent");
// 	// })

// 	chrome.runtime.sendMessage({
// 		action:"getSource",
// 		source: dataObj
// 	}, function(){});


	
// })







