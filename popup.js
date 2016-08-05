console.log('Welcome to myob plugin!');


document.addEventListener('DOMContentLoaded', function () {

    $("#openPracticeOnline").click(function () {
        chrome.tabs.create({url: "http://partner.myob.com"}, function (tab) {
            console.log('tab id', tab);
        });
    });

    $("#createTask").click(function () {
        chrome.windows.create({
            type: "panel",
            url: 'createTask.html',
            left: 1500,
            width: 400,
            height: 1200
        }, function () {
            console.log('Im in called after creation of popup!');


        });
    });

    $("#takeSnapshot").click(function () {
        chrome.runtime.sendMessage({action: "alert", text: "STOP!"}, function(response) {
            console.log('message sent!')
        });
    });

    $("#uploadFile").click(function () {

        chrome.runtime.sendMessage({
            action: 'browse'
        });
        // chrome.tabs.create({url: "http://partner.myob.com" },function(tab) {
        //   chrome.runtime.sendMessage({
        //     action: 'browse'
        //   });
        // });
    });
});