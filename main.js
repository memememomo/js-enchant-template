enchant();

/*

Core
- rootScene
-- Sprite (bear)

*/

window.onload = function() {

    // Coreの設定
    var core = new Core(320, 320);
    core.preload('chara1.png');
    core.fps = 15;
    core.onload = function() {

        /***
         * ベタ書き
        // Spriteの設定
        var bear = new Sprite(32, 32);
        bear.image = core.assets['chara1.png'];
        bear.x = 0;
        bear.y = 0;

        // chara1.pngの左上の32x32を切り取る
        bear.frame = 0;

        // 新しいフレームに入ったら
        bear.addEventListener('enterframe', function() {

            // くまを操作する
            if (core.input.left)  this.x -= 5;
            if (core.input.right) this.x += 5;
            if (core.input.up)    this.y -= 5;
            if (core.input.down)  this.y += 5;

            //// 衝突判定
            // intersect
            // if (this.intersect(enemy)) {
            //     label.text = 'hit!';
            // }

            // within
            if (this.within(enemy, 10)) {
                label.text = 'HIT!';

                // ゲームオーバー処理
                core.pushScene(gameOverScene);
                core.stop();
            }


            // X軸に動く
            // this.x += 5;

            // アニメーション
            // this.frame = this.age % 3;

            // 端に行ったらスタート地点に戻る
            // if (this.x > 320) this.x = 0;

            // 2度ずつ回転(Sprite)
            //this.rotate(2);

            // 拡大(Sprite)
            //this.scale(1.01, 1.01);
        });

        // くまをタッチしたら
        bear.on('touchstart', function() {
            // 消す
            core.rootScene.removeChild(this);
        });

        // 画面をタッチしたら
        core.rootScene.on('touchstart', function(e) {
            bear.x = e.x;
            bear.y = e.y;
        });


        // Spriteの設定
        var enemy = new Sprite(32, 32);
        enemy.image = core.assets['chara1.png'];
        enemy.x = 80;
        enemy.y = 0;
        enemy.frame = 5;

        // ゲームオーバScene
        var gameOverScene = new Scene();
        gameOverScene.backgroundColor = 'black';

        // ラベル表示
        var label = new Label();
        label.x = 280;
        label.y = 5;
        label.color = 'red';
        label.font = '14px "Arial"';


        // 経過秒数表示
        // label.text = '0';
        // label.on('enterframe', function() {
        //     label.text = (core.frame / core.fps).toFixed(2);
        // });

        // rootSceneに乗せる
        core.rootScene.addChild(bear);
        core.rootScene.addChild(label);
        core.rootScene.addChild(enemy);

         ****/

        var Bear = Class.create(Sprite, {
            initialize: function(x, y) {
                Sprite.call(this, 32, 32);
                this.x = x;
                this.y = y;
                this.frame = rand(5);
                this.opacity = rand(100) / 100;
                this.image = core.assets['chara1.png'];

                // 回転
                // this.on('enterframe', function() {
                //     this.rotate(rand(10));
                // });

                // タイムライン
                this.tl.moveBy(rand(100), 0, 40, enchant.Easing.BOUNCE_EASEOUT)
                       .moveBy(-rand(100), -rand(20), rand(20))
                       .fadeOut(20)
                       .fadeIn(10)
                       .loop();

                core.rootScene.addChild(this);
            }
        });

        var bears = [];
        for (var i = 0; i < 100; i++) {
            bears[i] = new Bear(rand(320), rand(320));
        }
    };
    core.start();
};

function rand(n) {
    return Math.floor(Math.random() * (n+1));
}
