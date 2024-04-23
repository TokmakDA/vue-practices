<template>
  <div class="container">
    <app-alert
      v-if="alert"
      text="Это какоето важное сообщение danger"
      title="Внимание!"
      type="danger"
      closable
      @close="toggleAlert"
    ></app-alert>

    <div class="card" v-else>
      <button class="btn primary" @click="toggleAlert">
        Показать сообщение
      </button>
    </div>
  </div>
</template>

<script>
import { alertMixin } from './alertMixin'
import AppAlert from './AppAlert.vue'

export default {
  // data & methods in mixin
  mixins: [alertMixin],
  components: { AppAlert }
}
</script>
