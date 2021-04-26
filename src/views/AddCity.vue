<template>
  <div class="grid">
    <div class="citycomponent" v-for="(city, index) in cities" v-bind:key="index"> <!--Générer chaque city component dynamiquement-->
    <City v-bind:city="city" v-bind:edit="edit"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import City from "../components/City";

export default {
  name: 'AddCity',
  props: ['cities', 'edit'], //depuis vbind app.vue
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
  padding-top: 25px;
  width: 100%;
  min-height: 100vh; 
  margin: 0 auto;
  
}
.citycomponent {
  margin: 0 auto;
   padding-bottom: 25px;
 
}

  @media screen  and (min-width : 768px)
{
  .grid { 
  display: flex;  
  flex-direction: row; 
  flex-wrap: wrap;
  }
 

}
</style>