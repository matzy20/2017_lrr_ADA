$('li > a').keydown(function(e){
  if (e.which == 9) {
    var subMenu = $(this).next('ul');
    subMenu.addClass('open');
    }
  });