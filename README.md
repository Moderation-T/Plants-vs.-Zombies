## 简单介绍 
利用面向对象 管理者模式思想  结合jquery 操作DOM树制作的植物大战僵尸
还用到simpleInheritance.js一个小插件 就是改变书写面向对象方式的工具
游戏功能并不完整，当时也是为了深入理解一下面向对象思想写的，并不是为了真的做一个游戏
可供大家学习面向对象思想做以参考

##目录结构如下：
（不是很重要的目录就不展开写了）
<pre>
|-css 
|-images
|-js  
   |-lib
   |-resouce
        |-SetJson.js
        |-setMonster.js
   |-Background.js
   |-Card.js
   |-ChangeScene.js
   |-Game.js
   |-Monster.js
   |-Peashooter.js
   |-Sun.js
   |-SunFlower.js
|-music
|-index.html   
</pre>

## 主要功能与逻辑
- SetJson.js 
    我一个制作了三个小关卡，这个文件夹存储了每个关卡的信息
    第一关代码展示：
```javascript
function setJson(num) {
    switch (num) {
        case 1:
            return {
                //场景背景图片
                "backgroundImage": "images/interface/background1unsodded.jpg",
                //阳光的初始数量
                "startSunNum": 75,
                //测试代码
                //"startSunNum": 1000,
                //产生阳光的间隔时间
                "productSunTime": 10000,
                // 灰色卡片信息
                "card": [
                    {
                        "name": "Peashooter",
                        "src": "images/card/PeashooterG.png",
                        "needSunNum": 100,
                        "lSrc": "images/card/Peashooter.png"
                    }
                ],
                // 草地信息
                "grass": {
                    "src": "images/interface/sod1row.png",
                    "left": 132,
                    "top": 280,
                    "height": 117,
                    "width": 755,
                    "act": true

                },
                // 滚动的草地
                scrollGrass: [
                    {
                        "top": 244
                    }

                ],
                // 草地的范围
                "grassLength": 1,

                //植物的位置数组
                "plantPosition": [291],

                //怪物位置数组
                "monsterPosition": [225],

                // 怪物数组
                "showMonster": [Zombie, Zombie, Zombie, Zombie, Zombie],

                //怪物血量
                "HP": [6, 6, 6, 6, 6],

                // 音效
                "audio":"UraniwaNi",

                //测试代码
                //"showMonster":[Zombie],
                //"HP":[6]
            };
            break;         



- setMonster.js
