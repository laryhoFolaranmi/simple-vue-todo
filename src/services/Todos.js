/* eslint-disable no-console */
import Axios from 'axios';

export default{

    async getTodos(){
        let result = {};
        await Axios.get('https://jsonplaceholder.typicode.com/todos/?&_limit=10')
        .then( response => {
            result = {
                status: "success",
                data: response.data
            }
        })
        .catch( error => {
              result =  {
                  status: "error",
                  data: error.data
              }
        });
        return result;
    },
    
    addTodo: function(todo){
        const obj = {
            statusCo: 200,
            data: todo 
        }
        return obj;
    },

    editTodo: function(todo){
        const obj = {
            status: 200,
            data: todo 
        }
        return obj;
    },

    deleteTodo: function(id){
        const obj = {
            status: 200,
            data: id 
        }
        return obj;
    }
}