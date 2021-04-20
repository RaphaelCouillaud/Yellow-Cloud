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
 
  display: flex;
  position: relative;
  flex-direction: row;  
  width: 480px;  
  height: 360px;  
  }
.cityprops {
  display: flex;
  margin: 0 auto;
  flex-direction: column; 
align-items: flex-start;
width: 80%;
height: 100%;
justify-content: start;
}
.cityprops h2 {
   font-size: 3.5em;  
letter-spacing: 1.5px;
 -webkit-text-stroke: 1.5px black;
 color: white;
 font-weight: bolder;
 text-shadow: 4px 0 #bc040c;
text-transform: uppercase;
hyphens: auto;
	-webkit-hyphens: auto;
	-moz-hyphens: auto;
	-ms-hyphens: auto;
overflow-wrap: break-word;
margin: 0 0 0 10px;
}
.cityprops p {
   font-size: 2.5em;  
letter-spacing: 1.5px;
 -webkit-text-stroke: 1.5px black;
 color: white;
 text-shadow: 4px 0 #fcfc04;
text-transform: uppercase;
hyphens: auto;
	-webkit-hyphens: auto;
	-moz-hyphens: auto;
	-ms-hyphens: auto;
overflow-wrap: break-word;
margin: 0 0 0 10px;
}
.cityweather {  
  margin: auto;
  display: flex;
  flex-direction: column;
  width: 20%;
  height: auto;
  text-align: center;
  justify-content: space-between;
  background: rgba(0, 0, 0, 0.5);  
}
.cityweather p {  
  margin: 0;  
  color: white;
}
.cityicon img {
  width: 100%;
  height: auto;
}
.gif {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;  
 
}
</style>