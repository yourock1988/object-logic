<script>
export default {
  emits: ['car-created'],

  data() {
    return {
      //
    }
  },
}
</script>

<template>
  <button
    @click="
      $emit('car-created', {
        brand: 'Audi',
        price: 42000,
      })
    "
  >
    Submit
  </button>
</template>
