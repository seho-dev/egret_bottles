/**
 * 游戏背景类
 */
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var Game = (function (_super) {
    __extends(Game, _super);
    function Game() {
        var _this = _super.call(this) || this;
        _this.timeCount = 0;
        // 漏掉的瓶子
        _this.MissBottles = 0;
        /**游戏是否结束了 */
        _this.isOver = false;
        /**得分 */
        _this._scoreNum = 0;
        _this._bottlesMain = 0;
        _this.skinName = 'GameSceneSkin';
        _this.BoxAnimation.play(0); // 播放动画
        // 设置初始速度
        _this.speed = 10;
        // 监听帧事件滚动背景图片
        _this.addEventListener(egret.Event.ENTER_FRAME, _this.rollBg, _this);
        // 监听帧事件,创建瓶子,并向下移动
        _this.bottleGroup.addEventListener(egret.Event.ENTER_FRAME, _this.creatBottle, _this);
        _this.timeOnEnterFrame = egret.getTimer();
        // 添加触摸事件
        _this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, _this.bottlesTouchStart, _this);
        _this.addEventListener(egret.TouchEvent.TOUCH_MOVE, _this.bottlesTouchMove, _this);
        _this.addEventListener(egret.TouchEvent.TOUCH_END, _this.bottlesTouchEnd, _this);
        // 创建移动中的瓶子
        _this.showBottle = new Bottles(1);
        _this.showBottle.anchorOffsetX = 25 / 2; // 设置图像的中心点, 默认锚点是左上角
        _this.showBottle.anchorOffsetY = 90 / 2;
        // 放大
        _this.showBottle.scaleX = 2;
        _this.showBottle.scaleY = 2;
        // 先隐藏
        _this.showBottle.visible = false;
        _this.addChild(_this.showBottle);
        // 给2个按钮加入点击事件
        _this.mainmenuButton.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.backMenu, _this);
        _this.restartButton.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.resetGame, _this);
        return _this;
    }
    // 履带滚动
    Game.prototype.rollBg = function () {
        // 如果游戏结束不会走
        if (!this.isOver) {
            this.bg1.y += this.speed; // y轴越往大，元素会越往下
            if (this.bg1.y >= this.height) {
                // 重置y轴的位置 (让元素设置到顶端因此是负的 + （总高度-bg1的本身高度）)
                this.bg1.y = -this.bg1.height + (this.height - this.bg1.height);
            }
            this.bg2.y += this.speed;
            if (this.bg2.y >= this.height) {
                this.bg2.y = -this.bg2.height + (this.height - this.bg2.height);
            }
        }
    };
    // 创建瓶子
    Game.prototype.creatBottle = function () {
        if (!this.isOver) {
            var now = egret.getTimer(); // 当前执行时运行毫秒数
            var pass = (now - this.timeOnEnterFrame) / 1000;
            this.timeOnEnterFrame = egret.getTimer();
            this.timeCount += pass;
            // 把每一帧消耗的时间累加到this.timeCount,如果超过1s,就创建一个瓶子,并归零,重新开始计算
            if (this.timeCount >= 1) {
                this.timeCount = 0;
                var type = Math.floor(Math.random() * 6 + 1); // 生成1-6的随机数
                var bottle = new Bottles(type); // 生成一个瓶子
                bottle.x = Math.random() * this.bottleGroup.width; // 设置瓶子的所在x轴位置, 履带宽度*随机小数=瓶子所在的x轴像素
                this.bottleGroup.addChild(bottle); // 设置瓶子的x之后，添加到履带上
            }
            // 循环所有的瓶子
            for (var i = this.bottleGroup.numChildren - 1; i >= 0; i--) {
                var item = this.bottleGroup.getChildAt(i); // 获取对应的瓶子
                item.y += this.speed; // 设置y轴所在，和速度一样, 让瓶子往下滑
                if (item.y >= this.height) {
                    // 判断如果漏掉的瓶子超过了5个，那么就游戏结束
                    this.MissBottles++;
                    this.bottleGroup.removeChild(item); // 执行删除
                    // 判断是否超过了5个
                    if (this.MissBottles >= 5) {
                        // 游戏结束
                        this.gameOver();
                    }
                }
            }
        }
    };
    // 触摸瓶子的三种状态
    Game.prototype.bottlesTouchStart = function (e) {
        for (var i = this.bottleGroup.numChildren - 1; i >= 0; i--) {
            var item = this.bottleGroup.getChildAt(i);
            if (item.hitTestPoint(e.stageX, e.stageY)) {
                // 如果重叠
                item.isSelect = true;
                this.touchBottle = item; // 赋值被触摸的对象
                this.showBottle.isSelect = this.touchBottle.isSelect;
                this.showBottle.type = this.touchBottle.type;
                this.showBottle.visible = true;
            }
        }
    };
    Game.prototype.bottlesTouchMove = function (e) {
        if (this.touchBottle) {
            this.showBottle.x = e.stageX;
            this.showBottle.y = e.stageY;
        }
    };
    Game.prototype.bottlesTouchEnd = function (e) {
        if (this.touchBottle) {
            // 如果触摸过的瓶子存在，就让触摸的瓶子透明度还原
            this.touchBottle.isSelect = false;
            this.showBottle.visible = false;
        }
        // 循环所有的箱子
        for (var i = 0; i < this.boxGroup.numChildren; i++) {
            var item = this.boxGroup.getChildAt(i); // 获取每个箱子
            // 如果箱子和当前触摸位置相遇
            if (item.hitTestPoint(e.stageX, e.stageY)) {
                // 判断瓶子的颜色和箱子是否符合
                if (~~item.type === ~~this.touchBottle.type) {
                    // 消除履带上的瓶子
                    this.bottleGroup.removeChild(this.touchBottle);
                    // 判断箱子是否满了
                    if (item.addBottle()) {
                        // 额外加5分
                        // 如果箱子满了一次，页面上的打包箱子的数量就加一
                        this.bottlesMain++;
                        this.scoreNum += 5;
                    }
                    this.scoreNum++; // 加一分
                }
            }
        }
    };
    Game.prototype.gameOver = function () {
        this.isOver = true; // 已结束，不再滚动履带和生产瓶子
        // 把遮罩组打开
        this.gameEndGroup.visible = true;
    };
    // 回到主界面
    Game.prototype.backMenu = function () {
        this.parent.removeChild(this);
    };
    // 重新开启游戏
    Game.prototype.resetGame = function () {
        // 分数清空
        this.scoreNum = 0;
        // 清空漏掉的瓶子
        this.MissBottles = 0;
        // 遮罩层消失
        this.gameEndGroup.visible = false;
        // 结束属性关闭，让履带和瓶子正常滚动
        this.isOver = false;
        // 清空履带上所有的瓶子
        this.bottleGroup.removeChildren();
        // 清空所有箱子里面的瓶子
        for (var i = 0; i < this.boxGroup.numChildren; i++) {
            var item = this.boxGroup.getChildAt(i);
            item.num = 0;
        }
    };
    Object.defineProperty(Game.prototype, "scoreNum", {
        get: function () {
            return this._scoreNum;
        },
        set: function (v) {
            this._scoreNum = v;
            this.score.text = this.endScore.text = v.toString();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "bottlesMain", {
        get: function () {
            return this._bottlesMain;
        },
        set: function (v) {
            this._bottlesMain = v;
            this.bottlesAll.text = v.toString();
        },
        enumerable: true,
        configurable: true
    });
    return Game;
}(eui.Component));
__reflect(Game.prototype, "Game");
