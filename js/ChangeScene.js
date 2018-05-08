(function () {
    //控制场景切换
    window.ChangeScene = Class.extend({
        init: function () {
            //设置display属性
            this.SetBlock = function () {
                var a = arguments.length;
                while (a--) {
                    arguments[a].css("display", "block");
                }
            };
            this.SetNone = function () {
                var a = arguments.length;
                while (a--) {
                    arguments[a].css("display", "none");
                }
            };


            // 执行绑定事件
            this.bindEvent();
        },

        goMenu: function () {
            this.SetBlock($(".menu"));
        },

        showOption: function () {
            this.SetBlock($(".option"));
        },

        showHelp: function () {
            this.SetBlock($(".help"));
        },

        showLevel: function () {
            this.SetBlock($(".selectLevel"));

        },

        showGame: function () {
            this.SetBlock($(".selectGame"));
        },

        bindEvent: function () {

        }
    })
})()


//控制场景的切换












