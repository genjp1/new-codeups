jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

/*====================================================
# ドロワーメニュー
=====================================================*/
    // ハンバーガーメニューのクリックイベント
    $('.js-hamburger').on('click', function() {
      $('.js-drawer-menu, .js-hamburger').toggleClass('is-open');
      toggleBodyScroll();
    });
  
    // ドロワーメニュー内のリンククリックイベント
    $('.sp-nav__item').on('click', function() {
      if ($('.js-hamburger').hasClass('is-open')) {
        $('.js-drawer-menu, .js-hamburger').removeClass('is-open');
        toggleBodyScroll();
      }
    });
  
    // bodyのスクロール設定を切り替える関数
    function toggleBodyScroll() {
      if ($("body").css("overflow") === "hidden") {
        $("body").css({ height: "", overflow: "" });
      } else {
        $("body").css({ height: "100%", overflow: "hidden" });
      }
    }

/*====================================================
# mvセクションのスライダー
// =====================================================*/
    const mv_swiper = new Swiper(".js-mv-swiper", {
        loop: true,
        speed: 2000,
        effect: "fade",
        fadeEffect: {
            crossFade: true,
        },
        // autoplay: {
        //     delay: 4000,
        //     disableOnInteraction: false,
        // },
    });

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

 // フッター手前でストップ
let scrollHeight = $(document).height();
let scrollPosition = $(window).height() + $(window).scrollTop();
let footHeight = $("footer").innerHeight();

 $(".pagetop").hide();
 $(window).on("scroll", function () {
   scrollHeight = $(document).height();
   scrollPosition = $(window).height() + $(window).scrollTop();
   footHeight = $("footer").innerHeight();
   if (scrollHeight - scrollPosition <= footHeight) {
     $(".pagetop").css({
       position: "absolute",
       bottom: footHeight + 20,
     });
   } else {
     $(".pagetop").css({
       position: "fixed",
       bottom: "20px",
     });
   }
 });


/*====================================================
# campaignセクションのスライダー
=====================================================*/

  // リサイズ処理（PC時のみ矢印表示）
  const campaign_slideLength = document.querySelectorAll('.js-campaign-swiper .swiper-slide').length
  $(window).resize(function () {
      campaign_arrow();
  });
  campaign_arrow();
  function campaign_arrow() {
      if (window.matchMedia('(max-width: 767px)').matches || campaign_slideLength <= 3) {
          $('.js-campaign-arrow').hide();
      } else {
          $('.js-campaign-arrow').show();
      }
  }

  // Swiper
  var campaign_swiper = new Swiper(".js-campaign-swiper", {
    loop: true,
    speed: 2000,
    slidesPerView: "auto",
    spaceBetween: 20,
    // autoplay: {
    //     delay: 2000,
    //     disableOnInteraction: false,
    // },
    breakpoints: {
        768: {
            spaceBetween: 42
        }
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


  
/*====================================================
# 画像出現アニメーション（スライドイン）
=====================================================*/
  //要素の取得とスピードの設定
var box = $('.colorbox'),
speed = 700;  

//.colorboxの付いた全ての要素に対して下記の処理を行う
box.each(function(){
$(this).append('<div class="color"></div>')
var color = $(this).find($('.color')),
image = $(this).find('img');
var counter = 0;

image.css('opacity','0');
color.css('width','0%');
//inviewを使って背景色が画面に現れたら処理をする
color.on('inview', function(){
    if(counter == 0){
　　　　　$(this).delay(200).animate({'width':'100%'},speed,function(){
               image.css('opacity','1');
               $(this).css({'left':'0' , 'right':'auto'});
               $(this).animate({'width':'0%'},speed);
            })
        counter = 1;
      }
 });
});

/*====================================================
# タグ切り替え（campaign、voiceセクション）
=====================================================*/
$(function () {
  const tabButton = $(".js-tab-button"),
    tabContent = $(".js-tab-content");
  tabButton.on("click", function () {
    let index = tabButton.index(this);

    tabButton.removeClass("is-active");
    $(this).addClass("is-active");
    tabContent.removeClass("is-active");
    tabContent.eq(index).addClass("is-active");
  });
});


/*====================================================
# モーダルウィンドウ aboutページ
=====================================================*/
$(function () {
  const open = $(".js-modal-open"),
    close = $(".js-modal__close"),
    modal = $(".js-modal");

  //開くボタンをクリックしたらモーダルを表示する
  open.on("click", function () {
    modal.addClass("is-open");
  });

  //閉じるボタンをクリックしたらモーダルを閉じる
  close.add(modal).on("click", function () {
    modal.removeClass("is-open");
  });
});


const close = $(".js-modal__close"),
modal = $(".js-modal"),
modalContent = $(".js-modal__content img");

// 画像をクリックしたらモーダルを表示する
$(".js-modal-open img").on("click", function () {
const src = $(this).attr("src");
const alt = $(this).attr("alt");
modalContent.attr("src", src);
modalContent.attr("alt", alt);
modal.addClass("is-open");
});

// 閉じるボタンをクリックしたらモーダルを閉じる
close.add(modal).on("click", function (event) {
// モーダルのコンテンツ部分のクリックは無視する
if (!$(event.target).closest(".modal__body").length) {
modal.removeClass("is-open");
}
});


/*=====================================================================
# pagenaviのpreviouspostslink と .nextpostslink にホバーした際の処理（cssとセット記述）
======================================================================*/
$('.pagenavi .wp-pagenavi .previouspostslink, .pagenavi .wp-pagenavi .nextpostslink').hover(
  function() {
    // マウスが乗った時、hover-effectクラスを追加
    $(this).addClass('hover-effect');
  }, function() {
    // マウスが離れた時、hover-effectクラスを削除
    $(this).removeClass('hover-effect');
  }
);


/*====================================================
# アコーディオン faqページ
=====================================================*/
jQuery(function ($) {
  $('.js-faq-question').on('click', function () {
      $(this).next().slideToggle();
      $(this).toggleClass('is-open');
  });
});

/*====================================================
# コンタクトフォームのボタンホバーエフェクト
=====================================================*/
  // ボタン要素を選択
  var btn = $('.btn--contact');

  // ボタンにホバー時のイベントリスナーを追加
  btn.mouseover(function() {
      // .btn__submitの色を変更
      $(this).find('.btn__submit').css('color', '#408F95');
  });

  // ボタンからマウスが離れたときのイベントリスナーを追加
  btn.mouseout(function() {
      // .btn__submitの色を元に戻す
      $(this).find('.btn__submit').css('color', ''); // ここでは元の色に戻していますが、具体的な色に設定しても良い
  });



});


