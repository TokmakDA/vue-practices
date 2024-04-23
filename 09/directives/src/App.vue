<template>
  <div class="container">
    <div class="card">
      <h2 v-color:[type].blink.hover="myColor">Директивы</h2>
      <div class="form-control">
        <label for="inp">Активный по умолчанию</label>
        <input type="text" id="inp" v-focus />
      </div>

      <button class="btn" @click="myColor = 'darkblue'">
        Перекрасить заголовок
      </button>

      <button
        class="btn primary"
        @click="type = type === 'color' ? 'background' : 'color'"
      >
        Переключить тип директивы
      </button>
    </div>
  </div>
</template>

<script>
import colorDirectiv from './utils/colorDirectiv'
import { focus } from './utils/focusDirectiv'

export default {
  data() {
    return {
      myColor: 'darkred',
      type: 'color'
    }
  },
  directives: {
    focus,
    color: colorDirectiv
  }
}
</script>
