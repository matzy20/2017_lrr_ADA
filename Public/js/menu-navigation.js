$('li > a').keydown(function(e){

  var subMenu = $(this).next('ul');
  if (e.which == 9) {
    subMenu.addClass('open');
  }
  else{
    subMenu.removeClass('open');
  }

  console.log($('ul.sub-menu > li').length);
  });