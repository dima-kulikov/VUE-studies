
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

    //https://dka-develop.ru/api?type=hashtag