import $ from 'jquery';

var firstHref = $("a[href^='https']").eq(0).attr("href");

console.log(firstHref);

// content.js
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(request)
	if( request.message === "enter" ) {
	  const { keyword, five } = request;
	  const as = $('a');
	  console.log(keyword, five);
	  as.each((index, a) => {
		if ($(a).text().indexOf(keyword) !== -1) {
		  $(a).css('background', 'red');
		}
	  })
	}
  }
);


