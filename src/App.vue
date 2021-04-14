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
      city: "La Rochelle",
      cities: [],
    };
  },
  created() {
   this.getCityWeather();
  },
  methods: {
    getCityWeather() {
      let firebaseData = db.collection('cities'); //Nom de la collection Firestore
      firebaseData.onSnapshot(snap => {
        snap.docChanges().forEach(async(doc) => {
          if (doc.type === 'added') {
            try {
              const responseAPI = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${doc.doc.data().city}&units=metric&appid=${this.APIKey}`);
              const dataDb = responseAPI.data;
              firebaseData.doc(doc.doc.id).update({
                currentWeather: dataDb,
              }).then(() =>{
                this.cities.push(doc.doc.data());
              }).then(() =>{
                console.log(this.cities);
              });
            } catch (err) {
              console.log(err);
            }
          }
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
