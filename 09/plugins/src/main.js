import { createApp } from 'vue'
import App from './App.vue'
import './theme.css'
import translatePlugin from './plugins/translatePlugin'
import { en, ru } from './lib/i18n'

const app = createApp(App)

app.use(translatePlugin, { ru, en })


app.mount('#app')
