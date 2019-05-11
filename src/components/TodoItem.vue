<template>
    <li>{{item.title}} <span class="x" @click="deleteTodo">x</span></li>
</template>

<script>
export default {
    name: "TodoItem",
    props: ['item'],
    methods:{
        deleteTodo(){
            this.$emit('delete-todo', this.item._id);
        }
    }
}
</script>
<style >
    li{
        list-style-type: none;
        background-color: cornsilk;
        border: solid 0.5px black;
        border-style: solid none; 
        width: 99.5vw;
        padding: .7% .3%;
        margin: .2% 0%;
    }
    .x{
        background-color: red;
        color: white;
        padding: .15% .35%;
        float: right;
        border-radius: 50%;
        cursor: pointer;
    }
</style>