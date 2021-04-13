<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: "App",
  data() {
    return{
      APIKey: "bc22a5be773ad9458a21bb437ea19ca7",
      city: "Brighton"
    }
  },
  created() {
    this.getCurrentWeather();
  },
  methods: {
    getCurrentWeather() {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${this.APIKey}`)
      .then((res) => {
      console.log(res.data)
    });
  },
 },
}
</script>

<style lang="scss">
* {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
