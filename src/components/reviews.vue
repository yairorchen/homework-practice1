<template>
  <section class="reviews-container">
    <div class="review" v-for="review in reviews">
      <p>{{review.subTxt}}</p>
      <div class="profile-container">
        <div class="profile-img">
          <img :src="`${review.path}`" />
        </div>
        <div>
      <p>{{review.name}}</p>
      <p>{{review.position}}</p>
      </div>
      </div>
    </div>


  </section>
</template>

<script>
import categoriesService from "../services/categories-service.js"
export default {
  name: 'home-reviews',
  data(){
    return{
      reviews: categoriesService.reviews,
    }
  },
}
</script>

<style></style>
