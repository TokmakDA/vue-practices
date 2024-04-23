<template>
  <div class="modal-backdrop" @click="closeModal"></div>
  <div class="modal">
    <h3>Заголовок модалки</h3>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
      voluptate eius inventore vel laboriosam nisi laborum est rem eaque
      quibusdam.
    </p>
    <button class="btn" @click="closeModal">X</button>
  </div>
</template>

<script>
export default {
  emits: ['close'],
  methods: {
    closeModal() {
      this.$emit('close')
    }
  }
}
</script>

<style></style>
