  // 施設の表示切替え
  $('#store_view_more').on('click', () => {
    // 「partial」クラスの有無を確認
    if ($('.content_item.store').hasClass('partial')) {
      // 「partial」クラスを除去
      $('.content_item.store').toggleClass('partial');
      // ボタンの文言を変更
      $('#store_view_more').text('一部を見る');
    } else {
      // 「partial」クラスを追加
      $('.content_item.store').toggleClass('partial');
      // ボタンの文言を変更
      $('#store_view_more').text('もっと見る');
    }
  });

  // VTuber支援事業のカバー画像を制御
  $('.support_image_wrapper').hover(
    function () {
      console.log(1);
      // ホバー時のクラスを追加
      $('.support_image_hover').toggleClass('hov');
      $('.hover_text').toggleClass('hov');
      $('.support_image').toggleClass('hov');
    },
    function () {
      console.log(0);
      // ホバー時のクラスを削除
      $('.support_image_hover').toggleClass('hov');
      $('.hover_text').toggleClass('hov');
      $('.support_image').toggleClass('hov');
    }
  );

  // ピックアップ画像リンクのソースを制御（ロード時）
  $(window).on('load', function() {
    // 画面幅が720px以下の時、画像の横幅を狭いものに変更
    if ($(window).width() < 720) {
      $('#pu_img_1').attr('src', 'https://placehold.co/680x280');
      $('#pu_img_2').attr('src', 'https://placehold.co/680x280');
    }
  });

  // ピックアップ画像リンクのソースを制御（サイズ変更時）
  $(window).resize(function(){
    // 画面幅が720px以下の時、画像の横幅を狭いものに変更
    if ($(window).width() < 720) {
      $('#pu_img_1').attr('src', 'https://placehold.co/680x280');
      $('#pu_img_2').attr('src', 'https://placehold.co/680x280');
    } else {
      $('#pu_img_1').attr('src', 'https://placehold.co/1280x280');
      $('#pu_img_2').attr('src', 'https://placehold.co/1280x280');
    }
  });
