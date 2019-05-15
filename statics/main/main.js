var app = new Vue({
   el: '#app',
    data: {
        name: 'hy',
        sex: '',
        age: '',
        foodlist:['葱', '姜', '蒜'],
        foods:[
            {
                name:"葱",
                price:10.00,
                discount:0.4
            },
            {
                name:"姜",
                price:10.00
            },
            {
                name:"蒜",
                price:10.00
            }
        ]
    }
});

var app1 = new Vue({
    el: "#app1",
    data: {
        url: "https://www.baidu.com",
        kls: "btn butt",
        isActive: true,
    }
});

var app2 = new Vue({
    el: "#app2",
    data: {

    },
    methods: {
        onClick: function () {
            console.log("你已经点击了");
        },

        onEnter: function () {
            console.log("进来了");
        },

        onOuter: function () {
            console.log("出去了");
        },

        onSubmit: function () {
            ///禁止掉get post事件
            // e.preventDefault();
            console.log("提交");
        },

        onkeyup: function () {
            console.log("你在敲击键盘，对吧");
        },

        onkeyEnter: function () {
            console.log("你敲击了回车键");
        }
    },
});

var app3 = new Vue({
    el: "#app3",
    data: {
        name: "yuan tuo",
        sex: "male",
        sexTo: ["male"],
        article: "nijiujishijuededuibuqizhendebuwobuzhijfijfidfdsafasdfsdafsdafsadfsadfdsafsadfsdaf",
        from:2,
        dest:["1", "2", "3"],
    }
});

var app4 = new Vue({
    el: "#app4",
    data: {
        role: "super_admin",
    }
});

var app5 = new Vue({
    el: "#app5",
    data: {
        math: 90,
        phy: 80,
        eng: 95,
    },
    //该方法会缓存下来，提高速度，如果使用methods则会每次都进行计算
    computed: {
        sum: function () {
         return this.math + this.phy + this.eng;
        }
     }
});