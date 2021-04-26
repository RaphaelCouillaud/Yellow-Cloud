<template>
  <header class="addEvents">
      <nav>
          <div class="add">Nouveau lieu</div>
          <h1><strong>Yellow</strong> <i class="fas fa-cloud"></i> <strong>Cloud</strong></h1> 
          <div class="navactions">
              <i class="fas fa-edit"></i>
              <i v-on:click="RefreshWeather" class="fas fa-sync-alt"></i>
              <i v-on:click="addCity" class="fas fa-map-marker-alt"></i>
          </div>
      </nav>
  </header>
</template>

<script>
export default {
    name: "Nav",
    methods: {
        addCity() {
            this.$emit("addEvents");
        },
        RefreshWeather() {
            location.reload();
        },
    }
}
</script>

<style lang="scss" scoped>
header {
    z-index: 99;
    position: sticky;
    margin: auto;
    width: 100%;
    max-width: 1024px;  
    background: linear-gradient(
    to right,
    #ffffff,
    #60bcf4,
    #2980b9
  ); 
}
nav {
    display: flex;    
    justify-content: space-around;   
    margin: auto;
    align-items: center;
}
.add {
    margin: 0 auto;   
    text-align: center;
}
h1 {
   font-size: 1.5em;  
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
margin: 0 auto;
text-align: center;
}
h1 i {   
 -webkit-text-stroke: 2.5px black;
 color: #fcd40c;
 text-shadow: 10px 0 white;
}
h1 strong{
  display: none;
}
.navactions {
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    
}
.navactions i:nth-child(2), .navactions i:nth-child(3) {
    padding-left: 10px;
}
.navactions i {
    font-size: 1.5em;
     margin: auto;
}
@media screen  and (min-width : 768px)
{
  h1 strong{
  display: inline;
}
}
</style>