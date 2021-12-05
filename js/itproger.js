Vue.component('my-car', {
    data: function () {
        return {
            cars: [
                { model: "BMW" },
                { model: "volovo" },
                { model: "mers" },
                { model: "ford" },
                { model: "audi" },
                { model: "fiat" }
            ]
        }
    },
    template: `<div><div class="car" v-for="car in cars"> <p>{{car.model}}</p></div></div>`
});

new Vue({
    el: "#component",
    data: {

    }
})


Vue.filter("plus", function (value) {
    return value + 55;
})

new Vue({
    el: "#add-3",
    data: {
        show: true,
        mess: 'второстепенный текст',
        cars: [
            { car: "bmv", speed: 300 },
            { car: "mers", speed: 290 },
            { car: "ford", speed: 260 },
            { car: "reno", speed: 197 }
        ]
    },
    computed: {
        showMess() {
            return this.mess.toUpperCase();
        }
    },
    filter: {
        upFunction(value) {
            value.toUpperCase();
        }
    }
});


new Vue({
    el: '#add-2',
    data: {
        value: 1,
        doblValue: 2
    },
    methods: {
        increment(el) {
            this.value = el
            this.doblValue = el * 2

        }
    }
});


new Vue({
    el: '#add-1',
    data: {
        message: 'Этот текст поменяем',
        styleCSS: ''
    },
    methods: {
        rename() {
            this.message = 'Ура, текст поменялся'

        }
    }
});


