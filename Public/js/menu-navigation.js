$('li > a').keydown(function(e){

var subMenuChildren = document.getElementsByTagName("li");
var subMenu = $(this).next('ul');

for (var i = 0; i < subMenuChildren.length; i++){
  var lastDropdown = document.getElementsByClassName('lastDropdown');

  if (e.which == 9 && subMenuChildren !== lastDropdown) {
    subMenu.addClass('open');
  }
  else{
    subMenu.removeClass('open');
  }
}
});