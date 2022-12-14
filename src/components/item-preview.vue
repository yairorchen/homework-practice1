<template>
  <section class="item-preview">
    <RouterLink :to="`/item/${item._id}`">
      {{ item.content }}
    </RouterLink>
  </section>
</template>

<script>
export default {
  name: 'item-preview',
  props: {
    item: Object,
  },
}
</script>

<style></style>
