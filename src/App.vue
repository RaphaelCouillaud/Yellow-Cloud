<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>

<script>
import axios from "axios";
import db from "./firebase/firebasedb";
export default {
  name: "App",
  data() {
    return{
      APIKey: "bc22a5be773ad9458a21bb437ea19ca7",
      city: "Brighton",
      cities: [],
    }
  },
  created() {
   
  },
  methods: {
    getCityWeather() {
      let firebaseData = db.collection('cities'); //Nom de la collection Firestore
      firebaseData.onSnapshot(snap => {
        snap.docChanges().forEach(async(doc) => {
          console.log(doc);
        });
      })
    },

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
