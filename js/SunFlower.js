(function () {
    window.SunFlower = Class.extend({
        init: function (i) {
            this.index = i;
        },
        render: function () {
            var self = this;
            //创建一个阳光 并且有一小段位置移动
            this.img = $("<img class='theSun' src='images/interface/Sun.gif'' />");
            this.img.css("left", game.plantLeft);
            this.img.css("top", game.plantTop);
            this.img.animate({
                "left": game.plantLeft + (15 * this.index) + (Math.random() * 30),
                "top": game.plantTop + (12 * this.index) + (Math.random() * 50 - 25)
            }, 1000, function () {
                setTimeout(function () {
                    self.img.remove();
                }, 7000);
            });
            $("#map").append(this.img);
        },
        //update: function () {
        //    if(this.img) {
        //        this.img.remove();
        //    }
        //}
    })
})()