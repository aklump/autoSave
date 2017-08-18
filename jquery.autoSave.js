/*
 jQuery autoSave v1.0.0 - 2013-04-05
 (c) 2017 Aaron Klump
 (c) 2013 Yang Zhao - geniuscarrier.com
 license: http://www.opensource.org/licenses/mit-license.php
 */
(function ($) {
  $.fn.autoSave = function (callback, ms) {
    return this.each(function () {
      var timer = 0,
          $this = $(this),
          delay = ms || 1000,
          type  = $this.attr('type');
      switch (type) {
        case 'checkbox':
          $this.on('click', callback);
          break;
        default:
          $this.keyup(function () {
            clearTimeout(timer);
            var $context = $this.val();
            if (localStorage) {
              localStorage.setItem("autoSave", $context);
            }
            timer = setTimeout(callback, delay);
          });
          break;
      }
    });
  };
})(jQuery);
