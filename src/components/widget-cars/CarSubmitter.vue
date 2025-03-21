<script>
const makeId = () => ((Math.random() * 0xffffffff) >>> 0).toString(16)

const initCar = () => ({
  id: makeId(),
  brand: '',
  price: 0,
  isTurbo: true,
})

export default {
  emits: ['car-submit'],

  data() {
    return {
      car: initCar(),
    }
  },

  methods: {
    submitCar() {
      if (this.car.brand && this.car.price) {
        this.$emit('car-submit', this.car)
        this.car = initCar()
      }
    },
  },
}
</script>

<template>
  <div class="wrap">
    <h2>Добавление новой машинки</h2>
    <input v-model="car.brand" />
    <input v-model.number="car.price" />
    <button @click="submitCar">Submit</button>
  </div>
</template>
