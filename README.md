## 简单介绍 
利用面向对象 管理者模式思想  结合jquery 操作DOM树制作的植物大战僵尸

还用到simpleInheritance.js一个小插件 就是改变书写面向对象方式的工具

游戏功能并不完整，当时也是为了深入理解一下面向对象思想写的，并不是为了真的做一个游戏

可供大家学习面向对象思想做以参考

## 如何查看代码
因为当初逻辑都是自己一点一点想的 所以基本上都是捋思路 再写注释 然后敲代码

所以注释写了很多 这里只是将大体实现的功能和大思路说说

逻辑可以自己试试捋一捋，逻辑这个东西没有必要都一样

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

    我制作了三个小关卡，这个文件夹存储了每个关卡的相关信息

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
```

- setMonster.js

这里存储了怪兽的相关信息

- Game.js

Game类，管理者类
主要函数有：

1. init 初始化 初始值的设定
2. run  执行函数 里边是定时器 执行主循环里的函数
3. mainloop 定义主循环的函数
4. bindEvent 事件绑定函数

- Background.js

背景类，主要是背景的渲染
植物大战僵尸开场主要是 

1. 草地的滚动
2. 屏幕镜头切换展示怪兽
3. 植物卡片的显示
4. 阳光的显示与太阳初始值的展示

> 这个类里涉及的动画基本上都是用jQuery实现的
> 当时有个小坑卡了挺久的，就是我是操作DOM的 节点基本都是动态生成的
> jQuery是不能直接操作动态节点的 要用到时间委托

- Sun.js
Sun类 这里主要是小太阳的控制

1. 一定时间间隔随机位置生成小太阳
2. 小太阳从画布上方生成往下方移动超出画布后消失
3. 点击小太阳，有一段飞向太阳菜单的动画
4. 太阳值增加


- Card.js

Card类，主要是卡片的变亮和变暗
1. 太阳值与卡片固定的所需能量值判断卡片明暗
2. 当图片亮时点击卡片生成跟随鼠标的植物图片
3. 点击右键跟随鼠标的图片消失
4. 点击草坪区域生成植物
5. 草地上有植物时点击无效

> 当时逻辑想的最久的是就是点击草坪 和 怎么判断有植物
> 最后思路主要是根据每隔的距离用for循环将草坪划分成表格样子
> 判断是否已生成植物就是记录已生成植物的相应位置 然后判断点击位置
> 如果是记录过的位置就return一个false

- Monster.js

Monster类 主要是怪兽的移动

- Peashooter.js（sunFlower类似）

Peashooter类是豌豆 主要是豌豆的攻击和与怪兽的碰撞

游戏的碰撞只做了豌豆吐的子弹

和怪兽的碰撞 

怪兽的Hp每减少一定值会发生图片切换

以上是最主要的类的简单介绍，仅供参考。

