// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });


//example of using a message handler from the inject scripts
/*
chrome.extension.onMessage.addListener(
    function (request, sender, sendResponse) {
        chrome.pageAction.show(sender.tab.id);
        sendResponse();
    });
chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.executeScript(tab.id, {
        file: 'src/inject/inject.js'
    });
});
*/

var x = false;
disableBrowserAction();

function disableBrowserAction(){
    chrome.browserAction.setIcon({path:"src/icons/icon-inactive48.png"});
    chrome.tabs.executeScript(null, {file: "src/inject/inactive.js"})
}

function enableBrowserAction(){
    chrome.browserAction.setIcon({path:"src/icons/icon-active48.png"});
    chrome.tabs.executeScript(null, {file: "src/inject/inject.js"});
}

function updateState(){
    if(x==false){
        x=true;
        enableBrowserAction();
    }else{
        x=false;
        disableBrowserAction();
    }
}

chrome.browserAction.onClicked.addListener(updateState);