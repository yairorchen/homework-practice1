<template>
  <section class="categories-container">
    <div v-for="category in categories">
      <span v-icon="category.svg"></span>
      <h1>{{category.name}}</h1>
      <p class="sub-txt">{{category.subTxt}}</p>
    </div>

  </section>
</template>

<script>
import categoriesService from "../services/categories-service.js"
export default {
  name: 'home-categories',
  data() {
    return {
      categories: categoriesService.categories,
    }},
}
</script>

<style></style>
