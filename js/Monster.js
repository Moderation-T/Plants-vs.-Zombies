(function () {
    window.Monster = Class.extend({
        init: function (option, count) {
            // 僵尸的位置
            this.monsterPosition = option.monsterPosition;
            // 展示僵尸的数量���
            this.showMonster = option.showMonster;
            // �已显示僵尸�
            //this.appearMonsterArr = [];
            // �记录僵尸个数�
            this.count = count;
            //��僵尸初始leftֵ
            this.x = 790;
            // ��检测僵尸位置�
            //this.appearMonster = $("<img class='appearMonster' src='images/monster/"+this.showMonster[this.count].name+"/"+this.showMonster[this.count].name+".gif' />");
            //this.appearMonster.css({
            //    "left":600,
            //    "top": this.monsterPosition[parseInt(Math.random()*this.monsterPosition.length)]
            //})
            //$(".mainScene").append(this.appearMonster);

        },
        render: function () {


            this.appearMonster = $("<img class='appearMonster' src='images/monster/" + this.showMonster[this.count].name + "/" + this.showMonster[this.count].name + ".gif' />");
            this.appearMonster.css({
                "top": this.monsterPosition[parseInt(Math.random() * this.monsterPosition.length)],
                "left": this.x,
            })
            $(".mainScene").append(this.appearMonster);
            game.monsters.push(this.appearMonster[0]);
        },

        update: function () {
            this.x -= 1;
            this.appearMonster.css({
                "left": this.x,
            })

        }
    })

})()


