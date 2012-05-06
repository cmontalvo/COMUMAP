(function ($) {

  Drupal.behaviors.comumap = {
    attach: function(context, settings) {
      //Ajax menu callback
      $('#nice-menu-1 a').click(function () {
        //Build Url for ajax callback
        var load_url = '/comumap_callback?url=' + $(this).attr('href').replace('/', '');
        //Ajax Callback
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

