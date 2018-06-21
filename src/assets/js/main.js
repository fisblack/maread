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

    $(window).on('hashchange', function(e){
        alert(555)
    });
    

    $('a').click(function() {
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
        case '/read-book' :
            $('.navigation').hide()
            $('#select').chosen({disable_search_threshold: 10})
            break
        default :

    }
}