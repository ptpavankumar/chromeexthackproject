
function click(e) {
  if (e.target.id === 'reset') {
    chrome.tabs.executeScript(null,
        {code:"document.body.style.backgroundColor='white'"});
  } else {
    chrome.tabs.executeScript(null,
        {code:"document.body.style.backgroundColor='" + e.target.id + "'"});
  }

  //window.close();
}

console.log('Welcome to myob plugin!');

$.ajax({
  type: "GET",
  url: "https://qa4-practice.addevcloudservices.com.au/healthcheck",
  //data: data,
  success: function(msg){
    console.log(JSON.stringify(msg));
  },
  error: function(){
    console.log("Error occurred!");
  }
});


document.addEventListener('DOMContentLoaded', function () {
  // var divs = document.querySelectorAll('div');
  // for (var i = 0; i < divs.length; i++) {
  //   divs[i].addEventListener('click', click);
  // }
  $( "#partner" ).click(function() {
    alert( "healthcheck called!" );
  });

  $( "#portalUrl" ).click(function() {
    //console.log('url>>>>>>>', $("#portalUrl").href);
    chrome.tabs.create({url: $("#portalUrl")[0].href},function(tab) {
      console.log('tab id', tab);
    });
  });

  // var checkPageButton = document.getElementById('checkPage');
  // checkPageButton.addEventListener('click', function() {
  //
  //   chrome.tabs.getSelected(null, function(tab) {
  //     d = document;
  //
  //     var f = d.createElement('form');
  //     f.action = 'https://qa4-practice.addevcloudservices.com.au/healthcheck';
  //     f.method = 'get';
  //     var i = d.createElement('input');
  //     i.type = 'hidden';
  //     i.name = 'url';
  //     i.value = tab.url;
  //     f.appendChild(i);
  //     d.body.appendChild(f);
  //     f.submit();
  //   });
  // }, false);
});