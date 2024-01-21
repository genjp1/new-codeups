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
# Swiperでズームインしながらフェードで切り替わるスライダー
=====================================================*/
  let swipeOption = {
    loop: true,
    effect: 'fade',
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    speed: 2000,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
  }
  new Swiper('.js-top-swiper', swipeOption);


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





});


