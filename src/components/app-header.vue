<template>
  <header class="app-header full main-container">
    <div class="header-container flex space-between align-center">
      <div class="logo-container">
      <span  v-icon="'logo'"></span>
      </div>
      <div class="action-container">

      </div>
      <app-nav :isOpen="isOpen" @toggle-open="isOpen = !isOpen"></app-nav>
    </div>
  </header>
</template>

<script>
import appNav from './app-nav.vue'
export default {
  name: 'app-header',
  data() {
    return {
      isOpen: false,
    }
  },
  components: {
    appNav,
  },
}
</script>

<style></style>
