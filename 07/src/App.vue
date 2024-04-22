<template>
  <div class="container">
    <form class="card" @submit.prevent="submitHandleForm">
      <h1>Анкета на Vue разработчика!</h1>
      <!-- <div class="form-control" :class="{ invalid: errors.name }">
        <label for="name">Как тебя зовут?</label>
        <input
          type="text"
          id="name"
          placeholder="Введи имя"
          v-model.trim="name"
        />
        <small v-if="errors.name">{{ errors.name }}</small>
      </div> -->
      <app-input
        placeholder="Введи имя"
        :error="errors.name"
        label="Как тебя зовут?"
        v-model="name"
      ></app-input>

      <div class="form-control">
        <label for="age">Выбери возраст</label>
        <input type="number" id="age" max="75" v-model.number="age" />
      </div>

      <div class="form-control">
        <label for="city">Твой город</label>
        <select id="city" v-model="city">
          <option value="spb">Санкт-Петербург</option>
          <option value="msk">Москва</option>
          <option value="kzn">Казань</option>
          <option value="nsk">Новосибирск</option>
        </select>
      </div>

      <div class="form-checkbox">
        <span class="label">Готов к переезду в Токио?</span>
        <div class="checkbox">
          <label>
            <input type="radio" name="trip" v-model="relocate" value="yes" />
            Да
          </label>
        </div>

        <div class="checkbox">
          <label>
            <input type="radio" name="trip" v-model="relocate" value="no" />
            Нет
          </label>
        </div>
      </div>

      <div class="form-checkbox">
        <span class="label">Что знаешь во Vue?</span>
        <div class="checkbox">
          <label>
            <input
              type="checkbox"
              v-model="skills"
              value="Vuex"
              name="scills"
            />
            Vuex
          </label>
        </div>
        <div class="checkbox">
          <label>
            <input
              type="checkbox"
              v-model="skills"
              value="Vue CLI"
              name="scills"
            />
            Vue CLI
          </label>
        </div>
        <div class="checkbox">
          <label>
            <input
              type="checkbox"
              v-model="skills"
              value="Vue Router"
              name="scills"
            />
            Vue Router
          </label>
        </div>
      </div>

      <div class="form-checkbox">
        <span class="label">Соглашение с правилами!</span>
        <div class="checkbox">
          <label>
            <input type="checkbox" v-model="agree" name="agree" required />
            Согласен
          </label>
        </div>
      </div>
      <button type="submit" class="btn primary">Отправить</button>
    </form>
  </div>
</template>

<script>
import AppInput from './AppInput.vue'
export default {
  data() {
    return {
      name: '',
      age: 23,
      city: 'spb',
      relocate: null,
      skills: [],
      agree: null,
      errors: {
        name: null
      }
    }
  },
  methods: {
    formIsValid() {
      let isValid = true
      if (this.name.length === 0) {
        isValid = false
        this.errors.name = 'Ошибка при вводе имени'
      } else {
        isValid = true
        this.errors.name = null
      }
      return isValid
    },
    submitHandleForm() {
      if (this.formIsValid()) {
        console.group('Form data')
        console.log('Name:', this.name)
        console.log('Age:', this.age)
        console.log('City:', this.city)
        console.log('Relocate:', this.relocate)
        console.log('Scills:', this.skills)
        console.log('Agree:', this.agree)
      }

      // console.log('nameRef', this.$refs.nameRef.value)
      console.groupEnd()
    }
  },
  components: { AppInput }
}
</script>

<style>
.form-control small {
  color: red;
}

.form-control.invalid input {
  border-color: red;
}
</style>
