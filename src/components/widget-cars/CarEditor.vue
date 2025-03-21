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
    localCar: {
      deep: true,
      handler(newValue) {
        console.log('compare CAR:', this.localCar === this.car)
      },
    },
  },
}
</script>

<template>
  <li>
    <input v-model="localCar.brand" />
    <input v-model="localCar.price" />
    <input v-model="localCar.isTurbo" />

    <button @click="$emit('car-edit', Object.assign({}, this.localCar))">
      EDIT
    </button>

    <!-- <input
      :value="car.brand"
      @input="
        $emit(
          'car-edit',
          Object.assign({}, car, { brand: $event.target.value })
        )
      "
    />
    <input
      :value="car.price"
      @input="$emit('car-edit', Object.assign({}, car))"
    />
    <input
      :value="car.isTurbo"
      @input="$emit('car-edit', Object.assign({}, car))"
    /> -->
  </li>
</template>
