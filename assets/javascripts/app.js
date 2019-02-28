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