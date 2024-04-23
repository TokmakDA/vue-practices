<template>
  <div class="container">
    <app-alert :alert="alert" @close="alert = null"></app-alert>
    <form class="card" @submit.prevent="createPerson">
      <h2>Работа с базой данных</h2>
      <div class="form-control">
        <label for="name"> </label>
        <input type="text" id="name" v-model="name" />
      </div>

      <button class="btn primary" :disabled="!name.length">
        Добавить пользователя
      </button>
    </form>

    <app-loader v-if="loading"></app-loader>

    <app-people-list
      v-else
      :people="people"
      @download="loadPeople"
      @remove="removePerson"
    ></app-people-list>
  </div>
</template>

<script>
import AppPeopleList from './AppPeopleList.vue'
import AppAlert from './AppAlert.vue'
import axios from 'axios'
import AppLoader from './AppLoader.vue'

export default {
  data() {
    return {
      name: '',
      people: [],
      alert: null,
      loading: false
    }
  },
  mounted() {
    this.loadPeople()
  },
  methods: {
    async createPerson() {
      // https://vue-practices-2f3db-default-rtdb.europe-west1.firebasedatabase.app/people.json
      const response = await fetch(
        'https://vue-practices-2f3db-default-rtdb.europe-west1.firebasedatabase.app/people.json',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            firstName: this.name
          })
        }
      )
      const data = await response.json()
      console.log(data)
      this.people.push({
        id: data.name,
        firstName: this.name
      })
      this.name = ''
    },
    async loadPeople() {
      this.loading = true
      try {
        const { data } = await axios.get(
          'https://vue-practices-2f3db-default-rtdb.europe-west1.firebasedatabase.app/people.json'
        )
        if (!data) {
          throw new Error('Список пользователей пуст, Добавьте пользователя')
        }

        this.people = Object.keys(data).map((key) => {
          return { id: key, ...data[key] }
        })
      } catch (err) {
        this.alert = {
          type: 'danger',
          title: 'Error!',
          text: err.message
        }
      } finally {
        this.loading = false
      }
    },
    async removePerson(id) {
      try {
        const response = await axios.delete(
          `https://vue-practices-2f3db-default-rtdb.europe-west1.firebasedatabase.app/people/${id}.json`
        )
        console.log(response)
        const person = this.people.find((i) => i.id === id)
        this.people = this.people.filter((i) => i.id !== id)
        this.alert = {
          type: 'primary',
          title: 'Успешно!',
          text: `Пользователь "${person.firstName}" был удален!`
        }
      } catch (err) {
        console.log(err.message)
      }
    }
  },
  components: { AppPeopleList, AppAlert, AppLoader }
}
</script>

<style></style>
