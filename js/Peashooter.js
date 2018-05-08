(function () {
    window.Peashooter = Class.extend({
            init: function (option) {
                var self = this;
                this.pea = [];
                this.setImg = function () {
                    self.img = $("<img class='pea' src='images/plant/PB00.gif'' />");
                    self.left = game.plantLeft + 50;
                    self.img.css("left", self.left);
                    self.img.css("top", game.plantTop + 4);
                    $("#map").append(self.img);
                    //self.sTimer = setInterval(self.setMove, 30)
                    self.pea = [self.img];
                };
                this.hp = option.HP;
            },
            render: function () {
                var self = this;
                this.timer = setInterval(self.setImg, 2000)
            },
            update: function () {
                var self = this;
                // 让子弹飞
                this.monsters = game.monsters;
                this.showMonster = game.showMonster;
                for (var i = 0; i < self.pea.length; i++) {
                    self.pea[i].css("left", self.left += 15);
                    //console.log(self.monsters[i].src);
                    for (var j = 0; j < this.monsters.length; j++) {
                        if (self.pea[i].css("top") == "185px" && self.monsters[j].style.top == "112px") {
                        }
                        if (self.pea[i].css("top") == "295px" && self.monsters[j].style.top == "225px") {
                            if (parseInt(self.pea[i].css("left")) + 56 >= parseInt(self.monsters[j].style.left) + 90 && parseInt(self.pea[i].css("left")) + 56 <= parseInt(self.monsters[j].style.left) + 100) {
                                //这个子弹切换图片 然后消失
                                var pea = self.pea[i];
                                var mon = self.monsters[j];
                                self.pea[i].attr("src", "images/plant/PeaBulletHit.gif");
                                $(mon).css("opacity", 0.5);
                                setTimeout(function () {
                                    pea.remove();
                                    $(mon).css("opacity", 1);
                                }, 60);

                                //僵尸的hp--
                                self.hp[j]--;
                                //当僵尸的hp-=3切换图片并增加头的图片
                                if (self.hp[j] == 3) {
                                    self.monsters[j].src = "images/monster/Zombie/ZombieLostHead.gif";
                                    if (parseInt(self.pea[i].css("left")) + 56 >= parseInt(self.monsters[j].style.left) + 83 && parseInt(self.pea[i].css("left")) + 56 <= parseInt(self.monsters[j].style.left) + 128) {
                                        self.pea[i].attr("src", "images/plant/PeaBulletHit.gif");
                                        $(mon).css("opacity", 0.5);
                                        //console.log(self.monsters);
                                        var pea = self.pea[i];
                                        setTimeout(function () {
                                            pea.remove();
                                            $(mon).css("opacity", 1);

                                        }, 60);

                                    }
                                }
                                // hp-=6时再切换图片并从怪物数组中删除
                                // 定时100移除节点
                                if (self.hp[j] <= 0) {
                                    //console.log(j);
                                    self.monsters[j].src = "images/monster/Zombie/ZombieDie.gif";
                                    self.len = self.monsters.length;
                                    self.lens = self.showMonster.length;
                                    //console.log(len);
                                    setTimeout(function () {
                                        mon.remove();
                                        //console.log(j);
                                        //一头代码
                                        self.len -= 1;
                                        console.log(self.len);
                                        if (self.len == 0) {
                                            alert("游戏结束");
                                        }

                                        //if(self.lens == self.len && self.len-j == 0) {
                                        //    console.log(222)
                                        //}




                                    }, 1500);
                                }
                            }
                        }
                        if (self.pea[i].css("top") == "385px" && self.monsters[j].style.top == "315px") {
                        }
                    }
                }
            }
        }
    )
})()

