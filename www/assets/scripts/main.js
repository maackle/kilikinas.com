(function() {
  $(function() {
    return $(window).scroll(function(e) {
      var $scrollables, y;
      $scrollables = $('[data-bg-speed]');
      y = $(this).scrollTop();
      return $scrollables.each(function(i, el) {
        var speed;
        speed = $(el).attr('data-bg-speed');
        console.log("-" + (y / speed) + "px");
        return $(this).scrollTop("-" + (y / speed) + "px");
      });
    });
  });

}).call(this);
