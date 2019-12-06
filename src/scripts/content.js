import $ from 'jquery';

// const $keywordInput = $('input[name=keyword]');
// const $fiveInput = $('input[name=five]');
// console.log($keywordInput, $fiveInput)
// $keywordInput.on('keypress', (e) => {
//   if (e.which === 13) {
// 	var port = chrome.runtime.connect({name: "html"});
// 	port.postMessage({joke: "Knock knock"});
//   }
// });

// content.js
var firstHref = $("a[href^='https']").eq(0).attr("href");

console.log(firstHref);

// content.js
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
	if( request.message === "clicked_browser_action" ) {
	  var firstHref = $("a[href^='https']").eq(0).attr("href");

	  console.log(firstHref);

	  // This line is new!
	  chrome.runtime.sendMessage({"message": "open_new_tab", "url": firstHref});
	}
  }
);


