console.log('Welcome to myob plugin!');


document.addEventListener('DOMContentLoaded', function () {
  // var divs = document.querySelectorAll('div');
  // for (var i = 0; i < divs.length; i++) {
  //   divs[i].addEventListener('click', click);
  // }
  $( "#partner" ).click(function() {
    alert( "healthcheck called!" );
  });

  $( "#portalUrl" ).click(function() {
    chrome.tabs.create({url: $("#portalUrl")[0].href},function(tab) {
      console.log('tab id', tab);
    });
  });

  $( "#createTaskUIUrl" ).click(function() {
    chrome.tabs.create({url: $("#portalUrl")[0].href},function(tab) {
      console.log('tab id', tab);
    });
  });

});