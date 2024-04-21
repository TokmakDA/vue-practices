const h = Vue.h;

const app = Vue.createApp({
  data: () => ({
    title: "Vue 3 Template App1",
  }),
  methods: {
    chandeTitle() {
      console.log(this);
      this.title = "Заголовок изменен!";
    },
  },
  template: `
    <div className="card center">
      <h1>{{ title }}</h1>
      <button
        className="btn"
        @click="chandeTitle"
      >
        Изменить
      </button>
    </div>
  `,
});

const app2 = Vue.createApp({
  data: () => ({
    title: "Vue 3 Template App2",
  }),
  methods: {
    chandeTitle() {
      console.log(this);
      this.title = "Заголовок изменен!";
    },
  },

  render() {
    return h(
      "div",
      {
        class: "card center",
      },
      [
        h("h1", {}, this.title),
        h("button", { class: "btn", onClick: this.chandeTitle }, "Изменить"),
      ]
    );
  },
});

app.mount("#app");
app2.mount("#app2");
