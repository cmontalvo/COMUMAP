(function ($) {

  Drupal.behaviors.comumap = {
    attach: function(context, settings) {
      $('#nice-menu-1 a').click(function () {
        var load_url = '/comumap_callback?url=' + $(this).attr('href').replace('/', '');
        $.ajax({
          url: load_url,
          type: "POST",
          data: {},
          success: function(data) {
           $('#main').html(data[1].data);
          },
          fail: function () {
            alert('error');
          }
        });
        return false;
      });
    }
  };

})(jQuery);

