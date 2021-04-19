<template>
 <div class="cityview">

   <div class="cityprops">
      <h2>{{this.city.city}}</h2>       
      <p>{{this.city.currentWeather.main.temp}}&deg;</p>  
  </div>

  <div class="cityweather">
      <div class="cityicon"><img :src="require(`../../public/img/${this.city.currentWeather.weather[0].icon}.png`)" alt=""></div>
      <div class="cityclouds">
        <i class="fas fa-cloud"></i>
        <p>{{this.city.currentWeather.clouds.all}}%</p>
      </div>
      <div class="citywindspeed">
        <i class="fas fa-wind"></i>
        <p>{{this.city.currentWeather.wind.speed}}</p>
      </div>
      <div class="citywinddirection">
        <i class="far fa-compass"></i>
        <p>{{this.city.currentWeather.wind.deg}}&deg;</p>
      </div>
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
.cityview {
  border: 3px solid yellow;
  display: flex;
  position: relative;
  padding: 20px;
  width: 100%;
}
.cityprops, .weather {
  display: flex;
  margin: auto;
  flex-direction: column;
 border: 3px solid black; 
align-items: flex-start;
}
.cityname {  
  font-size: 3em;  
letter-spacing: 1.5px;
 -webkit-text-stroke: 1.5px black;
 color: transparent;
 text-shadow: 5px 0 #bc040c;
text-transform: uppercase;
hyphens: auto;
	-webkit-hyphens: auto;
	-moz-hyphens: auto;
	-ms-hyphens: auto;
overflow-wrap: break-word;
}
.gif {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 480px;
  max-height: 360px;
  z-index: -1;
  object-fit: cover;
  overflow: hidden;
}
</style>