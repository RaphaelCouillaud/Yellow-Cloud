<template>
    <div v-on:click="closeModal" class="modal" ref="modal">
        <div class="modalwrap" ref="modalwrap">
            <label for="cityname">Choisissez une ville :</label>
            <input type="text" name="cityname" placeholder="Springfield, Shelbyville...etc" v-model="city">
            <button>Ajouter</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "Modal",
    data () {
        return {
            city:null,
        };
    },
    methods: {
        closeModal(e) {
            if (e.target === this.$refs.modal) {
                 this.$emit("close-modal")
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
label {
    color: white;
}
.modalwrap {
    max-width: 480px;
    border-radius: 30px;
    width: 66%;
    padding: 20px;
    background-color: black;
    margin: auto; 
}
input {
    color: white;
    border: none;
    background-color: transparent;
    border-bottom: 3px solid white;
    width: 100%;
}
button {
    background-color: black;
    color: white;
    border-radius: 30px;
    border: 3px solid white;

}

</style>