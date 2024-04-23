<template>
  <div class="container">
    <div class="card">
      <h2>{{ $i18n('app.title') }}</h2>

      <button class="btn" @click="changeLang">
        {{ $i18n('app.btnChange') }}
      </button>

      <h2>Как работают плагины в Vue?</h2>
      <button class="btn" @click="$alert('Я нажал на кнопку')">ALert</button>
    </div>
    <div class="card">
      <button class="btn primary" @click="modal = true">Открыть модалку</button>

      <Teleport to="#modal">
        <!-- есть атрибут disabled - оставляет в текущей разметке-->
        <app-modal v-if="modal" @close="modal = false"></app-modal>
      </Teleport>
    </div>
  </div>
</template>

<script>
import AppModal from './components/AppModal.vue'

export default {
  data() {
    return {
      lang: 'ru',
      modal: false
    }
  },

  inject: ['changeI18N'],

  methods: {
    changeLang() {
      switch (this.lang) {
        case 'ru':
          this.lang = 'en'
          break
        case 'en':
          this.lang = 'ru'
          break
      }
      this.changeI18N(this.lang)
      this.$forceUpdate()
    }
  },
  components: {
    AppModal
  }
}
</script>
