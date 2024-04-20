const App = {
  data() {
    return {
      placeholderString: "Введите заметку",
      title: "Список заметок",
      inputValue: "",
      notes: ["Заметка 1", "2"],
    };
  },
  methods: {
    addNewNote() {
      if (this.inputValue.length !== 0) {
        this.notes.push(this.inputValue);
        this.inputValue = "";
      }
    },

    toUpperCase(item) {
      return item.toUpperCase();
    },
    removeNote(idx) {
      this.notes.splice(idx, 1);
    },
  },
  computed: {
    dubleCounteComputes() {
      console.log("dubleCounteComputes");
      return this.notes.length * 2;
    },
  },

  watch: {
    inputValue(value) {
      if (value.length > 100) {
        this.inputValue = "";
      }
    },
  },
};

const app = Vue.createApp(App);

app.mount("#app");
