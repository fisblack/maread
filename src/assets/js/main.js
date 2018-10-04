$(document).ready(function() {
    function owl() {
        $('.banner-slide').owlCarousel({
            loop:true,
            autoplay:true,
            autoplayTimeout:3000,
            autoplayHoverPause:true,
            smartSpeed:1000,
            responsive:{
                0:{
                    items:1,
                    stagePadding: 0,
                    margin: 10
                },
                600:{
                    items:1
                },
                1000:{
                    items:1,
                    stagePadding: 300,
                    margin:20
                }
            }
        })
    }
    owl()
    $('.navigation-group a').click(function() {
        owl()
    })

    $(window).on('hashchange', function(e){
        alert(555)
    });
    

    $('a').click(function() {
        $('body').removeClass('modal-open');
        $('.navigation').removeClass('active');
        pageLoad(window.location.pathname)
        owl()
    })
    // setInterval(function() {
    //     $('#select').chosen({disable_search_threshold: 10})
    // },10)
    $('#select').change(function() {
        const text = $('#select option:selected').html()
        $('.chosen-single span').html(text)
        console.log(text)
    });
    pageLoad(window.location.pathname)

    $('.menu-mobile').click( () => {
        $('body').toggleClass('modal-open');
        $('.navigation').toggleClass('active');
    })
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
            // $('.navigation').hide()
            break
        case '/read-book' :
            // $('.navigation').hide()
            $('#select').chosen({disable_search_threshold: 10})
            break
        default :

    }
}