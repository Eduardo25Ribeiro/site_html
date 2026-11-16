<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  className: {
    type: String,
    default: '',
  },
});
</script>

<template>
  <section class="cards" :class="className">
    <figure>
      <img :src="image" :alt="name" />
    </figure>
    <div class="card-description">
      <p>{{ description }}</p>
    </div>
  </section>
</template>
