var f = 0;
(function () {
    window.Game = Class.extend({
        init: function (option) {
            this.json = option;
            // 每秒多少帧
            this.fps = 60;
            //定时器
            this.timer = null;
            // 场景切换管理
            this.changScene = new ChangeScene();
            // 执行绑定事件
            this.bindEvent();
            // 僵尸数组
            this.monsterArr = [];
            // 控制僵尸生成数量
            this.count = 0;
            // 植物数组
            this.plantArr = [];
            // sunflower技能数组
            this.sunFlowerArr = [];
            //控制豌豆
            this.peaArr = [];
            this.num = 0;
            this.shooter = [];
            // 控制怪物
            this.monsters = [];

        },

        run: function () {
            var self = this;
            this.timer = setInterval(function () {
                f++;
                self.mainloop();


            }, 20);


        },

        mainloop: function () {


            // 植物技能的渲染
            if (this.plantArr.length != 0) {
                for (var i = 0; i < this.plantArr.length; i++) {
                    //console.log(i);
                    this.plantName = this.plantArr[i][0].className;
                    // 获取位置
                    this.plantLeft = this.plantArr[i][0].offsetLeft;
                    this.plantTop = this.plantArr[i][0].offsetTop;
                    if (this.plantName == "SunFlower") {
                        //太阳花每500帧渲染技能
                        if (f % 500 == 0) {
                            this.sunFlowerArr.push(new SunFlower(i));
                            new SunFlower(i).render();
                        }
                    }
                    if (this.plantName == "Peashooter") {
                        if (this.shooter.length > this.num) {
                            this.peaArr.push(new Peashooter(this.json));
                            this.num++;
                            for (var j = 0; j < this.peaArr.length; j++) {
                                if (j == this.peaArr.length - 1) {
                                    this.peaArr[j].render();
                                    //this.peaArr[j].update();
                                }
                            }
                        }

                        //console.log(this.peaArr.length);
                        if (f % 1 == 0) {
                            if (this.peaArr.length != 0) {
                                for (var i = 0; i < this.peaArr.length; i++) {
                                    this.peaArr[i].update();
                                }
                            }
                        }
                    }
                }
            }


            // 僵尸的渲染与移动
            //僵尸的渲染
            if (f % 2000 == 0) {
                if (this.count > this.json.showMonster.length - 1) {
                    return;
                }
                this.monsterArr.push(new Monster(this.json, this.count));
                this.count++;
                for (var i = 0; i < this.monsterArr.length; i++) {
                    if (i == this.monsterArr.length - 1) {
                        this.monsterArr[i].render();
                    }
                }
            }
            // 每60帧走一次
            if (f % 10 == 0) {
                for (var i = 0; i < this.monsterArr.length; i++) {
                    this.monsterArr[i].update();
                }
            }


        },

        pauseGame: function () {

        },

        bindEvent: function () {
            var self = this;
            // 切换关卡
            $(".smalllevel").on("click", function () {
                var idx = $(this).index();
                self.json = setJson(idx);

                // 渲染关卡的背景
                self.background = new Background(self.json);
                self.background.render();
                self.background.update();

                // 阳光的自动生成  应该在放置第一个植物时开启
                self.sun = new Sun(self.json);
                self.sun.product();

                // 引入card类
                // 执行card的绑定事件
                self.card = new Card(self.json);
                self.card.bindEvent();

                //播放音乐
                $("#" + self.json.audio + "")[0].load();
                $("#" + self.json.audio + "")[0].play();
                $("#Faster")[0].pause();

                self.showMonster = self.json.showMonster;

                //背景渲染完成后执行run()方法；
                self.run();
                // 植物的技能发动写在mainloop中  在run中调用
                // 怪兽的移动  和吃植物也写在mainloop中  在run找那个调用

            })
        }

    })
})();