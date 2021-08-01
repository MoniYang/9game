

  // $(window).scroll(function() {    
  //   var scroll = $(window).scrollTop();

  //   if (scroll > 10) {
  //       $(".header").addClass("fixed");
  //   } else {
  //       $(".header").removeClass("fixed");
  //   }
  // });



  var indexSlider = $('.index_slider');
  indexSlider.owlCarousel({
    loop:true,
    margin: 10,
    nav: false,
    dots:true,
    autoplay:true,
    autoplayTimeout:5000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items:1
        },
        1000: {
            items:1
        }
    }
  })

  var gameSlider = $('.game_slider');
  gameSlider.owlCarousel({
    loop:false,
    margin: 10,
    nav: false,
    dots:false,
    // autoplay:true,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items:3
        },
        1000: {
            items:3
        }
    }
  })


  var newsSlider = $('.newsSlider__Slider');
  newsSlider.owlCarousel({
    loop:false,
    margin: 10,
    nav: false,
    dots:true,
    // autoplay:true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items:1
        },
        1000: {
            items:1
        }
    }
  })
  $('.dropdown--close').hide();
  $('.dropdown--btn').click(function(){
    $('.dropdown--close').show();
  });
  $('.dropdown--close').click(function(){
    $('.dropdown__content.show').removeClass('show');
    $('.dropdown--close').hide();
  });

  $('.mobileNav__btn').click(function(){
    $('#nav-border').addClass('open');
    $('#nav-border').removeClass('close');
    $('.mobileNav__btn').addClass('open');
    $('.mobileNav__btn').removeClass('close');
    $('.mobileNav--close').show();
    });

    $('.mobileNav--Closebtn').click(function(){
        $('#nav-border').addClass('close');
        $('#nav-border').removeClass('open');
        $('.mobileNav__btn').addClass('close');
        $('.mobileNav__btn').removeClass('open');
        $('.mobileNav--close').hide();
     
    });
      $('.mobileNav--close').hide();
      $('.mobileNav--close').click(function(){
      // $('#nav-border').addClass('close');
      $('#nav-border').removeClass('open');
      $('.mobileNav__btn').addClass('close');
      $('.mobileNav__btn').removeClass('open');
      $('.mobileNav--close').hide();

    });
    $('.deposit__info3').hide();
    $('.deposit__info1').hide();
    $('.deposit__info2').hide();
    $('.deposit__MoneyList').hide();
    $('#submit').hide();
    $('.deposit__list li').click(function(){
      $('.deposit__list').hide();
      $('.deposit__MoneyList').show();
    
    });
    $('.deposit__MoneyList li').click(function(){
      $('.deposit__MoneyList').hide();
      $('.deposit__info1').show();
      $('#submit').show();
    });
    $('#submit').click(function(){
      $('.deposit__info1').hide();
      $('.deposit__info2').show();
      $('.deposit__info3').hide();
    });
    $('#clear').click(function(){
      $('.deposit__info2').hide();
      $('.deposit__info1').hide();
      $('.deposit__info3').hide();
      $('.deposit__MoneyList').hide();
      $('.deposit__list').show();
      $('#submit').hide();
    });

    $('.inputBox').hide();
    $('.inputText').click(function(){
      $('.inputText').hide();
      $('.inputBox').show();
    });

    $('.login--btn').show();
    $('.deposit--Btn').hide();
    $('.ChageName--btn').hide();
    $('#llogout').hide();
    $('.loginIcon li').click(function(){
      $('.login--btn').hide();
      $('.deposit--Btn').show();
      $('.ChageName--btn').show();
      $('#LangList').hide();
    });

    $('#logout').click(function(){
      $('.login--btn').show();
      $('.deposit--Btn').hide();
      $('.ChageName--btn').hide();
      $('#LangList').show();
    });
    $('#reset').click(function(){
    
      $('#nickName').val("");
    });
    $('.mobileNav__btn').click(function(){
   
      $('.header__topNav').show();
      $('.mobileNav--close').show();
    });
    $('[data-dismiss="modal"]').click(function(){
     
      $('.header__topNav').hide();
      $('.mobileNav--close').hide();
      $('.mobileNav__btn.open').removeClass('open').addClass('close');
    });
   
//    var dropbtn = document.querySelector('.dropdown--btn');
    
//     dropbtn.addEventListener('click',Closedrop);
  
//     function Closedrop(){
//         var dropContent = document.querySelector(".dropdown");
//         var dropClose = document.createElement('div');
    
//         dropClose.classList.add('dropdown--close');

//         dropContent.appendChild(dropClose);

//         // var dropContent = document.querySelector(".dropdown");
//         // var dropClose = document.createElement('div');
   
//         // dropClose.classList.add('dropdown--close');

//         // dropClose.appendChild(dropContent);
//     }
  

  

//   if( $('.dropdown__content').hasClass('show')){
//     var dropContent = document.querySelector(".dropdown");
//             var dropClose = document.createElement('div');
       
//             dropClose.classList.add('dropdown--close');
    
//             dropClose.appendChild(dropContent);

//   }
   

//    console.log(dropClose.appendChild(dropContent))

    // var verticalOWL = $('.win_list');
    // verticalOWL.owlCarousel({
    //     items: 3,
    //     loop: true,
    //     nav: false,
    //     dots:false,
    //     margin: 0,
    //     autoplay:false,
    //     rtl:true
    // })


    // verticalOWL.data('owl.carousel').difference = function(first, second) {
    //   return {
    //     x: first.x - second.x + (first.y - second.y),
    //     y: first.y - second.y
    //   };
    // };

   