<template>
  <section class="hero-container">
    <section class="main-hero" v-if="(type === 'main')">
      <div class="intro-img-container">
      <img src="../../src/assets/images/5e21ea207160147e2d0a144ae10e5291852a2480.png"/>
      
      </div>
      <div>
      <h1> All your files in one secure location, accessible anywhere.</h1>
      </div>
      <div>
      <p>Fylo stores all your most important files in one secure location. Access them wherever you need , share and collaborate with friends family , and co-workers.</p>
      </div>
      <button>Get Started</button>
    </section>
    <section class="secondary-hero" v-if="(type === 'secondary')">
      <div class="second-img-container">
      <img src="../../src/assets/images/2c8c8606cb71da6be138b716e1fde525c3090fec.png" />
      </div>
      <div class="secondary-hero-content">
      <h1> Stay productive, wherever you are</h1>
      <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
      <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments
      required.</p>
      </div>
    </section>
  </section>
</template>

<script>

export default {
  name: 'home-hero',
  props: {
    type: {
      type: String,
      required: true,

    },
  },
}
</script>

<style></style>
