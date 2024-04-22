<template>
  <div class="card">
    <h3>{{ title }}</h3>
    <app-button @action="open">{{
      isNewsOpen ? 'Закрыть' : 'Открыть'
    }}</app-button>
    <app-button color="danger" v-if="wasRead" @action="$emit('unmark', id)"
      >Отметить непрочитанной
    </app-button>
    <div v-if="isNewsOpen">
      <hr />
      <p>{{ text }}</p>
      <app-button v-if="!wasRead" color="primary" @action="mark"
        >Прочесть новость</app-button
      >

      <app-news-list ></app-news-list>
    </div>
  </div>
</template>

<script>
import AppButton from './AppButton.vue'
import AppNewsList from './AppNewsList.vue'
export default {
  // props: ['title', 'text', 'id', 'isOpen']
  // props: { title: String, text: String, id: Number, isOpen: Boolean }
  props: {
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    id: {
      type: Number,
      required: true
    },
    isOpen: {
      type: Boolean,
      required: false,
      default: false,
      validator(value) {
        console.log(value)
        return value === true || value == false
      }
    },
    wasRead: Boolean
  },

  // emits: ['open-news'],
  // emits: {
  //   'open-news'(num) {
  //     if (num) {
  //       return true
  //     }
  //     console.warn('No data is open-news emit')
  //     return false
  //   }
  // },
  emits: {
    'open-news': null,
    'read-news'(id) {
      if (id) {
        return true
      }
      console.warn('No ID is read-news emit')
      return false
    },
    unmark(id) {
      if (id) {
        return true
      }
      console.warn('No ID is read-news emit')
      return false
    }
  },

  data() {
    return {
      isNewsOpen: this.isOpen
    }
  },

  methods: {
    open() {
      this.isNewsOpen = !this.isNewsOpen
      if (this.isNewsOpen) {
        this.$emit('open-news')
      }
    },
    mark() {
      this.isNewsOpen = false
      this.$emit('read-news', this.id)
    }
    // unmark() {
    //   this.$emit('unmark', this.id)
    // }
  },
  components: {
    AppButton,
    AppNewsList
  }
}
</script>
