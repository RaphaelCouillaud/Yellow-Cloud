<template>
 <div class="cityview">

   <div class="cityprops">
      <h2>{{this.city.city}}</h2>       
      <p>{{Math.round(this.city.currentWeather.main.temp)}}&deg;</p>  
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

    <div v-if="edit" v-on:click="deleteCity" class="edit" ref="edit">       
        <i class="far fa-times" ></i>
    </div>
    
 </div>
</template>

<script>
import db from "../firebase/firebasedb";
export default {
    name: "City",
    props: ['city', 'edit'],
    created() {
         },
    data () {
      return {
        id: null,
      }
    },
    methods: {
      deleteCity() {
       db.collection('cities')
       .where('city', '==', `${this.city.city}`)
       .get().then(docs => {
         docs.forEach(doc => {
           this.id = doc.id;
         });
       }).then(() => {
         db.collection('cities')
         .doc(this.id)
         .delete();
       });
      },
    },
};
</script>

<style lang="scss" scoped>
.cityview { 
  display: flex;
  position: relative;
  flex-direction: row;   
  max-width: 450px;  
  max-height: 360px;
  width: 100%;
  height: 100%; 
  }
.cityprops {
  display: flex;
  margin: 0 auto;
  flex-direction: column; 
align-items: flex-start;
width: 80%;
height: 100%;

}
.cityprops h2 {
   font-size: 3em;  
letter-spacing: 1.5px;
 -webkit-text-stroke: 2.5px black;
 color: white;
 font-weight: lighter;
 text-shadow: 5px 0 #fcd40c;
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
font-weight: lighter;
 -webkit-text-stroke: 2px black;
 color: white;
 text-shadow: 4px 0 #fcd40c;
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
  width: 12%;
  height: 100%;
  text-align: center;
  justify-content: space-between;
  background: rgba(0, 0, 0, 0.5);  
}
.cityweather p, .cityweather i {  
  margin: 0 auto;  
  color: white;
   font-size: 1.5em; 
}
.cityweather p {
   color: #fcd40c;
}
.cityicon img {
  width: 80%;
  height: auto;
  padding: 5px;
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
.gif img {
 width: 100%;
  height: 100%;
  object-fit: cover;
}
.edit {
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  margin-left: 10px;
}
.fa-times {
  color: #bc040c;
  font-size: 2.5em;
  margin: auto;
  font-weight: bolder;
  -webkit-text-stroke: 1.5px white;

}

@media screen  and (min-width : 480px)
{
 
 .gif img { 
  object-fit: fill;
}
}
</style>