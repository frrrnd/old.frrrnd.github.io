(function() {
  'use strict';

  let emoji = document.getElementById("emoji");

  let list = ["👽", "👾", "🤖", "🎃", "✌", "🤘", "🖖", "⚡", "🔥", "❄", "🍕", "🍔", "🌮", "🍩", "🍺",  "🎸", "🎮", "🚀", "🍗"];

  function shuffle(array) {
    let i = array.length,
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

    $.jribbble.users('fernando').shots({per_page: 12}).then(function(shots) {
    let html = [];
    
    shots.forEach(function(shot) {
        html.push('<li class="shots--reveal shots--shot">');
        html.push('<a href="' + shot.html_url + '" target="_blank">');
        html.push('<img src="' + shot.images.normal + '">');
        html.push('</a></li>');
    });
    
    $('.shots').html(html.join(''));
    });


    // Twitter Widget
    window.twttr = (function(d, s, id) {
      let js, fjs = d.getElementsByTagName(s)[0],
        t = window.twttr || {};
      if (d.getElementById(id)) return t;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://platform.twitter.com/widgets.js";
      fjs.parentNode.insertBefore(js, fjs);

      t._e = [];
      t.ready = function(f) {
        t._e.push(f);
      };

      return t;
    }(document, "script", "twitter-wjs"));
})();