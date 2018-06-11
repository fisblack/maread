$(document).ready(function() {
    function owl() {
        $('.banner-slide').owlCarousel({
            stagePadding: 300,
            loop:true,
            autoplay:true,
            autoplayTimeout:3000,
            autoplayHoverPause:true,
            smartSpeed:1000,
            margin:20,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        })
    }
    owl()
    $('.navigation-group a').click(function() {
        owl()
    })

    

    $('a').click(function() {
        pageLoad(window.location.pathname)
    })
    
    pageLoad(window.location.pathname)
})

function pageLoad(path) {
    $('.navigation').show()
    switch(path) {
        case '/add-novel' : 
            $('#tags').tagsinput()
            break
        case '/popular' :
            
            break
        case '/detail-book' :
            $('.navigation').hide()
            break
        default :

    }
}