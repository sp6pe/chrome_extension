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
 
$(document).ready(function(){
	var dataObj ={};
	dataObj.name = $('.full-name').text();
	dataObj.title = $('.title').text();
	dataObj.location = $('#location-container .locality').text();
	dataObj.industry = $('.industry').text();
	dataObj.education = $('#overview-summary-education li').text();
	dataObj.photoUrl = $('.profile-picture img').attr('src');

	console.log(dataObj);

	// chrome.runtime.sendMessage({data:dataObj},function(response){
	// 	console.log("sent");
	// })

	chrome.runtime.sendMessage({
		action:"getSource",
		source: dataObj
	}, function(){});


 //   $.ajax({
	//   method: "POST",
	//   url: "http://127.0.0.1:3000/",
	//   data: {temp:true}
	// })
	//   .done(function( msg ) {
	//     alert( "Data Saved: " + msg );
	//   });

	
})




// function DOMtoString(document_root) {
//     var html = '',
//         node = document_root.firstChild;
//     while (node) {
//         switch (node.nodeType) {
//         case Node.ELEMENT_NODE:
//             html += node.outerHTML;
//             break;
//         case Node.TEXT_NODE:
//             html += node.nodeValue;
//             break;
//         case Node.CDATA_SECTION_NODE:
//             html += '<![CDATA[' + node.nodeValue + ']]>';
//             break;
//         case Node.COMMENT_NODE:
//             html += '<!--' + node.nodeValue + '-->';
//             break;
//         case Node.DOCUMENT_TYPE_NODE:
//             // (X)HTML documents are identified by public identifiers
//             html += "<!DOCTYPE " + node.name + (node.publicId ? ' PUBLIC "' + node.publicId + '"' : '') + (!node.publicId && node.systemId ? ' SYSTEM' : '') + (node.systemId ? ' "' + node.systemId + '"' : '') + '>\n';
//             break;
//         }
//         node = node.nextSibling;
//     }

//     return html;
// }

//    $(document).ready(function(){
// 	var x = $(".full-name").text();
// });

//  	console.log(x);
//  	return x;

// }

// chrome.runtime.sendMessage({
//     action: "getSource",
//     source: DOMtoString(document)
// });






