$(function () {
  searchWord = function(){
    let searchResult,
        searchText = $(this).val(), // 検索ボックスに入力された値をvalue値に設定
        targetText,
        performResult,
        hitNum;


    // 検索結果を格納するための配列を用意
    searchResult = [];
    performResult = [];

    // 検索結果エリアの表示を空にする
    $('#search-result__list').empty();
    $('.search-result__hit-num').empty();

    // 検索ボックスに値が入ってる場合
    if (searchText != '') {
      $('.addhidden span').each(function() {
        // targetTextはaddhiden spanの各要素のそれぞれの中身の値、つまりそれぞれの検索対象
        targetText = $(this).text();
        // 検索対象となるリストに入力された文字列が存在するかどうかを判断
        if (targetText.indexOf(searchText) != -1) {
          // 合った場合はsearchResultの配列の中にtarget.textを入れる
          searchResult.push(targetText);
          // 何故か条件が合致した方にもhiddenクラスがつけられてしまっていたのでそれを打ち消す感じでshowクラスに対するcssを定義してそれを付け足すようにしました
          $(this).parent().addClass("show");

        }else{
          // なかったらクラスにhiddenを付け足して隠す
          performResult.push(targetText);
          // ここでは各要素がなかったらその要素の親要素にhiddenクラスをつけてかくしたいのでこれでOK
          $(this).parent().addClass("hidden");
          // もとのやつだとhiddenクラスを付け足した要素をperformResultという配列にうわがきしてたので変になってた
        }
      });

      // 検索結果をページに出力
     //for (let i = 0; i < searchResult.length; i ++) {
       //$('<span>').text(searchResult[i]).appendTo('#search-result__list');
     //}

      // ヒットの件数をページに出力
      hitNum = '<span>検索結果</span>：' + searchResult.length + '件見つかりました。';
      $('.search-result__hit-num').append(hitNum);
    }
    // ここで表示したいのは文字列ではないのでダブルクオーテーションはいらない
    console.log(searchResult);
    console.log(performResult);
  };

  // searchWordの実行
  $('#search-text').on('input',searchWord);
});
