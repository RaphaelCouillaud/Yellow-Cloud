<template>
  <div id="app">
    <Modal v-if="showModal" v-on:close-modal="toggleModal" v-bind:APIKey="APIKey"/>
    <Nav v-on:addEvents="toggleModal" />
   
    <router-view v-bind:cities="cities" />
  </div>
</template>

<script>
import axios from "axios";
import db from "./firebase/firebasedb";
import Nav from "./components/Nav";
import Modal from "./components/Modal";
export default {
  name: "App",
  components: {
    Nav,
    Modal    
  },
  data() {
    return{
      APIKey: "bc22a5be773ad9458a21bb437ea19ca7",
      cities: [],
      showModal: null,

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
          console.log(doc.type);
          console.log(doc);
          if (doc.type === 'added' && !doc.doc.Nd) {
            try {
              const responseAPI = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${doc.doc.data().city}&units=metric&lang=fr&appid=${this.APIKey}`);
              const dataDb = responseAPI.data;
              firebaseData.doc(doc.doc.id).update({
                currentWeather: dataDb,
              }).then(() =>{
                this.cities.push(doc.doc.data());
              })
            } catch (err) {
              console.log(err);
            }
          } else if (doc.type === 'added' && doc.doc.Nd) {
          this.cities.push(doc.doc.data());
          }
        });
      });
    },
    toggleModal() {
      this.showModal = !this.showModal;
    }
    
 },
}
</script>

<style lang="scss" scoped>

* {
  font-family: 'Gloria Hallelujah', Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  cursor: pointer;
}
#app {
  height: 100vh;
  max-width: 1024px;
  margin: 0 auto;
  width: 100%;
}
</style>
