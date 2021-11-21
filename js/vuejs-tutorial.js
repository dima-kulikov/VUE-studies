Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: 'Овощи' },
      { id: 1, text: 'Сыр' },
      { id: 2, text: 'Что там ещё люди едят?' }
    ]
  }
})




// ------------------------------------------------
let app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Добрый день'
  }
})



// ------------------------------------------------
let app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'при клике текст станет большим'
  },
  methods: {
    upWords: function () {
      this.message = this.message.toUpperCase();
    },
    downWords: function () {
      this.message = this.message.toLowerCase();
    }
  },
})

// ---------------------------------------
let myVue = new Vue({
  el: '#app',
  data: {
    print: "Hello my work Vue",
    title: "прописан тайтл для текста"
  }
})
// ---------------------------------------
let app2 = new Vue({
  el: '#app-2',
  data: {
    todos: [
      {
        text: 'Изучить JavaScript',
        name: 'паша',
        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Orc_grunt_by_Lucas_Salcedo.jpg/220px-Orc_grunt_by_Lucas_Salcedo.jpg'
      },
      {
        text: 'Изучить Vue',
        name: 'миша',
        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Orc_grunt_by_Lucas_Salcedo.jpg/220px-Orc_grunt_by_Lucas_Salcedo.jpg'
      },
      {
        text: 'Создать что-нибудь классное',
        name: 'саша',
        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Orc_grunt_by_Lucas_Salcedo.jpg/220px-Orc_grunt_by_Lucas_Salcedo.jpg'
      }
    ]
  }
})