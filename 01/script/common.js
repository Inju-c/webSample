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
