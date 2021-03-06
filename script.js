$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        
        $('a').parent().each(function () {
            $(this).removeClass('active');
        })
        
        $(this).parent().addClass('active');
        
        var target = this.hash,
            menu = target;
        $target = $(target);
        
        // also add link to history when it is clicked on
        if (history.pushState) {
            history.pushState({url: target}, null, target);
        }
        
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    
    var scrollPos = $(document).scrollTop() + 75;
    $('#navbarNavAltMarkup a').each(function () {
        var currLink = $(this);

        var refElement = currLink.attr("href");
        
        if (refElement.startsWith('#')) {
            
            var $refElement = $(refElement);
            if ($refElement.position().top <= scrollPos && $refElement.position().top + $refElement.height() > scrollPos) {
            
                $('#navbarNavAltMarkup ul li').removeClass("active");
                
                currLink.parent().addClass("active");
                // update url with current section
                history.replaceState({url: refElement}, '', refElement);

            }
            else{
                currLink.parent().removeClass("active");
            }
        }
    });
    
}

