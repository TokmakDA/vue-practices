<template>
  <div class="containet pt-1">
    <div class="card">
      <h2>Актуальные новости {{ now }}</h2>
      <span>
        Открыто <strong>{{ openRate }}</strong> | Прочитано:
        <strong>{{ readRate }}</strong>
      </span>
    </div>

    <app-news
      v-for="item in news"
      :key="item.id"
      :title="item.title"
      :id="item.id"
      :is-open="item.isOpen"
      :text="item.text"
      :was-read="item.wasRead"
      @open-news="openNews"
      @read-news="readNews"
      @unmark="unreadNews"
    ></app-news>
  </div>
</template>

<script>
import AppNews from './components/AppNews.vue'
export default {
  name: 'App',

  data() {
    return {
      now: new Date().toLocaleDateString('ru-RU'),
      openRate: 0,
      readRate: 0,
      news: [
        {
          title: 'Lorem, ipsum.',
          id: 1,
          text: `
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Iusto saepe sit nostrum totam quas amet maxime minus pariatur vitae quae.
          `,
          isOpen: false,
          wasRead: false
        },

        {
          title: 'Lorem ipsum dolor sit amet.',
          id: 2,
          text: `
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Corrupti ea magni quam ab in dolorum provident eaque!
          `,
          isOpen: false,
          wasRead: false
        }
      ]
    }
  },

  provide() {
    return {
      news: this.news
    }
  },

  methods: {
    openNews() {
      this.openRate++
    },
    readNews(id) {
      const idx = this.news.findIndex((news) => news.id === id)
      this.news[idx].wasRead = true
      this.readRate++
    },
    unreadNews(id) {
      const news = this.news.find((news) => news.id === id)
      news.wasRead = false
      this.readRate--
    }
  },

  components: {
    'app-news': AppNews
  }
}
</script>

<!-- scoped - локализует стили относительно компонента-->
<style scoped>
  h2 {
    color: darkgreen;
  }
</style>
