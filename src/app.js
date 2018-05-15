import Vue from 'vue';

const app = new Vue({
  data: {
    hello: 'hello there, how are you?'
  },
  template: '<div id="app"><h1>{{hello}}</h1></div>'
});

export { app };
