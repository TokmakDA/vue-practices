<template>
  <div class="card" v-if="people.length !== 0">
    <ul class="list">
      <li class="card inline" v-for="person in people" :key="person.id">
        <h3>{{ person.firstName }}</h3>
        <button class="btn danger" @click="$emit('remove', person.id)">
          Удалить
        </button>
      </li>
    </ul>
  </div>
  <div class="card center" v-else>
    <h3>Массив пуст</h3>
    <button class="btn" @click="$emit('download')">Загрузить списток</button>
  </div>
</template>

<script>
export default {
  emits: ['download', 'remove'],
  props: {
    people: Array
  }
}
</script>

<style scoped>
.inline {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
