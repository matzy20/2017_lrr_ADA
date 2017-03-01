$('li>a').keydown(function(e) {
  if (e.which == 9) {
    //Get the submenu
    var subMenu = $(this).next('ul');
    //console.log('subMenu', subMenu);
    subMenu.addClass('open');
    //Check if you're on the last subchild and close the menu
    console.log('hello', $(this).parent('li'));
    if ($(this).parent('li').is(':last-child:not(".menu>li>a")')) {
      //console.log($(this).parent('li'));
      $(this).parent('li').parent('.open').removeClass('open');
    }
  }
});
