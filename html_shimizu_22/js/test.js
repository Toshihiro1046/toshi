// jsを記述する際はここに記載していく

// 箱の中身を確認します
// 0 ~ 4までの数字が出ます

// [ID:sound-file]の音声ファイルを再生[play()]する
var music = new Audio();
  function init() {
    music.preload = "auto";
    music.src = ".//01-We-Are-Confidence-Man.mp3";
    music.load();

    music.addEventListener("ended", function () {
      music.currentTime = 0;
      music.play();
    }, false);
  }

  function play() {
    music.loop = true;
    music.play();
  }

  init();

  $(".start").on("click",
  function () {
      $('.start').fadeOut();
      $('.character_select').fadeIn(1500);
  });


$(function () {
    // カブトムシを出した時
    $(".c1").on("click", 
       function () {
           var random = Math.floor(Math.random() * 3);
           console.log("選ばれる")
           if (random == 0) {
            // 0の時に実行したいことをかく
            console.log("ポン");
            $('.battle_main').html('<img src="img/insect1.jpg." width="200px" alt="サンプル画像">')
            $('.battle_sub').html('<img src="img/insect1.jpg." width="200px" alt="サンプル画像">');
        }
        else if (random == 1){
            console.log("ポン");
            $('.battle_main').html('<img src="img/insect1.jpg." width="200px" alt="サンプル画像">')
            $('.battle_sub').html('<img src="img/insect2.jpg." width="200px" alt="サンプル画像">');
        }
        else if (random == 2){
            console.log("ポン");
            $('.battle_main').html('<img src="img/insect1.jpg." width="200px" alt="サンプル画像">')
            $('.battle_sub').html('<img src="img/insect3.jpg." width="200px" alt="サンプル画像">');
        }
        // この下は消さない
    });
    $(".c1").on("click",
    function () {
        $('.character').fadeOut();
        $('.sentence1').fadeOut();
        $('.fight').fadeIn(1500);
        $('.battle_moji_main').html('自分')
        $('.battle_moji_sub').html('相手')

    });

    // クワガタを出した時
    $(".c2").on("click", 
       function () {
           var random = Math.floor(Math.random() * 3);
           console.log("相手が選ばれる")
           if (random == 0) {
            // 0の時に実行したいことをかく
            console.log("ポン");
            $('.battle_main').html('<img src="img/insect2.jpg." width="250px" alt="サンプル画像">');
            $('.battle_sub').html('<img src="img/insect1.jpg." width="250px" alt="サンプル画像">');
        }
        else if (random == 1){
            console.log("ポン");
            $('.battle_main').html('<img src="img/insect2.jpg." width="250px" alt="サンプル画像">');
            $('.battle_sub').html('<img src="img/insect2.jpg." width="250px" alt="サンプル画像">');
        }
        else if (random == 2){
            console.log("ポン");
            $('.battle_main').html('<img src="img/insect2.jpg." width="250px" alt="サンプル画像">');
            $('.battle_sub').html('<img src="img/insect3.jpg." width="250px" alt="サンプル画像">');
        }
        // この下は消さない
    });
    $(".c2").on("click",
    function () {
    $('.character').fadeOut();
    $('.sentence1').fadeOut();
    $('.fight').fadeIn(1500);
    $('.battle_moji_main').html('自分')
    $('.battle_moji_sub').html('相手')
    });

    // ハチを出した時
    $(".c3").on("click", 
       function () {
           var random = Math.floor(Math.random() * 3);
           console.log("相手が選ばれる")
           if (random == 0) {
            // 0の時に実行したいことをかく
            console.log("ポン");
            $('.battle_main').html('<img src="img/insect3.jpg." width="250px" alt="サンプル画像">');
            $('.battle_sub').html('<img src="img/insect1.jpg." width="250px" alt="サンプル画像">');
        }
        else if (random == 1){
            console.log("ポン");
            $('.battle_main').html('<img src="img/insect3.jpg." width="250px" alt="サンプル画像">');
            $('.battle_sub').html('<img src="img/insect2.jpg." width="250px" alt="サンプル画像">');
        }
        else if (random == 2){
            console.log("ポン");
            $('.battle_main').html('<img src="img/insect3.jpg." width="250px" alt="サンプル画像">');
            $('.battle_sub').html('<img src="img/insect3.jpg." width="250px" alt="サンプル画像">');
        }
        // この下は消さない
    });
    $(".c3").on("click",
    function () {
    $('.character').fadeOut();
    $('.sentence1').fadeOut();
    $('.fight').fadeIn(1500);
    $('.battle_moji_main').html('自分')
    $('.battle_moji_sub').html('相手')
    });
    // console.log("自分体力ゲージ");
    // $('.battle_moji_main').html("10");
    // console.log("相手体力ゲージ");
    // $('.battle_moji_sub').html("10");
});



