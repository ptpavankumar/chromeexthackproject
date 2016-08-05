console.log('Welcome to myob plugin!');


document.addEventListener('DOMContentLoaded', function () {
  $( "#createTaskButton" ).click(function() {
    alert( "Task created!" );
    window.close()
  });
});
