<script>
import CarSubmitter from './CarSubmitter.vue'
import CarsList from './CarsList.vue'

export default {
  components: { CarSubmitter, CarsList },

  data() {
    return {
      cars: [],
    }
  },
}
</script>

<template>
  <div class="wrap">
    <CarSubmitter @car-submit="cars.push($event)" />

    <CarsList v-model="cars" />

    <!-- <CarsList :model-value="cars" @update:model-value="cars = $event" /> -->
  </div>
</template>
