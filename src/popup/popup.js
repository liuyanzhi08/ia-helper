import $ from 'jquery';

const $keywordInput = $('input[name=keyword]');
const $fiveInput = $('input[name=five]');
console.log($keywordInput, $fiveInput)
$keywordInput.on('keypress', (e) => {
  if (e.which === 13) {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	  var activeTab = tabs[0];
	  chrome.tabs.sendMessage(activeTab.id, {
	    message: 'enter',
	    keyword: $keywordInput.val(),
		five: $fiveInput.val()
	  });
	});
  }
});
