chrome.runtime.onMessage.addListener(
    function (req, sender, sendResponse) {

        if (req.action == 'alert') {
            chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
                chrome.tabs.captureVisibleTab(null, {}, function (image) {
                    alert('Image captured!');
                });
            });
        }

        if (req.action == 'browse') {
            console.log(document);
            var myForm = document.createElement("FORM");
            var myFile = document.createElement("INPUT");
            myFile.type = "file";
            myFile.id = "selectFile";
            myFile.onclick = "openDialog()";
            myForm.appendChild(myFile);
            var myButton = document.createElement("INPUT");
            myButton.name = "submit";
            myButton.type = "submit";
            myButton.value = "Submit";
            myForm.appendChild(myButton);
            document.body.appendChild(myForm);
        };
    }
);