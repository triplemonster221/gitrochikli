 $(document).ready(function(){

      $('.from__slaider').slick({
        arrows:true,
        prevArrow:'<button type="button" class="slick-prev left"><img src="../img/left1.svg"></button>',
        nextArrow:'<button type="button" class="slick-prev right"><img src="../img/right.svg"></button>',
        dots:true

      });

      $('.tabs__item').on('click',function(e){
        e.preventDefault();

        $('.tabs__item').removeClass('tabs__item--active');
        $(this).addClass('tabs__item--active');

        $('.tabs__content').removeClass('tabs__content--active');
        $($(this).attr('href')).addClass('tabs__content--active');
      });

  });