<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Clicker />
    <Clicker :label="name"/>

    <ul>
    <li v-for="item in items">
      {{ item.message }}
    </li>
    </ul>

    <input type="text" name="name" id="name" v-model="name">
    <p>Name: {{ name }}</p>
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  import Clicker from '@/components/Clicker.vue'

  const name = ref('')
  const items = ref([{ message: 'Foo' }, { message: 'Bar' }])
</script>

<style>
</style>
