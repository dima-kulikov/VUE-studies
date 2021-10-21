new Vue({
    el: '#new-vue',
    data: {
      message: 'Hello Vue!',
      id:'10',
      status: 3,
      isActive: true,
      margin: 100,
      with: 400

    }
  })
  new Vue({
    el:'#second-vue',
    data: {
      message: 'компонент работает',
      list: ['один', 'два', 'три'],
      users: [
        {id: 1, name: 'Дима'},
        {id: 2, name: 'Леся'},
        {id: 3, name: 'Кот'}
      ]
    },
    methods:{
      firstFunction(){
        alert('Запуск функции через VUE')
      },
      secondFunction: function(){
        alert('secondFunction')
      }

    }
  })