<template>
  <div class="grid">
    <div class="citycomponent" v-for="(city, index) in cities" v-bind:key="index"> <!--Générer chaque city component dynamiquement-->
    <City v-bind:city="city"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import City from "../components/City";

export default {
  name: 'AddCity',
  props: ['cities'], //depuis vbind app.vue
  created() {
    console.log(this.city);
  },
  components: {
   City
  },
};
</script>

<style lang="scss" scoped>
.grid {
  display: flex;
  flex-direction: column;
  padding-top: 100px;
  width: 100%;
  min-height: 100vh; 
  margin: auto;
}
.citycomponent {
  margin: auto;
 
}
@media screen  and (max-width : 480px)
{
  
}
</style>