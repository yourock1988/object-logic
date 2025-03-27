<script>
import CarEditor from './components/widget-cars/CarEditor.vue'
import WidgetCars from './components/widget-cars/WidgetCars.vue'

export default {
  components: { WidgetCars, CarEditor },

  data() {
    return {
      car: { brand: 'qqqq', price: 11111, isTurbo: true },
    }
  },
}
</script>

<template>
  <div>
    <div class="wrap">
      <div>
        <!-- <h1>Hello Vue {{ car }}</h1> -->
      </div>
      <div>
        <WidgetCars />
      </div>
    </div>

    <!-- <CarEditor :car="car" /> -->
  </div>
</template>

<style></style>
