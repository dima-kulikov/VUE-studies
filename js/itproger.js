new Vue({
    el: "#add-3",
    data: {
        show: true,
        cars : [
            {car:"bmv", speed: 300},
            {car:"mers", speed: 290},
            {car:"ford", speed: 260},
            {car:"reno", speed: 197}
        ]
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


