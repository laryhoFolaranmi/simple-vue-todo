<template>
    <div>
        <nav>
            <h1>{{title}}</h1>
        </nav>
    </div>
</template>
<script>
export default {
    name: "Navbar",
    props: ['title'],
    data(){
        return {

        }
    }
}
</script>
<style>
    nav{
        padding: .5%;
        margin: 0 ;
        margin-bottom: 1%;
        width: 100vw;
        background-color: black;
        opacity: .9;
        color: white;
    }
</style>