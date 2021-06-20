 $(document).ready(function(){

      $('.from__slaider').slick({
        arrows:true,
        prevArrow:'<button type="button" class="slick-prev left"><img src="../img/left1.svg"></button>',
        nextArrow:'<button type="button" class="slick-prev right"><img src="../img/right.svg"></button>',
        dots:true

      });

       $('.popylar__content').slick({
        slidesToShow: 4,
        arrows:true,
        prevArrow:'<button type="button" class="slick-prev popylar__left"><img src="../img/popylar-left.svg"></button>',
        nextArrow:'<button type="button" class="slick-prev popylar__right"><img src="../img/popylar-right.svg"></button>',
        dots:true

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
  });