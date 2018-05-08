var map = document.getElementById("map");
(function () {
    window.Sun = Class.extend({
        init: function (option) {
            this.sunNum = option.startSunNum;
            this.productSunTime = option.productSunTime;
            this.loop = function () {
                //创建一个阳光
                this.img = document.createElement("img");
                this.img.className = "theSun";
                this.img.src = 'images/interface/Sun.gif';
                map.appendChild(this.img);

                //随机生成img的水平位置 而且不能超出地图
                this.img.style.left = Math.random() * (map.offsetWidth - this.img.offsetWidth) + 'px';

                $(this.img).animate({"top": "610"}, 6000, function () {
                    $(this).remove();
                });
            }
            this.uiRender();
            this.setSun = function setStar(n) {
                this.sunNum += n;
                this.uiRender();
                // 在这里调用card检测是否可点击
                game.card.cheak();
            }
        },
        product: function () {
            var self = this;

            setTimeout(function () {
                self.loop();
            }, 5000);

            setInterval(self.loop, self.productSunTime);

            this.bindEvent();

        },
        bindEvent: function () {
            var self = this;
            //事件委托 点击小太阳
            map.onclick = function (event) {

                if (event.target.tagName === "IMG" && event.target.className === "theSun") {
                    self.setSun(25);
                    event.target.parentNode.removeChild(event.target);
                }
            }

        },
        uiRender: function () {
            $(".sunNum").text(this.sunNum);
        }
    })

})();