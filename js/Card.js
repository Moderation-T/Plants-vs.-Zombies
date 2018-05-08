(function () {
    window.Card = Class.extend({
        init: function (option) {
            this.grassLength = option.grassLength;
            this.plantPosition = option.plantPosition;
            this.plantArr = []; //这就是个植物数组了
            this.shooter = [];
            this.flower = [];
        },
        cheak: function () {
            var self = this;
            // 在这里检测卡片显示灰色还是亮色
            $(".cardList div .needNum").each(function (i) {
                //console.log(self.card[i].lSrc);
                if ($(this).text() <= game.sun.sunNum) {
                    $(this).parent().children("img").attr("src", game.background.card[i].lSrc);

                }
            });
        },
        bindEvent: function () {
            var self = this;
            // 当图片点亮状态时  点击生成移动的植物节点
            //事件委托 点击卡片列表
            $(document).on("click", ".plantDiv", function (e) {
                var PlantDiv = $(this);
                //console.log($(this).index());
                //console.log($(this).children("#plantCard").attr("src"));
                //console.log(game.background.card[$(this).index()].lSrc);
                if ($(this).children("#plantCard").attr("src") == game.background.card[$(this).index()].lSrc) {
                    self.plant = $("<img class='plantCard' src='images/plant/" + game.background.card[$(this).index()].name + ".gif' />");
                    $(".cardSelect").append(self.plant);

                }

                //如果移动植物节点存在  设置鼠标跟随和右击删除功能
                if ($(".plantCard")) {
                    var thisCard = $(this);
                    //鼠标跟随
                    $(document).on("mousemove", function (e) {
                        var e = window.event || e;
                        var l = e.clientX;
                        var t = e.clientY;
                        var w = self.plant.width();
                        var h = self.plant.height();
                        self.plant.css("left", l - w / 2);
                        self.plant.css("top", t - h / 2);

                    });

                    //清除默认的右击事件
                    $(document).bind("contextmenu", function () {
                        return false;
                    });

                    //右击删除节点
                    $(document).on("mousedown", function (e) {
                        if (e.which == 3) {
                            self.plant.remove();
                            //self.plant = null;
                            $(document).unbind("click");
                            self.bindEvent();
                        }
                    });

                    //鼠标在草坪区域点击时，删除移动植物节点，并且生成植物
                    if (self.plant) {
                        $(document).bind("click", function (e) {
                            var e = e || window.event;
                            //var clickLeft = e.clientX;
                            var clickTop = e.clientY;
                            var clickLeft = e.clientX;
                            var grassTop = game.background.grass.top;
                            var grassHeight = game.background.grass.height;

                            // 如果这个位置已经有图片了  就跳出点击事件
                            for (var i = 0; i < self.grassLength; i++) {
                                if (clickTop > grassTop + grassHeight / self.grassLength * i && clickTop < grassTop + grassHeight / self.grassLength * (i + 1)) {
                                    for (var j = 0; j < 9; j++) {
                                        if (clickLeft > 123 + 80 * j && clickLeft < 123 + 80 * (j + 1)) {
                                            //console.log(i,j);
                                            //当前点击的位置的left和top
                                            var currentTop = self.plantPosition[i];
                                            var currentLeft = 150 + 80 * j;
                                            if (self.plantArr.length > 0) {
                                                for (var q = 0; q < self.plantArr.length; q++) {
                                                    //遍历所有的植物标签
                                                    //console.log(self.plantArr[i][0].offsetLeft);
                                                    //记录已生成植物的坐标
                                                    var plantLeft = self.plantArr[q][0].offsetLeft;
                                                    var plantTop = self.plantArr[q][0].offsetTop;
                                                    //判断点击的位置是否已生成植物
                                                    if (currentLeft == plantLeft && currentTop == plantTop) {
                                                        //console.log(1);
                                                        return false;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            ;
                            // 这里循环的是点击位置
                            for (var i = 0; i < self.grassLength; i++) {
                                if (clickTop > grassTop + grassHeight / self.grassLength * i && clickTop < grassTop + grassHeight / self.grassLength * (i + 1)) {
                                    self.characterPlant = $("<img class='" + game.background.card[PlantDiv.index()].name + "' src='" + self.plant.attr('src') + "' />");
                                    self.characterPlant.css("top", self.plantPosition[i]);
                                    for (var j = 0; j < 9; j++) {
                                        if (clickLeft > 123 + 80 * j && clickLeft < 123 + 80 * (j + 1)) {
                                            self.characterPlant.css("left", 150 + 80 * j);
                                            //生成植物
                                            $(".plants").append(self.characterPlant);
                                            // 将植物添加到数组中去
                                            self.plantArr.push(self.characterPlant);
                                            // 更新植物数组
                                            game.plantArr = self.plantArr;
                                            if (self.characterPlant.attr("class") == "SunFlower") {
                                                self.flower.push(self.characterPlant);
                                                game.flower = self.flower;
                                            }
                                            if (self.characterPlant.attr("class") == "Peashooter") {
                                                self.shooter.push(self.characterPlant);
                                                game.shooter = self.shooter;


                                            }

                                            //移除移动的植物
                                            self.plant.remove();
                                            $(document).unbind("click");
                                            self.bindEvent();
                                        }
                                    }

                                    // 减去相应小太阳的值
                                    game.sun.setSun(-parseInt(thisCard.children(".needNum").text()));

                                    // 检测明暗
                                    $(".cardList div .needNum").each(function (i) {
                                        //console.log($(this)[0].innerHTML);
                                        //console.log(game.sun.sunNum);
                                        //console.log($(this)[0].parentNode.childNodes[0].src);
                                        if ($(this)[0].innerHTML > game.sun.sunNum) {
                                            $(this)[0].parentNode.childNodes[0].src = game.background.card[i].src;
                                        }
                                    })
                                }
                            }
                            ;

                        })
                    }

                }
            })
        },
    })
})()