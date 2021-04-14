<template>
  <div id="app">
    <Nav />
    <router-view/>
  </div>
</template>

<script>
import axios from "axios";
import db from "./firebase/firebasedb";
import Nav from "./components/Nav";
export default {
  name: "App",
  components: {
    Nav    
  },
  data() {
    return{
      APIKey: "bc22a5be773ad9458a21bb437ea19ca7",
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
#app {
  height: 100vh;
}
</style>
