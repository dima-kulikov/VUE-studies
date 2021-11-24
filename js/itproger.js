


new Vue({
    el: '#add-2',
    data: {
        value: 1,
        doblValue: '2'
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


