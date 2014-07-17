chrome.browserAction.onClicked.addListener(function(tab) {
    console.log(tab.id);
    chrome.tabs.executeScript(tab.id, {file: 'js/colourlize.js'})
});
