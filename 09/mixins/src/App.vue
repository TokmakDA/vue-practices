<template>
  <div class="container">
    <app-alert
      v-if="alert"
      text="Это какоето важное сообщение"
      title="Внимание!"
      type="warning"
      closable
      @close="toggleAlert"
    ></app-alert>

    <div class="card" v-else>
      <button class="btn primary" @click="toggleAlert">
        Показать сообщение
      </button>
    </div>

    <app-block></app-block>
  </div>
</template>

<script>
import { alertMixin } from './components/alertMixin'
import AppAlert from './components/AppAlert.vue'
import AppBlock from './components/AppBlock.vue'

export default {
  // data() {
  //   return {
  //     alert: false
  //   }
  // },

  // methods: {
  //   toggleAlert() {
  //     return (this.alert = !this.alert)
  //   }
  // },
  mixins: [alertMixin],

  components: { AppAlert, AppBlock }
}
</script>
