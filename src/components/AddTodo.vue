<template>
    <div class="mock-form">
        <input type="text" v-model="text" name="todo" id="" />
        <button type="submit" @click="addTodo">Add Todo</button>
    </div> 
</template>
<script>
export default {
    name: "AddTodo",
    data(){
        return {
            text: ""
        }
    },
    methods: {
        addTodo(){
            this.$emit('add-todo', this.text);
            this.text = "";
        }
    }
}
</script>
<style >
    .mock-form{
        display: inline;        
    }
    .mock-form input {
        width: 50vw;
        height: 2.5vh;
        border: solid 1px gray;
        border-radius: 2px;
        margin-right: 1%;
    }
    .mock-form button{
        background-color: cornflowerblue;
        padding: .4% .6%;
        color: white ;
        border: solid .5px gray;
        border-radius: 5px;
        cursor: pointer;
    }
</style>