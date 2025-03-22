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
      localCar: initCar(),
    }
  },

  methods: {
    submitCar() {
      if (this.localCar.brand && this.localCar.price) {
        this.$emit('car-submit', this.localCar)
        this.localCar = initCar()
      }
    },
  },
}
</script>

<template>
  <div class="wrap">
    <h2>Добавление новой машинки</h2>
    <input v-model="localCar.brand" />
    <input v-model.number="localCar.price" />
    <button @click="submitCar">Submit</button>
  </div>
</template>
