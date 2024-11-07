<template>
    <button @click="increment">Click Me</button>
    <p>{{ props.label }}: {{ clicks }}</p>
    <button @click="requestData">Request Data</button>
    <pre v-if="apiResponse">{{ apiResponse }}</pre>
    <p v-else></p>

    <input type="text" v-model="search">
    <input type="color" v-model="color">
    <button @click="searchHandler">Search</button>
    <img :src="src" alt="">
</template>

<script setup>
import { ref } from 'vue'
  import axios from 'axios'
  
  const props = defineProps({
    label: String
  })

  const clicks = ref(0)
  const apiResponse = ref(null)
  const src = ref('')
  const color = ref('')
  const search = ref('')

  function increment(evt) {
    console.log(evt)
    clicks.value++
  }

  function requestData(evt) {
    axios.get('https://dummyjson.com/users/1').then(res => {
      console.log(res)
      apiResponse.value = res.data
    }).catch(err => {
      console.error(err)
    })
  }

  function searchHandler(evt) {
    let searchParameter = encodeURIComponent(search.value)
    console.log(color.value)
    src.value =`https://dummyjson.com/image/400x200/${color.value.split("#")[1]}/ffffff?text=${searchParameter}` 
  }
</script>

<style scoped>
</style>