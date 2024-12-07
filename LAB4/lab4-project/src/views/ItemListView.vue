<script>
import { RouterLink, RouterView } from 'vue-router'
import MountedAPI from "@/components/MountedAPI.vue"

export default {
  components: {
    MountedAPI,
    RouterLink,
    RouterView
  },
  data() {
    return {
      showItems: false,
      cats: [
        {category: 'beauty'}, 
        {category: 'fragrances'}, 
        {category: 'furniture'}, 
        {category: 'groceries'}
      ],
      selectedCat: null,
    }
  },
  methods: {
    updateSelected (selected) {
        this.selectedCat = selected;
        this.showItems = true;
        console.log(selected);
     }
  }
}

</script>

<template>
  <div>
    <nav>
      <RouterLink to="/posts">Check Posts</RouterLink>
    </nav>
  </div>
  <br>
  <div>
    <RouterView />
  </div>
  <br>
  <br>
  <div class="list-group">
    <h1>
    </h1> 
    <button class="list-group-item list-group-item-action" @click="updateSelected(cat.category)"  v-for="cat in cats">{{ cat.category }}</button>
    </div>
    <br>
    <div>
      <MountedAPI v-if="showItems && selectedCat == 'beauty'" selected-category=beauty> </MountedAPI>
      <MountedAPI v-if="showItems && selectedCat == 'fragrances'" selected-category=fragrances> </MountedAPI>
      <MountedAPI v-if="showItems && selectedCat == 'furniture'" selected-category=furniture> </MountedAPI>
      <MountedAPI v-if="showItems && selectedCat == 'groceries'" selected-category=groceries> </MountedAPI>
    </div>
</template>

<style scoped>
</style>