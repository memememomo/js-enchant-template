enchant()

window.onload = ->
  core = new Core(320, 320)
  core.preload 'images/chara1.png'
  core.fps = 15
  core.onload = ->
    Bear = Class.create(Sprite, {
      initialize: (x, y) ->
        Sprite.call(@, 32, 32)
        @x = x
        @y = y
        @frame = rand(5)
        @opacity = rand(100) / 100
        @image = core.assets['images/chara1.png']

        # タイムライン
        @tl.moveBy(rand(100), 0, 40, enchant.Easing.BOUNCE_EASEOUT)
               .moveBy(-rand(100), -rand(20), rand(20))
               .fadeOut(20)
               .fadeIn(10)
               .loop()

        core.rootScene.addChild(@)
    })

    bears = []
    bears.push(new Bear(rand(320), rand(320))) for i in [1..100]

  core.start()

rand = (n) ->
  Math.floor(Math.random() * (n+1))
