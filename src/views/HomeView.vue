<template>
  <section class="app-home">
    <home-hero :type="'main'"/>
    <home-categories/>
    <home-hero :type="'secondary'" />
    <home-reviews />
    <contact-modal />
  </section>
</template>

<script>
import homeHero from '../components/home-hero.vue'
import homeCategories from '../components/home-categories.vue'
import homeReviews from '../components/reviews.vue'
import contactModal from '../components/home-contact-modal.vue'
export default {
  name: 'app-home',
  components:{
    homeHero,
    homeCategories,
    homeReviews,
    contactModal,
  },
  computed: {
    getMsg() {
      return this.$store.getters.getMsg
    },
  },
}
</script>
