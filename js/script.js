
new Vue({
  el: '#practic',
  data:{
    counter:1
  },
  created: function(){
  // this.counter = 5;
  this.hight();
  },
  methods:{
    hight(){
      this.counter++;
      // alert("ВСЕ РАБОТАЕТ!!")
    }
  }
  })




// ----------------------------------------------
new Vue({
    el: '#new-vue',
    data: {
      message: 'Hello Vue!',
      id:'10',
      status: 3,
      isActive: true,
      margin: 100,
      with: 400

    },
    // created: function(){
     
    //     alert(`Выбран ${this.status} статус`)
      
    // },
    methods:{ 
    first: function(){
     this.status = 1
        // alert(`Выбран ${this.status} статус`)
      
    },
     functiondd(){
      this.status = 2
         // alert(`Выбран ${this.status} статус`)
       
     }
    },
  })
  // --------------------------------------------------------------
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
    // created: function(){
    //  this.status =

    //   },
    methods:{
      firstFunction(){
        alert('Запуск функции через VUE')
      },
      secondFunction: function(){
        alert('secondFunction')
      }

    }
  })
  // --------------------------------------------------------------

  var example1 = new Vue({
    el: '#example-1',
    data: {
      counter: 0
    }
  })



  var example2 = new Vue({
    el: '#example-2',
    data: {
      name: 'Vue.js'
    },
    // определяйте методы в объекте `methods`
    methods: {
      greet: function (event) {
        // `this` внутри методов указывает на экземпляр Vue
        alert('Привет, ' + this.name + '!')
        // `event` — нативное событие DOM
        if (event) {
          alert(event.target.tagName)
        }
      }
    }
  })