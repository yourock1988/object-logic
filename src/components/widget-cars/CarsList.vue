<script>
import CarEditor from './CarEditor.vue'

export default {
  components: { CarEditor },

  props: ['modelValue'],

  emits: ['update:model-value'],

  methods: {
    carsWithSwapped(newCar, oldCar) {
      return this.modelValue.map(n => (n === oldCar ? newCar : n))
    },
  },
}
</script>

<template>
  <ul>
    <CarEditor
      v-for="(car, idx) of modelValue"
      :key="idx"
      :car="car"
      @car-edit="$emit('update:model-value', carsWithSwapped($event, car))"
    />
  </ul>
</template>
