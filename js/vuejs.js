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