(function() {
  var rand;

  enchant();

  window.onload = function() {
    var core;
    core = new Core(320, 320);
    core.preload('images/chara1.png');
    core.fps = 15;
    core.onload = function() {
      var Bear, bears, i, _i, _results;
      Bear = Class.create(Sprite, {
        initialize: function(x, y) {
          Sprite.call(this, 32, 32);
          this.x = x;
          this.y = y;
          this.frame = rand(5);
          this.opacity = rand(100) / 100;
          this.image = core.assets['images/chara1.png'];
          this.tl.moveBy(rand(100), 0, 40, enchant.Easing.BOUNCE_EASEOUT).moveBy(-rand(100), -rand(20), rand(20)).fadeOut(20).fadeIn(10).loop();
          return core.rootScene.addChild(this);
        }
      });
      bears = [];
      _results = [];
      for (i = _i = 1; _i <= 100; i = ++_i) {
        _results.push(bears.push(new Bear(rand(320), rand(320))));
      }
      return _results;
    };
    return core.start();
  };

  rand = function(n) {
    return Math.floor(Math.random() * (n + 1));
  };

}).call(this);
