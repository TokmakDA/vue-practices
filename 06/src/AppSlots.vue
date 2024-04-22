<template>
  <div class="containet pt-1">
    <div class="card">
      <h2>Slots</h2>
    </div>

    <app-list>
      <!-- <template #default="slotProps">
        <span style="color: orange">
          Item: {{ slotProps.iter }} | <strong>ID: {{ slotProps.idx }}</strong>
        </span>
      </template> -->
      <template #default="{ iter, idx }">
        <span style="color: orange">
          Item: {{ iter }} | <strong>ID: {{ idx }}</strong>
        </span>
      </template>
    </app-list>

    <app-block>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam deleniti
        numquam unde. Veritatis, repudiandae adipisci?
      </p>
      <!-- <template v-slot:header>
        <h3>Это заголовок</h3>
      </template> -->
      <template #header>
        <h3>Это заголовок</h3>
      </template>

      <template #footer>
        <hr />
        <small>Это Футер</small>
      </template>
    </app-block>
  </div>
</template>

<script>
import AppBlock from './components/AppBlock.vue'
import AppList from './components/AppList.vue'
export default {
  components: {
    AppBlock,
    AppList
  }
}
</script>

<!-- scoped - локализует стили относительно компонента-->
<style scoped></style>