$(function () {
 // グーを出した時
    $(".a1").on("click", 
    function () {
        var random = Math.floor(Math.random() * 3);
        console.log(random, "便利な機能を使ってランダムな数字が出ます");
        if (random == 0) {
          // 0の時に実行したいことをかく
          console.log("ポン");
          $('.kekka_main').html('<img src="img/0.jpg." width="250px" alt="サンプル画像">');
          $('.kekka_sub').html('<img src="img/0.jpg." width="250px" alt="サンプル画像">');
          console.log("文字");
          $('.kekka_moji').html('あいこ');
        }
         else if (random == 1) {
          // 1の時に実行したいことをかく
          console.log("ポン");
          $('.kekka_main').html('<img src="img/0.jpg." width="250px" alt="サンプル画像">');
          $('.kekka_sub').html('<img src="img/1.png." width="250px" alt="サンプル画像">');
          console.log("文字");
          $('.kekka_moji').html('勝ち');
        } else if (random == 2) {
          // 2の時に実行したいことをかく
          console.log("ポン");
          $('.kekka_main').html('<img src="img/0.jpg." width="250px" alt="サンプル画像">');
          $('.kekka_sub').html('<img src="img/2.jpg." width="250px" alt="サンプル画像">');
          console.log("文字");
          $('.kekka_moji').html('負け');
        }
        // この下は消さない
        
    });
    $(".a1").on("click",
    function () {
        $('.button').fadeOut();
        $('.sentence2').fadeOut();
        $('.reload1').show();
    });

// チョキを出した時
    $(".a2").on("click", 
    function () {
        var random = Math.floor(Math.random() * 3);
        console.log(random, "便利な機能を使ってランダムな数字が出ます");
        if (random == 0) {
          // 0の時に実行したいことをかく
          console.log("ポン");
          $('.kekka_main').html('<img src="img/1.png." width="200px" alt="サンプル画像">');
          $('.kekka_sub').html('<img src="img/0.jpg." width="200px" alt="サンプル画像">');
          console.log("文字");
          $('.kekka_moji').html('負け');
        }
         else if (random == 1) {
          // 1の時に実行したいことをかく
          console.log("ポン");
          $('.kekka_main').html('<img src="img/1.png." width="200px" alt="サンプル画像">');
          $('.kekka_sub').html('<img src="img/1.png." width="200px" alt="サンプル画像">');
          console.log("文字");
          $('.kekka_moji').html('あいこ');
        } else if (random == 2) {
          // 2の時に実行したいことをかく
          console.log("ポン");
          $('.kekka_main').html('<img src="img/1.png." width="200px" alt="サンプル画像">');
          $('.kekka_sub').html('<img src="img/2.jpg." width="200px" alt="サンプル画像">');
          console.log("文字");
          $('.kekka_moji').html('勝ち');
        }
        // この下は消さない
    });

    $(".a2").on("click",
    function () {
        $('.button').fadeOut();
        $('.sentence2').fadeOut();
        $('.reload1').show();
    });

// パーを出した時
    $(".a3").on("click", 
    function () {
        var random = Math.floor(Math.random() * 3);
        console.log(random, "便利な機能を使ってランダムな数字が出ます");
        if (random == 0) {
          // 0の時に実行したいことをかく
          console.log("ポン");
          $('.kekka_main').html('<img src="img/2.jpg." width="200px" alt="サンプル画像">');
          $('.kekka_sub').html('<img src="img/0.jpg." width="200px" alt="サンプル画像">');
          console.log("文字");
          $('.kekka_moji').html('勝ち');
        }
         else if (random == 1) {
          // 1の時に実行したいことをかく
          console.log("ポン");
          $('.kekka_main').html('<img src="img/2.jpg." width="200px" alt="サンプル画像">');
          $('.kekka_sub').html('<img src="img/1.png." width="200px" alt="サンプル画像">');
          console.log("文字");
          $('.kekka_moji').html('負け');
        } else if (random == 2) {
          // 2の時に実行したいことをかく
          console.log("ポン");
          $('.kekka_main').html('<img src="img/2.jpg." width="200px" alt="サンプル画像">');
          $('.kekka_sub').html('<img src="img/2.jpg." width="200px" alt="サンプル画像">');
          console.log("文字");
          $('.kekka_moji').html('あいこ');
        }
        // この下は消さない
    });

    $(".a3").on("click",
    function () {
        $('.button').fadeOut();
        $('.sentence2').fadeOut();
        $('.reload1').show();
    });
});