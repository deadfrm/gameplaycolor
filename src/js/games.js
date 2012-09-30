
(function($) {

  App.Screens.Games = function(identifier) {
      this.init(identifier);
  };

  jQuery.extend(
    App.Screens.Games.prototype,
    App.Screen.prototype, {

    onCreate: function() {
      var self = this;
      self.done = new App.Controls.Button('#control-done', function() {
        self.dismiss();
      });

      self.list = new App.Controls.Scroll('#control-games-scroll', '#control-games-list');

    }

  });

})(jQuery);
