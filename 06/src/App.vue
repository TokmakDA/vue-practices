<template>
  <div class="containet pt-1">
    <div class="card">
      <h2>Асинхронные и Динамические компоненты</h2>

      <async-component></async-component>
      <app-button ref="myBtn"  :color="oneColor" @action="active = 'one'"> one </app-button>
      <app-button :color="twoColor" @action="active = 'two'"> two </app-button>
    </div>

    <!-- <app-text-one v-if="active === 'one'"></app-text-one>
    <app-text-two v-else-if="active === 'two'"></app-text-two> -->
    <!-- <component :is="componentName"> </component> -->
    <keep-alive>
      <component :is="componentName"> </component>
    </keep-alive>
  </div>
</template>

<script>
import AppButton from './components/AppButton.vue'
import AppTextOne from './components/AppTextOne.vue'
import AppTextTwo from './components/AppTextTwo.vue'
export default {
  data() {
    return {
      active: 'one'
    }
  },

  mounted() {
    // setTimeout(() => {
    //   this.componentName = 'пряники'
    // }, 1500)
    this.$refs.myBtn.btnLog()
  },

  computed: {
    // componentName() {
    //   // return this.active === 'one' ? AppTextOne : AppTextTwo
    //   return 'app-text-' + this.active
    // },
    componentName: {
      get() {
        return 'app-text-' + this.active
      },
      set(value) {
        console.log('componentName', value)
      }
    },

    oneColor() {
      return this.active === 'one' ? 'primary' : ''
    },
    twoColor() {
      return this.active === 'two' ? 'primary' : ''
    }
  },
  components: {
    AppButton,
    AppTextOne,
    AppTextTwo
  }
}
</script>

<!-- scoped - локализует стили относительно компонента-->
<style scoped></style>
