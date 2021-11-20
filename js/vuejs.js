let myVue = new Vue({
  el: '#app',
  data: {
    print: "Hello my work Vue",
    title: "прописан тайтл для текста"
  }
})

let app2 = new Vue({
  el: '#app-2',
  data: {
    todos: [
      {
        text: 'Изучить JavaScript',
        name: 'паша'
      },
      {
        text: 'Изучить Vue',
        name: 'миша'
      },
      {
        text: 'Создать что-нибудь классное',
        name: 'саша'
      }
    ]
  }
})