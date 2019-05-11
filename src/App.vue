<template>
  <div id="app">
    <navbar :title="title" />  
    <add-todo @add-todo="addTodo" />
    <ul>
      <todo-item :key="item._id" v-for="item in items" :item="item" @delete-todo="deleteTodo"/>
      <p class="error">{{error}}</p>
    </ul>
  </div>
</template>


<script>
import Axios from 'axios';
import AddTodo from './components/AddTodo.vue';
import Navbar from './components/Navbar.vue';
import TodoItem from './components/TodoItem.vue';
import TodosService from './services/Todos';
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
        items: [],
        error: "",
        endpoint: "http://localhost:3000/todos/"
      };
    },
    methods: {

      getTodos(){
        let result = TodosService.getTodos()
        result.then( res => {
          if(res.status === "success"){
              this.items = res.data;
          }else{
              this.error = "unknown error occured";
              console.log(res.data);
          }
        })

      },

      addTodo(text){
        const todo = {
          userId: 1,
          title: text,
          completed: false
        }
 
        Axios.post(this.endpoint, todo)
        .then( 
          (response) => {
            this.items.push(response.data);
          }
        )
        .catch(
          (/* */)  => {
            this.error = "error occured while adding todo";
            // console.log(error);
          }
        );
      },

      deleteTodo(id){
        Axios.delete(this.endpoint+id)
        .then( 
          (response) => {
            this.items = this.items.filter( item => item._id != id);
          }
        )
        .catch(
          (/* */)  => {
            this.error = "error occured while deleting todo";
            // console.log(error);
          }
        );
      }
    },
    created(){
      this.getTodos();
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
.error {
  color: red;
}

</style>
