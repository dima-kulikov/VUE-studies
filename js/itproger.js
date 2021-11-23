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
})