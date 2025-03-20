<script>
export default {
  emits: ['car-created'],

  data() {
    return {
      car: {
        brand: 'Mercedes',
        price: 33000,
      },
    }
  },
}
</script>

<template>
  <div class="wrap">
    <h2>Добавление новой машинки</h2>
    <input v-model="car.brand" />
    <input v-model="car.price" />
    <button @click="$emit('car-created', Object.assign({}, car))">
      Submit
    </button>
  </div>
</template>
