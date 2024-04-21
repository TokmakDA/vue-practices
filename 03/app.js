Vue.createApp({
  data: () => ({
    myHtml: /* html */ `<h1>Vue 3 App</h1>`,
    title: "Заголовок",
    person: {
      firstName: "Dmitry",
      lastName: "Tokmak",
      age: 33,
    },
    items: [1, 2, 3, 4, 5, 6],
  }),
  methods: {
    stopPropagation(event) {
      event.stopPropagation();
    },
    addItem() {
      this.items.unshift(this.$refs.myInput.value);
      this.$refs.myInput.value = "";
    },
    remove(idx) {
      this.items.splice(idx, 1);
    },
    log(item) {
      console.log(item);
    },
  },
  computed: {
    evenItems() {
      return this.items.filter((i) => i % 2 === 0);
    },
  },
}).mount("#app");
