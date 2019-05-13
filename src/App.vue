<template>
  <div id="app">
    <Navbar />
    <router-view :key="$route.fullPath"></router-view>
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components:{
    Navbar,
    Footer
  }
}
</script>

<style>
#app {
  font-family: 'fp-head-pro', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
html, body { overflow-x: hidden; }
</style>
