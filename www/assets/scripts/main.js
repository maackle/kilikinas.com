(function() {
  $(function() {
    var $orderChoices, $orderItems, resetOrderPage, unfoldOrderPage;
    $(window).scroll(function(e) {
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
    $orderChoices = $('.order-page .location-choices');
    $orderItems = $('.order-page .squareup-embeds');
    resetOrderPage = function(e) {
      $orderChoices.fadeIn();
      $orderItems.hide();
      return $orderItems.find('.local-items, .anywhere-items').hide();
    };
    unfoldOrderPage = function(e) {
      $orderChoices.hide();
      $orderItems.fadeIn('slow');
      if ($(this).hasClass('local')) {
        return $orderItems.find('.local-items').show();
      } else {
        return $orderItems.find('.anywhere-items').show();
      }
    };
    $orderChoices.find('.choice').click(unfoldOrderPage);
    return $orderItems.find('a.reset').click(resetOrderPage);
  });

}).call(this);
