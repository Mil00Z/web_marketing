$(document).ready(function(){

// // Actions directes sur DOM au chargement
//   $('body').append('<div id="back-to-top"><a href="#main-header">BackUp</a></div>');

 var viewport_width = $(window).width();
 var toggle_content = $('.toggle-infos');
    $('.logiciels-more_content').addClass('hidden');

// Afficher les contenus cachés supplémentaires
 toggle_content.on('click','button', function(e){
  $(this).toggleClass('active-btn');
//   // selectionne le parent puis le frère direct
  $(this).parent().next('.logiciels-more_content').toggleClass('hidden');
  console.log('toggle Content');
 });

// récuperer les styles des pseudos élèment
    var pseudo_el = window.getComputedStyle(
        document.querySelector('.pseudo-test'), '::after'
    );
    var get_value_pseudoel = pseudo_el.getPropertyValue('height');
    console.log( 'valeur du pseudo / ' + get_value_pseudoel);

//injecter le nouveau style
    // pseudo_el.style.setProperty('height','150px');
    // console.log('valeur du pseudo -- ' + pseudo_el);

    //autre solution
 // var list_option_height = $('.logiciels--modules').height();
 // $('.logiciels-more_content').find('.pseudo-test').css('height', list_option_height + 10  + 'px');
 // console.log(list_option_height);



// $('.solutions-slider').slick({
//     arrows: true,
//     dots: false,
//     slideToShow: 4,
//     slideToScroll: 1,
//     appendArrows: '.solutions-content',
//     responsive: [
//         {
//             breakpoints: 500,
//             settings: 'unslick'
//         }
//     ]
// });


//  // Smooth Scroll & activation de l'item'
//     $(' .card-container ul li  a').on('click', function () {
//      var link = $(this).attr('href');
//      var target = $(link);
//      var target_pos = target.offset().top;

//      var height_prestation_content = $('.gallery-prestation_content').height();
//      // console.log(height_prestation_content);

//      $('html,body').animate({scrollTop: target_pos - height_prestation_content}, 1000, 'swing');
//      target.toggleClass('active');
//      console.log(target);
//  });

// // Slick init 1
//     $('.presentation-slider').slick({
//         arrows:false,
//         dots:true,
//         slideToShow:1,
//         slidesToScroll: 1,
//         mobileFirst:false,
//     });
//     // Slider Activités Card
//     $('#skills-presentation').slick({
//         arrows:true,
//         dots:false,
//         // appendArrows:'#skills-presentation',
//         slideToShow:1,
//         slidesToScroll: 1,
//         mobileFirst:true,
//         responsive: [
//             {
//                 breakpoints:990,
//                 settings : 'unslick'
//             }
//         ]
//     });
//     // alternative 2  pour  unslick
//     if (viewport_width > 990) {
//         $('#skills-presentation').slick('unslick');
//         // console.log('slick card container remove');
//     }
//     else {
//         $('.right-form').find('.form-block').insertAfter($('.left-form .form-block:first'));
//         // console.log('email block tracker');
//     }


// // Slider Temoignages
//     $('.testimonial-slider').slick({
//         arrows:false,
//         dots:true,
//         slideToShow:1,
//         slidesToScroll: 1,
//         vertical:true,
//     });

//     // Isotope Gallerie
//     $('.gallery-prestation_grid').isotope({
//       // options
//       itemSelector: '.gallery-prestation_content',
//       layoutMode: 'fitRows',
//     });

//     $('.isotope-nav li').on('click','a',function () {
//         $('.isotope-list').removeClass('active');
//         $('.gallery-prestation_img-container').removeClass('active');
//         $(this).parent('li').toggleClass('active');
//                 console.log('click a nav gallery active');

//             var filterValue = $(this).attr('data-filter');
//             $('.gallery-prestation_grid').isotope({ filter:filterValue });
//     });



// /


// $('.card-container').hover(function(){
//     $(this).removeClass('active');
//     $(this).each(function(){
//         $(this).toggleClass('active','slow');
//         $(this).find('ul,a').slideDown(400,'swing');
//     });
// },function(){
//     $(this).toggleClass('active','slow');
//     $('.card-container > ul,.card-container > a').hide(200,'swing');
// });

// //TEST de SCRIPT//
// $('.toggle-nav').on('click',function(){
//   $(this).toggleClass('active');
//   $('#main-nav').toggleClass('toggled');
// });

// // Sticky NAV
// $(window).on('scroll',function () {
//     if ($(this).scrollTop() > 100) {
//         $('#main-header').addClass('sticky');
//     } else {
//         $('#main-header').removeClass('sticky');
//     }
// });

// $('.navbar-nav li a, .contact-us a').on('click', function(){
//     $(this).parent('li').removeClass('.active-item-nav');
//     $(this).parent('li').toggleClass('.active-item-nav');

//     var link = $(this).attr('href');
//     var target = $(link);
//     var height_nav = $('#main-header').height();
//     var target_pos = target.offset().top;
//     console.log(link);

//     if($(this) === $('.contact-us a')) {

//         $('html,body').animate({scrollTop: target_pos}, 800, 'swing');
//         alert('height nav calcul none');
//     } else {

//     $('html,body').animate({scrollTop: target_pos - height_nav}, 800, 'swing');
//     }
// });


// $(window).on('scroll',function () {
//     var window_height = $(this).height();
//     var half_scroll = window_height / 2 ;
//     console.log(half_scroll);

//     if ($(this).scrollTop() > half_scroll) {
//         $('#back-to-top').addClass('shown');
//     }
//     else {
//         $('#back-to-top').removeClass('shown');
//         // console.log('debeug mamen');
//     }
// });
// $('#back-to-top').on('click',function (e) {
//     e.preventDefault();
//     e.stopPropagation();
//     $('html,body').animate({scrollTop: 0}, 800, 'swing');
// })


  });
