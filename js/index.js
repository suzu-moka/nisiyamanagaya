$(function () {
  if (window.matchMedia("(max-width: 429px)").matches) {
    console.log(2)
    //画面横幅が429px以下のときの処理
    let item_num = $('div.item').length;
    let deg = 360.0/item_num;
    let red = (deg*Math.PI/180.0);
    let circle_r = $("div.item").width() * 1.90;
    $('div.item').each(function(i, elem) {
        let x = Math.cos(red * i) * circle_r + circle_r;
        let y = Math.sin(red * i) * circle_r + circle_r;
        $(elem).css('left', x);
        $(elem).css('top', y);
    });
  } else {
    console.log(1)
    let item_num = $('div.item').length;
    let deg = 360.0/item_num;
    let red = (deg*Math.PI/180.0);
    let circle_r = $("div.item").width() * 2.0;
    $('div.item').each(function(i, elem) {
        let x = Math.cos(red * i) * circle_r + circle_r;
        let y = Math.sin(red * i) * circle_r + circle_r;
        $(elem).css('left', x);
        $(elem).css('top', y);
    });
  };
  

});





// slideshow
  let pic_array=[
    "https://bell-cocoro.org/ibasyo-rabo/img/LP/LP_main_visual.png",
    "https://bell-cocoro.org/ibasyo-rabo/img/LP/LP_second_visual.png",
    "https://bell-cocoro.org/ibasyo-rabo/img/LP/LP_third_visual.png"
  ];
  console.log(pic_array[1]);
  
  let img = document.querySelector(".main__thumbnail");
  let next = document.getElementById("right");
  let back = document.getElementById("left");
  console.log(img);
  
  let count = 0;

  function delay(){
    if(count == 2){
      count = 0;
    }else{
      count++;
    }
  img.style.backgroundImage = 'url(' + pic_array[count] + ')';
  }

  function prev(){
    if(count == 0){
      count = 2;
    }else{
      count--;
    }
  img.style.backgroundImage = 'url(' + pic_array[count] + ')';
  }

  next.addEventListener("click",function(){
    delay();
  });

  back.addEventListener("click",function(){
    prev();
  });

  window.setInterval(delay,4500)
