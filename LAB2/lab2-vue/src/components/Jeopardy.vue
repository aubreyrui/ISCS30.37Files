<template>
    <div class="list-group" v-if="showPlace == false">
      <button class="list-group-item list-group-item-action" @click="updateSelected(cat.category)"  v-for="(cat, index) in cats" :key="index">{{ cat.category }}</button>
    </div>
    <div v-else>
      <div v-for="product in apiResponse">
        <ul v-if="product.category == cat.category">
        <li>
          {{ product.title }}
        </li>
        </ul>
      </div>
      <button class="btn btn-primary" @click="showPlaces=false"> Go back</button>
    </div>
</template>

<!-- 
<div class="list-group" 
    v-if="showPlaces == false">
        <a href="#" 
          class="list-group-item list-group-item-action"
          @click="updateSelected(place)"
          v-for="(place,index) in places"
          :key="index">
              {{place.number}}
        </a>
    </div>

    <div v-else> 
        <button class="btn btn-primary"
        @click="showPlaces = false">
            Go back
        </button>
            <p>You have choosen 
              <span class="highlight">{{this.selectedPlace.number}}</span>
            </p>
      </div>
      
      
     }-->

<script>

export default {
  data() {
    const showPlace =  false;
    const selectedPlace = {};
    const cats = ref([{category: 'beauty'}, {category: 'fragrances'}, {category: 'furniture'}, {category: 'groceries'}]);
    return{showPlace, selectedPlace, cats};
  },
  methods: {
      updateSelected(selectedItem) {
        this.selectedPlace = selectedItem;
        this.showPlaces = true;
        console.log('Button Clicked: ' + selectedItem);
    }
  }
};

import { ref } from 'vue'
import axios from 'axios'

  
const apiResponse = ref(null)
axios.get('https://dummyjson.com/products').then(res => {
      console.log(res)
      apiResponse.value = res.data.products
    }).catch(err => {
      console.error(err)
    })

</script>

<style>
button {
    align-items: center;
    background-color: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: .25rem;
    box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
    box-sizing: border-box;
    color: rgba(0, 0, 0, 0.85);
    cursor: pointer;
    display: inline-flex;
    font-family: system-ui,-apple-system,system-ui,"Helvetica Neue",Helvetica,Arial,sans-serif;
    font-size: 16px;
    font-weight: 600;
    justify-content: center;
    line-height: 1.25;
    margin: 0;
    min-height: 3rem;
    padding: calc(.875rem - 1px) calc(1.5rem - 1px);
    position: relative;
    text-decoration: none;
    transition: all 250ms;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: baseline;
    width: auto;
  }

  button:hover,
  button:focus {
    border-color: rgba(0, 0, 0, 0.15);
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
    color: rgba(0, 0, 0, 0.65);
  }

  button:hover {
    transform: translateY(-1px);
  }

  button:active {
    background-color: #F0F0F1;
    border-color: rgba(0, 0, 0, 0.15);
    box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
    color: rgba(0, 0, 0, 0.65);
    transform: translateY(0);
  }

</style>
