$(document).ready(function() {

    $('.new-banner').delay(500).fadeIn(500);
    $('.new-banner-text').delay(1000).fadeIn(500);
    $('.new-banner-text').delay(2500).fadeOut(200, function(){
        $('.new-banner-text-2').fadeIn(500);
    });

    /* Check the location of each desired element */
    $('.hideme').each( function(i){

        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        /* If the object is completely visible in the window, fade it it */
        if( bottom_of_window > bottom_of_object ){
            $(this).animate({'opacity':'1'},500);
        }
    });

    /* SCROLL ANIMATION FADE */

    /* Every time the window is scrolled ... */
    $(window).scroll( function(){

        /* Check the location of each desired element */
        $('.hideme').each( function(i){

            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},500);
            }
        });

        /* Check the location of each desired element */
        $('.tech-info-main-box').each( function(i){

            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                $('.tech-info-main-box').addClass('animate');
                $('.tech-info-main-box').delay(1000).animate({'opacity':'1'},500);
            }
        });

        $('.testimonial-box-outer').each( function(i){

            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                $('.testimonial-box-outer').addClass('animate');
                $('.testimonial-box-outer').delay(1000).animate({'opacity':'1'},500);
            }
        });

        /* Check the location of each desired element */
        $('.to-animate').each( function(i){

            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                $(this).addClass('animate');

            }
        });


        var options = {
          useEasing: true,
          useGrouping: true,
          separator: ',',
          decimal: '.',
        };

        /* Check the location of each desired element */
        $('.counter').each( function(i){

                var bottom_of_object = $(this).offset().top + $(this).outerHeight();
                var bottom_of_window = $(window).scrollTop() + $(window).height();

                /* If the object is completely visible in the window, fade it it */

                if((bottom_of_window > bottom_of_object)){
                    /* COUNTER */
                    countershizzle('counter1', 0, 10, 0, 2, options);
                    countershizzle('counter2', 0, 4.9, 1, 2, options);
                    countershizzle('counter3', 0, 45.9, 1, 2, options);
                    countershizzle('counter4', 0, 0.9, 1, 2, options);
                }
        });

        $('.counter2').each( function(i){

                var bottom_of_object = $(this).offset().top + $(this).outerHeight();
                var bottom_of_window = $(window).scrollTop() + $(window).height();

                /* If the object is completely visible in the window, fade it it */

                if((bottom_of_window > bottom_of_object)){
                    countershizzle('counter5', 0, 1.8, 1, 3, options);
                    countershizzle('counter6', 0, 1, 0, 2, options);
                }
        });

        $('.counter3').each( function(i){

                var bottom_of_object = $(this).offset().top + $(this).outerHeight();
                var bottom_of_window = $(window).scrollTop() + $(window).height();

                /* If the object is completely visible in the window, fade it it */

                if((bottom_of_window > bottom_of_object)){

                    countershizzle('counter7', 0, 10, 0, 2, options);
                    countershizzle('counter8', 0, 0.9, 1, 2, options);
                }
        });

        $('.counter4').each( function(i){

                var bottom_of_object = $(this).offset().top + $(this).outerHeight();
                var bottom_of_window = $(window).scrollTop() + $(window).height();

                /* If the object is completely visible in the window, fade it it */

                if((bottom_of_window > bottom_of_object)){
                    countershizzle('counter9', 0, 1, 0, 2, options);
                    countershizzle('counter10', 0, 1, 0, 2, options);
                    countershizzle('counter11', 0, 0.3, 1, 2, options);
                    countershizzle('counter12', 0, 5, 0, 2, options);
                    countershizzle('counter13', 0, 400, 0, 2, options);
                    countershizzle('counter14', 0, 50, 0, 2, options);
                    countershizzle('counter15', 0, 80, 0, 2, options);
                    countershizzle('counter16', 0, 700, 0, 2, options);
                }
        });

    });


    function countershizzle (div, number1, number2, number3, number4, options) {
        if(!$('#' + div).hasClass('data')){
            var demo = new CountUp(div, number1, number2, number3, number4, options);
            if (!demo.error) {
                $('#' + div).addClass('data');
                setTimeout(function(){
                    demo.start();
                }, 1000);
            } else {
                console.error(demo.error);
            }
        }
    }

    /* SHOW/HIDE MAGNIFYING GLASS */

    $(".exploded-view-object").mouseleave(function() {
        $('.img-magnifier-glass').fadeOut(200);
    });

    $(".exploded-view-object").mouseenter(function() {
        $('.img-magnifier-glass').fadeIn(200);
    });

});


/* MAGNIFYING GLASS */

function magnify(imgID, zoom) {
  var img, glass, w, h, bw;
  img = document.getElementById(imgID);

  /*create magnifier glass:*/
  glass = document.createElement("DIV");
  glass.setAttribute("class", "img-magnifier-glass");

  /*insert magnifier glass:*/
  img.parentElement.insertBefore(glass, img);

  /*set background properties for the magnifier glass:*/
  glass.style.backgroundImage = "url('" + img.src + "')";
  glass.style.backgroundRepeat = "no-repeat";
  glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
  bw = 3;
  w = glass.offsetWidth / 2;
  h = glass.offsetHeight / 2;

  /*execute a function when someone moves the magnifier glass over the image:*/
  glass.addEventListener("mousemove", moveMagnifier);
  img.addEventListener("mousemove", moveMagnifier);

  /*and also for touch screens:*/
  glass.addEventListener("touchmove", moveMagnifier);
  img.addEventListener("touchmove", moveMagnifier);
  function moveMagnifier(e) {
    var pos, x, y;
    /*prevent any other actions that may occur when moving over the image*/

    /*get the cursor's x and y positions:*/
    pos = getCursorPos(e);
    x = pos.x;
    y = pos.y;
    /*prevent the magnifier glass from being positioned outside the image:*/
    if (x > img.width - (w / zoom)) {x = img.width - (w / zoom);}
    if (x < w / zoom) {x = w / zoom;}
    if (y > img.height - (h / zoom)) {y = img.height - (h / zoom);}
    if (y < h / zoom) {y = h / zoom;}
    /*set the position of the magnifier glass:*/
    glass.style.left = (x - w) + "px";
    glass.style.top = (y - h) + "px";
    /*display what the magnifier glass "sees":*/
    glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
  }

  function getCursorPos(e) {
    var a, x = 0, y = 0;
    e = e || window.event;
    /*get the x and y positions of the image:*/
    a = img.getBoundingClientRect();
    /*calculate the cursor's x and y coordinates, relative to the image:*/
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    /*consider any page scrolling:*/
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return {x : x, y : y};
  }
}
