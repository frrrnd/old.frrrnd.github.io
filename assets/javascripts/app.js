(function() {

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

$(function() {

    $('html').addClass('active'); /* [1] */

    $('a').each(function() { /* [2] */
         if ( location.hostname === this.hostname || !this.hostname.length ) { /* [2] */

            var link = $(this).attr("href"); /* [3] */

            if ( link.match("^#") ) { /* [4] */

                $(this).click(function() {
                    var target = $(link); /* [5] */ 
                    target = target.length ? target : $('[name=' + this.hash.slice(1) +']'); /* [5] */ 
                    if (target.length) {
                        $('html,body').animate({ /* [6] */ 
                            scrollTop: target.offset().top - 70 /* [6] */ 
                        }, 1000); return false; /* [6] */ 
                    }
                });

            } else if ( link.match("^mailto") ) { /* [7] */ 
                // Act as normal  /* [7] */ 
            } else {

                $(this).click(function(e) {
                    e.preventDefault(); /* [8] */ 
                    $('html').removeClass('active'); /* [9] */ 
                    setTimeout(function() { /* [10] */
                        window.location = link; /* [10] */
                    }, 500); /* [10] */
                });

            }

        }
    });
  
});