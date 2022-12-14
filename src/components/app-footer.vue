<template>
  <footer class="app-footer full main-container">
    <div class="logo-container">
      <span v-icon="'logo'"></span>
    </div>
    <div>
      <span v-icon="'location'"></span>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
      aliqua</p>
    </div>

      <div>
        <span v-icon="'phone'"></span>
        <p>+1-543-123-4567</p>
      </div>
      <div>
        <span v-icon="'email'"></span>
        <p>example@fylo.com</p>
      </div>
      <div>
        <p>About Us</p>
        <p>Jobs</p>
        <p>Press</p>
        <p>Blog</p>
      </div>
      <div>
        <p>Contact Us</p>
        <p>Terms</p>
        <p>Privacy</p>
      </div>
      <div>
        <span v-icon="'facebook'"></span>
        <span v-icon="'twitter'"></span>
        <span v-icon="'instagram'"></span>
      </div>

  </footer>
</template>

<script>
import socialMedia from './social-media.vue'
export default {
  name: 'app-footer',
  components: {
    socialMedia,
  },
}
</script>

<style></style>
