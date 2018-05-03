jribbble.shots({token: "1180cbed3fe1b7ac56633f99685dfddddec516f3bc333e76994fdef3cabdd3b0"}, function(shotsArray) {
    document.querySelector(".shots").innerHTML = shotsArray.reduce(function(html, shot) {
      return html + '<li><a href="'+  shot.html_url + '" target="_blank"><img src="' + shot.images.normal + '"></a></li>';
    }, "");
  });


(function() {
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

// responsive menu

// (function() {
//     let menu = document.getElementById("js-menu");

//     menu.onclick = function() {
//         let bar = document.getElementsByClassName('bar')[0];
//         bar.classList.toggle('animate');

//         let navMenu = document.getElementsByClassName('header__nav')[0];
//         navMenu.classList.toggle('nav--isClosed');
//     }
// })();

// window.addEventListener('scroll', function(ev) {
//     var el = document.getElementById('nav-top');

//     var distanceToTop = el.getBoundingClientRect().top;

//     var pegou = $(el).offset().top;

//     if (pegou >= 150) {
//         el.classList.add('hide-menu');
//     } else {
//         el.classList.remove('hide-menu')
//     }
// })

// menu active
var pathname = window.location.pathname;

$('.navigation li').each(function(index) {
    if (pathname === $(this).attr('href')) {
        console.log(pathname)
        $(this).addClass("active");
    }
});