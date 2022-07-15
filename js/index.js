$(function(){
  var item_num = $('div.item').length;
  var deg = 360.0/item_num;
  var red = (deg*Math.PI/180.0);
  var circle_r = $("div.item").width() * 1;
  $('div.item').each(function(i, elem) {
      var x = Math.cos(red * i) * circle_r + circle_r;
      var y = Math.sin(red * i) * circle_r + circle_r;
      $(elem).css('left', x);
      $(elem).css('top', y);
  });
});