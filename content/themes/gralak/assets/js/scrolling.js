(function () {
  $sidebar = $('#gralak-sidebar');

  $(window).scroll(function (e) {
    var y = window.scrollY;
    var topValue = y * 2;

    if (y < 2000 && $sidebar.width() <= 250) {
      $sidebar.css({ top: -topValue + 'px' });
    }
  });

  if (window.location.href.toLowerCase().indexOf('?writing') !== -1) {
    $('main.content').addClass('gralak-writing-view');
  }

}());
