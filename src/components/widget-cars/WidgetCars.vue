<script>
import CarEditor from './CarEditor.vue'
import CarSubmitter from './CarSubmitter.vue'

export default {
  components: { CarSubmitter, CarEditor },

  data() {
    return {
      cars: [
        {
          brand: 'BMW',
          price: 33000,
        },
      ],
    }
  },
}
</script>

<template>
  {{ cars }}
  <div>
    <CarSubmitter @car-created="cars.push($event)" />

    <ul>
      <CarEditor v-for="(car, idx) of cars" :key="idx" :car="car" />
    </ul>
  </div>
</template>
