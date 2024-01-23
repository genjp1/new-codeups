jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

/*====================================================
# ドロワーメニュー
=====================================================*/
    // ハンバーガーメニューをクリックした時にドロワーを開閉する
  // 横からスライドインバージョン
  $('.js-hamburger').on('click', function () {
    if ($('.js-hamburger').hasClass('is-open')) {
      // $('.js-drawer-menu').fadeOut();
      //横からスライドインバージョン
      $('.js-drawer-menu').removeClass('is-open');
      $(this).removeClass('is-open');
    } else {
      // $('.js-drawer-menu').fadeIn();
      //横からスライドインバージョン
      $('.js-drawer-menu').addClass('is-open');
      $(this).addClass('is-open');
    }
  });

    // ドロワーメニュー内のリンクをクリックした時にドロワーを閉じる
  // 横からスライドインバージョン
  $('.sp-nav__item').on('click', function () {
    if ($('.js-hamburger').hasClass('is-open')) {
      // $('.js-drawer-menu').fadeOut();
      //横からスライドインバージョン
      $('.js-drawer-menu').removeClass('is-open');
      $('.js-hamburger').removeClass('is-open');
    } else {
      // $('.js-drawer-menu').fadeIn();
      //横からスライドインバージョン
      $('.js-drawer-menu').addClass('is-open');
      $('.js-hamburger').addClass('is-open');
    }
  });





  /*====================================================
# 旧CodeUps Swiperでズームインしながらフェードで切り替わるスライダー
=====================================================*/
  // let swipeOption = {
  //   loop: true,
  //   effect: 'fade',
  //   autoplay: {
  //     delay: 4000,
  //     disableOnInteraction: false,
  //   },
  //   speed: 2000,
  //   pagination: {
  //     el: '.swiper-pagination',
  //     clickable: true,
  //   }
  // }
  // new Swiper('.js-top-swiper', swipeOption);




/*====================================================
# mvセクションのスライダー
=====================================================*/
    // const mv_swiper = new Swiper(".js-mv-swiper", {
    //     loop: true,
    //     speed: 2000,
    //     effect: "fade",
    //     fadeEffect: {
    //         crossFade: true,
    //     },
    //     autoplay: {
    //         delay: 4000,
    //         disableOnInteraction: false,
    //     },
    // });



/*====================================================
# ボタンをクリックしたらスクロールして上に戻る
=====================================================*/
var topBtn = $('.pagetop');
topBtn.hide();

// ボタンの表示設定
$(window).scroll(function () {
  if ($(this).scrollTop() > 70) {
    // 指定px以上のスクロールでボタンを表示
    topBtn.fadeIn();
  } else {
    // 画面が指定pxより上ならボタンを非表示
    topBtn.fadeOut();
  }
});

// ボタンをクリックしたらスクロールして上に戻る
topBtn.click(function () {
  $('body,html').animate({
    scrollTop: 0
  }, 300, 'swing');
  return false;
});


/*====================================================
# campaignセクションのスライダー
=====================================================*/

  // リサイズ処理（PC時のみ矢印表示）
  const service_slideLength = document.querySelectorAll('.js-service-swiper .swiper-slide').length
  $(window).resize(function () {
      service_arrow();
  });
  service_arrow();
  function service_arrow() {
      if (window.matchMedia('(max-width: 767px)').matches || service_slideLength <= 3) {
          $('.js-service-arrow').hide();
      } else {
          $('.js-service-arrow').show();
      }
  }

  // Swiper
  var service_swiper = new Swiper(".js-service-swiper", {
      loop: true,
      speed: 2000,
      slidesPerView: 1.3,
      spaceBetween: 20,
      // autoplay: {
      //     delay: 2000,
      //     disableOnInteraction: false,
      // },
      breakpoints: {
          768: {
              slidesPerView: 3.5,
              spaceBetween: 40
          }
      },
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
      },
  });









});


