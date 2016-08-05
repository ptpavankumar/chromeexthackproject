chrome.contextMenus.create({
    'title': 'Get Metadata',
    'contexts': ['link'],
    'onclick': onClickHandler
});

function onClickHandler(info) {
    var details = {}

    details.title = info.selectionText;
    details.url = info.linkUrl;
    details.editable = info.editable;
    details.id = info.menuItemId;
    details.pageUrl = info.pageUrl;
    details.text = info.selectionText;

    chrome.windows.create({ url: 'createTask.html', type: 'popup', left: 1500, top: 300, width: 400, height: 1200 }, function() {
        console.log('Im in called after creation of popup!');

        chrome.runtime.sendMessage({ details: details }, function(response) {
            alert('Im in called after creation of popup!');
        });
    });
}
