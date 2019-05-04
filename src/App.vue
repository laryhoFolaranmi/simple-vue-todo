<template>
  <div id="app">
    <navbar :title="title" />  
    <add-todo @add-todo="createTodo" />
    <ul>
      <todo-item :key="item.id" v-for="item in items" :item="item" @delete-todo="removeTodo"/>
    </ul>
  </div>
</template>


<script>
import AddTodo from './components/AddTodo.vue';
import Navbar from './components/Navbar.vue';
import TodoItem from './components/TodoItem.vue';

export default {
  name: 'app',
  components: {
    Navbar,
    TodoItem,
    AddTodo
  },
  data(){
    return {
      title: "Todo Application",
      count: 3,
      items: [
        {id:0, text: "item 1"},
        {id:1, text: "item 2"},
        {id:2, text: "item 3"},
      ]
    };
  },
  methods: {
      createTodo(text){
        const todo = {
          id: this.count++,
          text
        }
        this.items.push(todo);
      },
      removeTodo(id){
        this.items = this.items.filter( item => item.id != id);
      }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  margin: 0;
  padding: 0;
}
ul {
  padding: 0;

}

</style>
