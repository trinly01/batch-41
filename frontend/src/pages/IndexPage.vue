<template>
  <q-page class="flex flex-center">
    {{ waist }}
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    >
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'IndexPage',
  data: () => ({
    waist: 0,
    chest: 10
  }),
  setup () {
    // your code here
    // const waist = ref(10)
    // const chest = ref(10)

    // function eat () {}

    // return {
    //   waist,
    //   chest,
    //   eat
    // }
  },
  computed: {
    itemsLeft () {
      return this.todos.filter(sasd => sasd).length
    }
  },
  methods: {
    eat () {
      // your code here
      this.waist += 2
    }
  }
})
</script>
