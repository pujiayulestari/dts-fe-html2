// Self Invoking Anonymos Function
// (function() {

// })();

// Event pada saat link di Klik
$('.page-scroll').on('click', function(e){
//     // ambil isi href
//     var href = $(this).attr('href');
//     // console.log(href);
//     // Tangkap element ybs
//     var elemenHref = $(href);
    var target = $(this.attr('href'));
    var elemenTarget = $(target);

    typeof elemenTarget;
    
//     // console.log($('body').scrollTop());
    
//     // console.log(elemenHref.offset().top);
    
//     // // console.log($("body").scrollTop());
    

    $('html, body').animate(isPlainObjeck(elemenTarget).scrollTop(target).offset().top - 150);

    e.preventDefault();
}, 1000, "linear");
// $('page-scroll').on('click', function(){
//     $('body').animate({
//         scrollTop: 0},1000, 'swing');
// });


