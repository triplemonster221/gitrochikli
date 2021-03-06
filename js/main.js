 $(document).ready(function(){

      $('.from__slaider').slick({
        arrows:true,
        prevArrow:'<button type="button" class="slick-prev left"><img src="img/left1.svg"></button>',
        nextArrow:'<button type="button" class="slick-prev right"><img src="img/right.svg"></button>',
        dots:true,
         responsive: [
           {
            breakpoint: 770,
            settings: {
              arrows:false,
            }
          },
        ]

      });

       $('.popylar__content').slick({
        slidesToShow: 4,
        arrows:true,
        prevArrow:'<button type="button" class="slick-prev popylar__left"><img src="img/popylar-left.svg"></button>',
        nextArrow:'<button type="button" class="slick-prev popylar__right"><img src="img/popylar-right.svg"></button>',
        dots:false,
        responsive: [
           {
            breakpoint: 1250,
            settings: {
              arrows:false,
              slidesToShow: 3,
              dots:true
            }
          },
          {
            breakpoint: 864,
            settings: {
              arrows:false,
              slidesToShow: 2,
              dots:true
            }
          },
           {
            breakpoint: 629,
            settings: {
              arrows:false,
              slidesToShow: 1,
              dots:true
            }
          },
        ]

      });

       $('.andbay__content').slick({
        slidesToShow: 4,
        arrows:true,
        prevArrow:'<button type="button" class="slick-prev andbay__left"><img src="img/popylar-left.svg"></button>',
        nextArrow:'<button type="button" class="slick-prev andbay__right"><img src="img/popylar-right.svg"></button>',
        dots:false,
          responsive: [
           {
            breakpoint: 1250,
            settings: {
              arrows:false,
              slidesToShow: 3,
              dots:true
            }
          },
          {
            breakpoint: 864,
            settings: {
              arrows:false,
              slidesToShow: 2,
              dots:true
            }
          },
           {
            breakpoint: 629,
            settings: {
              arrows:false,
              slidesToShow: 1,
              dots:true
            }
          },
        ]
      });

        $('.burger').on('click', function(){
          $('.header__bottom-menu').toggleClass('header__bottom-menu--active')
        });



      $('.product__tabs-list').on('click',function(e){
        e.preventDefault();

        $('.product__tabs-list').removeClass('product__tabs-list--active');
        $(this).addClass('product__tabs-list--active');

        $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
        $($(this).attr('href')).addClass('product-tabs__content-item--active');
      });

       $('.tab').on('click',function(e){
        e.preventDefault();

        $('.tab').removeClass('tabs__item--active');
        $(this).addClass('tabs__item--active');

        $('.tabs__content').removeClass('tabs__content--active');
        $($(this).attr('href')).addClass('tabs__content--active');
      });


       $('.popylar__tab').on('click',function(e){
        e.preventDefault();

        $('.popylar__tab').removeClass('popylar__tab--active');
        $(this).addClass('popylar__tab--active');

        $('.popylar__content').removeClass('popylar__content--active');
        $($(this).attr('href')).addClass('popylar__content--active');
      });



       $('.andbay__tab').on('click',function(e){
        e.preventDefault();

        $('.andbay__tab').removeClass('andbay__tab--active');
        $(this).addClass('andbay__tab--active');

        $('.andbay__content').removeClass('andbay__content--active');
        $($(this).attr('href')).addClass('andbay__content--active');
      });

       $('.tabs__parameters').on('click',function(e){
        e.preventDefault();

        $('.tabs__parameters').removeClass('tabs__parameters--active');
        $(this).addClass('tabs__parameters--active');

        $('.tabs__parameters-content').removeClass('tabs__parameters-content--active');
        $($(this).attr('href')).addClass('tabs__parameters-content--active');
      });

        $('.footer__item-titledrop').on('click', function(){
          $(this).next().slideToggle();
          $(this).toggleClass('footer__item-titledrop--active');
        });

       $('.popylar__like').on('click', function(e){
        e.preventDefault();


         $(this).toggleClass('popylar__like--active');
         
       });

        $('.input__style').styler();

        $('.aside__item-accord').on('click',function(){
          $(this).toggleClass('aside__item-accord--active');
          $(this).next().slideToggle();
        });

        $(".js-range-slider").ionRangeSlider({
          type:"double",
          grid: true,
        });

        $(".rate-Yo").rateYo({
          rating: 3.6
        });




  });