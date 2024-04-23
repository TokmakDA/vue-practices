import { createApp } from 'vue'
import App from './App.vue'
import './theme.css'

createApp(App)
  // .directive('focus', {
  //   mounted(el) {
  //     console.log('focus => el', el)
  //     el.focus()
  //   }
  // }) // Глобальный
  .mount('#app')
