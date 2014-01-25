enchant()

window.onload = ->
  core = new Core(320, 320)
  core.preload 'chara1.png'
  core.fps = 15
  core.onload = ->
    Bear = Class.create(Sprite, {
      initialize: (x, y) ->
        Sprite.call(this, 32, 32)
        this.x = x
        this.y = y
        this.frame = rand(5)
        this.opacity = rand(100) / 100
        this.image = core.assets['chara1.png']

        # タイムライン
        this.tl.moveBy(rand(100), 0, 40, enchant.Easing.BOUNCE_EASEOUT)
               .moveBy(-rand(100), -rand(20), rand(20))
               .fadeOut(20)
               .fadeIn(10)
               .loop()

        core.rootScene.addChild(this)
    })

    bears = []
    bears.push(new Bear(rand(320), rand(320))) for i in [1..100]

  core.start()

rand = (n) ->
  Math.floor(Math.random() * (n+1))
