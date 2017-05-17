function getTargetContent() {
  var foo = $('.foo');
  if (foo.length > 0) {
    var bar = foo.find('.bar');
    if (bar.length > 0) {
      var content = bar.find('#target');
      return content.text();
    }
  }
}


$(document).ready(function(){
  alert(getTargetContent())
});
