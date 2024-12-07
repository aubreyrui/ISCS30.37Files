<template>
    <p>Hello World</p>
    {{ route.params.name }}
    <button @click="doesSomething()">Show content</button>
    </template>
    
<script setup>
    import {ref, onMounted} from 'vue'
    import { useRoute, useRouter } from 'vue-router'
    
    const route = useRoute()
    const router = useRouter()
    
    function doesSomething() {
        axios.get('https://jsonplaceholder.typicode.com/todos').then(res => {
          console.log(res.data)
          console.log(route)
          console.log(router)
        })
    }
    
    onMounted(() => { 
        if(route.name == 'posts') {
            console.log('posts')
        }
        else {
            console.log()
        }
    })
</script>
    
<style scoped>
</style>