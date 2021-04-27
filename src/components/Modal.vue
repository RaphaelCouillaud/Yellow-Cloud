<template>
    <div v-on:click="closeModal" class="modal" ref="modal">
        <div class="modalwrap" ref="modalwrap">
            <label for="cityname">Saisissez le nom d'une ville parmi les 200 000 disponibles :</label>
            <input type="text" name="cityname" placeholder="Springfield, Shelbyville...etc" v-model="city">
            <button v-on:click="newCity">Ajouter</button>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import db from "../firebase/firebasedb";
export default {
    name: "Modal",
    props: ["APIKey"],
    data () {
        return {
            city:"",
        };
    },
    methods: {
        closeModal(e) {
            if (e.target === this.$refs.modal) {
                 this.$emit("close-modal")
            }           
        },
        async newCity() {
            if (this.city === "") {
                alert("Saisissez le nom d'une ville");
            } else {
                const resApi = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&lang=fr&appid=${this.APIKey}`);
                const dataApi = await resApi.data;
                db.collection('cities')
                .doc()
                .set({
                    city: this.city,
                    currentWeather: dataApi,
                }).then(() => {
                     this.$emit("close-modal");
                });
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.modal {
    z-index: 100;
    background: rgba(0, 0, 0, 0.5);  
    position: fixed;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1024px;
}
.modalwrap {
    max-width: 480px;  
    display: flex;  
    text-align: center;
    flex-direction: column;
    justify-content: space-around;
    width: 66%;
    padding: 20px;
    background: linear-gradient(
    to right,
    #ffffff,
    #60bcf4,
    #2980b9
  ); 
    margin: auto; 
}
label {
    color:black;
    padding: 5px;   
 text-shadow: 2px 0 #fcd40c;
 font-size: 1em;
}
input {
    color: black;
   background: rgba(255, 255, 255, 0.75); 
    border: 3px solid #fcd40c;
    width: 100%;
    margin-bottom: 15px;
}
input:focus {
    border: 3px solid black;
    background-color: #fcd40c;
    font-weight: bolder;
}
button {
    background-color: #fcd40c;
    color: black;    
   
    margin: auto;
    font-size: 1.1em;
    font-family: 'Gloria Hallelujah', Helvetica, Arial, sans-serif;
    font-weight: bolder;
    

}

</style>