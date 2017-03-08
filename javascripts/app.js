$.jribbble.setToken('0cd1ef6639b1a1d539d62e32712fa8568de32815169192bb33ffd7c698ccb64e');

$.jribbble.users('fernando').shots({
  per_page: 9
}).then(function(shots) {
      var html = [];

      shots.forEach(function(shot) {
        // See the Dribbble docs for all available shot properties.
        html.push('<li class="shots--shot">');
        html.push('<a href="' + shot.html_url + '">');
        html.push('<img src="' + shot.images.normal + '">');
        html.push('</a></li>');
      });

      $('.shots').html(html.join(''));
    });


$('.bt-menu').on('click', function(e) {
  e.preventDefault();
  $('body').toggleClass('menu-open');
});