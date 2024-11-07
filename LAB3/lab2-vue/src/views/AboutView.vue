<template>
  <div class="about">
    <h1>This is an about page</h1>
    <ClickerDos :label="name"/>
    <ul>
    <li v-for="item in items">
      {{ item.message }}
    </li>
    </ul>

    <input type="text" name="name" id="name" v-model="name">
    <p>Name: {{ name }}</p>
  </div>
</template>

<style>

</style>

<script setup>
import { ref } from 'vue'

import ClickerDos from '@/components/ClickerDos.vue'

const name = ref('')
const items = ref([{ message: 'Foo' }, { message: 'Bar' }, {message: 'bro'}])
</script>
