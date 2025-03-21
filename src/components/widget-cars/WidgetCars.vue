<script>
import CarEditor from './CarEditor.vue'
import CarSubmitter from './CarSubmitter.vue'

export default {
  components: { CarSubmitter, CarEditor },

  data() {
    return {
      cars: [],
    }
  },

  methods: {
    carsWithSwapped(newCar, oldCar) {
      console.log(newCar)
      return this.cars.map(n => (n === oldCar ? newCar : n))
    },
  },
}
</script>

<template>
  <div class="wrap">
    <CarSubmitter @car-submit="cars.push($event)" />

    <ul>
      <CarEditor
        v-for="(car, idx) of cars"
        :key="idx"
        :car="car"
        @car-edit="cars = carsWithSwapped($event, car)"
      />
    </ul>
  </div>

  {{ cars }}
</template>
