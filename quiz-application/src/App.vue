<template>
  <div id="app">
    <Header/>
    <Select/>
    <Quiz/>
  </div>
</template>

<script>
import Header from './components/Header'
import Select from './components/Select.vue'
import Quiz from './components/Quiz.vue'

export default {
  name: 'App',
  components: {
    Header,
    Select,
    Quiz
  }
}
</script>
    
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-image:url(https://cdn.pixabay.com/photo/2017/04/24/09/25/horse-2255876_960_720.jpg);
}
body{
  background: rgb(14, 13, 13);
}
</style>
