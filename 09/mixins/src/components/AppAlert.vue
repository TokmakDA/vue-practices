<template>
  <div class="alert" :class="type">
    <h3 class="alert-title">{{ title }}</h3>
    <p>{{ text }}</p>
    <button class="btn" :class="type" v-if="closable" @click="$emit('close')">
      Закрыть
    </button>
  </div>
</template>

<script>
export default {
  emits: ['close'],
  props: {
    text: String,
    title: String,
    type: {
      type: String,
      default: 'primary',
      required: false,
      validator(value) {
        return ['primary', 'danger', 'warning'].includes(value)
      }
    },
    closable: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  data() {
    return {}
  }
}
</script>

<style scoped></style>
