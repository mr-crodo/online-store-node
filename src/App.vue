<template>
  <div id="app">
    <p>Hello</p>
    <v-catalog/>
    <v-cart/>
  </div>
</template>

<script>
import vCatalog from './components/v-catalog'
import vCart from './components/v-cart'
export default {
  name: 'app',
  components: {
    vCatalog, vCart
  },

}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
