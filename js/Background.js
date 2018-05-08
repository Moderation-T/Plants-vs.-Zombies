(function () {
    window.Background = Class.extend({
        init: function (option) {
            // 得到背景图片
            this.backgroundImage = option.backgroundImage || " ";
            // 接收卡片相关信息的数组 数组中的对象包含name src num属性
            this.card = option.card;
            // 接收草地的相关信息
            this.grass = option.grass || null;

            // 接收滚动草地的信息
            this.scrollGrass = option.scrollGrass || null;
            // 接收出场怪兽
            this.showMonster = option.showMonster;
        },
        render: function () {
            $(".ground").css("background-image", "url(" + this.backgroundImage + ")");
            $(".menu").css("display", "none");
            $(".openscene").css("display", "none");

        },
        update: function () {
            var self = this;

            // 背景出场移动展示
            $(".ground").animate({"left": -500}, 1000).delay(1500);
            $(".ground").animate({"left": -115}, 500);

            // 怪兽移动出场展示
            $(".monster").animate({"left": 565}, 1000, function () {
                //展示出场的怪物
                for (var i = 0; i < self.showMonster.length; i++) {
                    self.showImg = $("<img class='theMonster' src='images/monster/" + self.showMonster[i].name + "/" + self.showMonster[i].name + ".gif' />");
                    self.showImg.css({
                        "left": Math.random() * 200 + 20,
                        "top": Math.random() * 200 + 100
                    })
                    $(".monster").append(self.showImg);
                }
            }).delay(1500);
            $(".monster").animate({"left": 1065}, 500, function () {
                $(this).empty();

            });

            setTimeout(function () {
                // 显示上方菜单
                $(".topMenu").css("display", "block");
                //显示怪兽
            }, 1000);

            setTimeout(function () {
                // 显示灰色的卡片
                for (var i = 0; i < self.card.length; i++) {
                    var cardName = self.card[i].name;
                    var cardImg = self.card[i].src;
                    var cardSunNum = self.card[i].needSunNum;
                    self.cardDiv = $("<div class='plantDiv' id='" + cardName + "'></div>");
                    self.cardImg = $("<img id='plantCard' src='" + cardImg + "'>");
                    self.cardSpan = $("<span class='needNum'>" + cardSunNum + "</span>");
                    self.cardDiv.append(self.cardImg);
                    self.cardDiv.append(self.cardSpan);
                    $(".cardList").append(self.cardDiv);
                }

                //创建草地
                if (self.grass.act) {
                    var grassImage = self.grass.src;
                    var grassLeft = self.grass.left;
                    var grassTop = self.grass.top;
                    var grassHeight = self.grass.height;
                    //var grassWidth = self.grass.width;
                    self.grassImg = $("<img src='" + grassImage + "'>");
                    self.grassImg.addClass("grass");
                    self.grassImg.css("left", grassLeft);
                    self.grassImg.css("top", grassTop);
                    self.grassImg.css("height", grassHeight);
                    $(".mainScene").append(self.grassImg);

                    // 开始草地滚动的动画
                    for (var i = 0; i < self.scrollGrass.length; i++) {
                        var scrollGrassTop = self.scrollGrass[i].top;
                        self.scrollGrassImg = $("<img src='images/interface/SodRoll.png'>");
                        self.scrollGrassCap = $("<img src='images/interface/SodRollCap.png'>");
                        self.scrollGrassImg.addClass("sodRoll");
                        self.scrollGrassCap.addClass("sodRollCap");
                        self.scrollGrassImg.css("top", scrollGrassTop);
                        self.scrollGrassCap.css("top", scrollGrassTop + 124);
                        $(".mainScene").append(self.scrollGrassImg);
                        $(".mainScene").append(self.scrollGrassCap);
                    }
                }
            }, 3000);

            //显示阳关面板  卡片变亮
            setTimeout(function () {
                //var self = this;
                // 显示小太阳面板
                $(".tool").css("display", "block");
                // 灰色卡片变色 如果他们的needSunNum 大于或等于 SunNum 就变亮
                // 初始检测在这里完成  然后每当点击一次阳光是检测一次
                $(".cardList div .needNum").each(function (i) {
                    //console.log(self.card[i].lSrc);
                    if ($(this).text() <= game.sun.sunNum) {
                        $(this).parent().children("img").attr("src", self.card[i].lSrc);

                    }
                });

            }, 5500);

            this.bindEvent();

        },
        bindEvent: function () {
            var self = this;
            //事件委托
            map.onclick = function (event) {
                //当点击时给star
                if (event.target.tagName === "IMG" && event.target.className === "plantCard") {
                    console.log(111)
                }
            }
        }

    })
})();