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
        case 2:
            return {
                "backgroundImage": "images/interface/background1unsodded_1.jpg",
                "startSunNum": 25,
                //测试代码
                //"startSunNum":1000,
                "productSunTime": 10000,
                "card": [
                    {
                        "name": "Peashooter",
                        "src": "images/card/PeashooterG.png",
                        "needSunNum": 100,
                        "lSrc": "images/card/Peashooter.png"

                    },
                    {
                        "name": "SunFlower",
                        "src": "images/card/SunFlowerG.png",
                        "needSunNum": 50,
                        "lSrc": "images/card/SunFlower.png"

                    }
                ],
                "grass": {
                    "src": "images/interface/sod3row.png",
                    "left": 123,
                    "top": 163,
                    "height": 330,
                    "width": 766,
                    "act": true
                },
                scrollGrass: [
                    {
                        "top": 128
                    },
                    {
                        "top": 348
                    }

                ],
                "grassLength": 3,
                "plantPosition": [181, 291, 381],
                "monsterPosition": [112, 225, 315],
                "showMonster": [Zombie, Zombie, Zombie, Zombie, Zombie, Zombie, Zombie, Zombie],
                "HP": [6, 6, 6, 6, 6, 6, 6, 6],
                audio:"LookUpAtTheSky"

            };
            break;
        case 3:
            return {
                "backgroundImage": "images/interface/background1unsodded2.jpg",
                "startSunNum": 25,
                "productSunTime": 10000,
                "card": [
                    {
                        "name": "Peashooter",
                        "src": "images/card/PeashooterG.png",
                        "needSunNum": 100,
                        "lSrc": "images/card/Peashooter.png"

                    },
                    {
                        "name": "SunFlower",
                        "src": "images/card/SunFlowerG.png",
                        "needSunNum": 50,
                        "lSrc": "images/card/SunFlower.png"

                    },
                    {
                        "name": "CherryBomb",
                        "src": "images/card/CherryBombG.png",
                        "needSunNum": 100,
                        "lSrc": "images/card/CherryBomb.png"

                    }
                ],
                "grass": {
                    "top": 163,
                    "height": 330,
                    "act": false

                },
                "grassLength": 3,
                "plantPosition": [181, 291, 381],
                "monsterPosition": [112, 225, 315],
                "showMonster": [Zombie, Zombie, Zombie, Zombie, Zombie, Zombie, BucketheadZombie, BucketheadZombie, BucketheadZombie],
                "HP": [6, 6, 6, 6, 6, 6, 8, 8, 8],
                audio:"UltimateBattle"


            };
    }
}