<template>
  <div>
    <h1>{{ example }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Example',
  components: {}, // реестрация компонентов
  props: {}, // входные параметры
  data() { // данные компонента
    return {
      example: 'Hello'
    }
  },
  methods: {}, // методы компонента
  computed: {
    getData() {
      return `${this.example}, World!`
    }
  }, // подсчитывание чего то и возврат значнения (кешируется)
  // Хуки жизненного цикла компонента
  beforeCreate() {
    console.log('before created');
  },
  created() {
    console.log('created');
  },
  beforeMount() {
    console.log('beforeMount');
  },
  mounted() {
    console.log('mounted');
  },
  beforeUpdate() {
    console.log('beforeUpdate');
  },
  updated() {
    console.log('updated');
  },
  beforeDestroy() {
    console.log('beforeDestroy');
  },
  destroyed() {
    console.log('destroyed');
  },
  watch: {
    example(value) {
      console.log(value);
    }
  }
}
</script>

<style lang="scss">

</style>