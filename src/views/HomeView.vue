<template>
  <section class="app-home">
    <home-hero :type="'main'"/>
    <home-categories/>
    <home-hero :type="'secondary'" />
    <home-reviews />
    
  </section>
</template>

<script>
import homeHero from '../components/home-hero.vue'
import homeCategories from '../components/home-categories.vue'
import homeReviews from '../components/reviews.vue'

export default {
  name: 'app-home',
  components:{
    homeHero,
    homeCategories,
    homeReviews,

  },
  computed: {
    getMsg() {
      return this.$store.getters.getMsg
    },
  },
}
</script>
