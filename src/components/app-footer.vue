<template>
  <footer class="full  main-container">
    <contact-modal/>
    <section class="app-footer">
    <div class="logo-container">
      <span v-icon="'logo'"></span>
    </div>
    <section class="footer-content">
    <div class="loction">
      <span class="icon" v-icon="'location'"></span>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
      aliqua</p>
    </div>
    <section class="contact">
      <div>
        <span class="icon" v-icon="'phone'"></span>
        <p>+1-543-123-4567</p>
      </div>
      <div>
        <span class="icon" v-icon="'email'"></span>
        <p>example@fylo.com</p>
      </div>
      </section>
      <div class="col3">
        <p>About Us</p>
        <p>Jobs</p>
        <p>Press</p>
        <p>Blog</p>
      </div>
      <div class="col4">
        <p>Contact Us</p>
        <p>Terms</p>
        <p>Privacy</p>
      </div>
      <div class="social flex">
        <div class="social-container"><img src="../../src/assets/images/68003580da42b9747772def6a896d7f143458a2a.png"/></div>
        <div class="social-container"><img src="../../src/assets/images/5852f75cbc8c1f40fb7766278e731a267c3b4eb3.png"/></div>
        <div class="social-container"><img src="../../src/assets/images/5e5ca48a06845544e9adb47f0ab6b5c0c86ff758.png"/></div>
       
      </div>
</section>
</section>
  </footer>
</template>

<script>
import contactModal from './home-contact-modal.vue'
export default {
  name: 'app-footer',
  components: {
    contactModal
  },
}
</script>

<style></style>
