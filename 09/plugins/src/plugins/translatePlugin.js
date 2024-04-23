export default {
  install(app, options) {
    // console.log('app => ', app)
    // console.log('options => ', options)
    app.config.globalProperties.$alert = (text) => {
      window.alert(text)
    }

    let current = 'ru'

    const changeLanguage = (name) => {
      current = name
    }

    app.config.globalProperties.$i18n = (key) => {
      return key.split('.').reduce((words, k) => {
        return words[k] || '=== unknown =='
      }, options[current])
    }

    app.provide('changeI18N', changeLanguage)
  }
}
