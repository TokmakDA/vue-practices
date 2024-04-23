export const alertMixin = {
  data() {
    return {
      alert: false
    }
  },

  methods: {
    toggleAlert() {
      return (this.alert = !this.alert)
    }
  }
}
