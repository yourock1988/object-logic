<script>
export default {
  props: ['car'],

  emits: ['car-edit'],

  data() {
    return {
      //
    }
  },
}
</script>

<template>
  <li @click="$emit('car-edit', Object.assign({}, car, { price: 777 }))">
    {{ car }}
  </li>
</template>
