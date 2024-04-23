import { createApp } from 'vue'
import App from './App.vue'
import './theme.css'
// import { alertMixin } from './components/alertMixin'

createApp(App)
  // .mixin(alertMixin) Глобальные миксины - не очень хорошая практика
  .mount('#app')
