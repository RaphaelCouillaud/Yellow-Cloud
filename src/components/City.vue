<template>
 <div class="cityname">
   <span>{{this.city.city}}</span>
 
 <div class="weather">
   <span>{{this.city.currentWeather.main.temp}}&deg;</span>
   <img :src="require(`../../public/img/${this.city.currentWeather.weather[0].icon}.png`)" alt="">
 </div>
 <div class="gif">
   <img :src="require(`../../public/gif/${this.city.currentWeather.weather[0].icon}.gif`)" alt="">

 </div>
 </div>
</template>

<script>
export default {
    name: "City",
    props: ['city'],
    created() {
      console.log(this.city);
    },
};
</script>

<style lang="scss" scoped>

</style>