(function() {
  'use strict';

  let emoji = document.getElementById("emoji");

  var list = ["👽", "👾", "🤖", "🎃", "✌", "🤘", "🖖", "⚡", "🔥", "❄", "🍕", "🍔", "🌮", "🍩", "🍺",  "🎸", "🎮", "🚀", "🍗"];

  function shuffle(array) {
    var i = array.length,
    j = 0,
    temp;

    while(i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

    return array[0];
  }

  if (emoji) {
    emoji.innerHTML = shuffle(list);
  }

  // Dribbble
    $.jribbble.setToken('0cd1ef6639b1a1d539d62e32712fa8568de32815169192bb33ffd7c698ccb64e');

    $.jribbble.users('fernando').shots({per_page: 9}).then(function(shots) {
    var html = [];
    
    shots.forEach(function(shot) {
        html.push('<li class="shots--reveal shots--shot">');
        html.push('<a href="' + shot.html_url + '" target="_blank">');
        html.push('<img src="' + shot.images.normal + '">');
        html.push('</a></li>');
    });
    
    $('.shots').html(html.join(''));
    });

})();