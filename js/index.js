$(function(){




    if (window.matchMedia("(max-width: 429px)").matches) {
        //画面横幅が429px以下のときの処理
        let item_num = $('div.item').length;
        let deg = 360.0 / item_num;
        console.log(deg);
        let red = (deg * Math.PI / 180.0);
        console.log(red);
        let circle_r = $("div.item").width() * 1;
        $('div.item').each(function(i, elem) {
            let x = Math.cos(red * i) * circle_r + circle_r;
            let y = Math.sin(red * i) * circle_r + circle_r;
            $(elem).css('left', x);
            $(elem).css('top', y);
        });
      } else {
        //画面横幅が429px以上のときの処理
        let item_num = $('div.item').length;
        let deg = 360.0 / item_num;
        console.log(deg);
        let red = (deg * Math.PI / 180.0);
        console.log(red);
        let circle_r = $("div.item").width() * 2;
        $('div.item').each(function(i, elem) {
            let x = Math.cos(red * i) * circle_r + circle_r;
            let y = Math.sin(red * i) * circle_r + circle_r;
            $(elem).css('left', x);
            $(elem).css('top', y);
        });
      };
});