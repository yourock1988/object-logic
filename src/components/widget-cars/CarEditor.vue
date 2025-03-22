<script>
export default {
  props: ['car'],

  emits: ['car-edit'],

  data() {
    return {
      localCar: Object.assign({}, this.car),
    }
  },

  watch: {
    car(newValue) {
      this.localCar = Object.assign({}, newValue)
    },
  },
}
</script>

<template>
  <li>
    <b>{{ car.brand }}</b>
    <input v-model="localCar.brand" />
    <input v-model="localCar.price" />
    <input v-model="localCar.isTurbo" />

    <button @click="$emit('car-edit', Object.assign({}, this.localCar))">
      EDIT
    </button>
  </li>
</template>
