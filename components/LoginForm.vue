<script setup>
import { ref } from "vue";
// import { handleSubmit } from "../server/handlers/loginHandler";

const formData = ref({
    username: '',
    motDePasse: ''
});

/*
const onSubmit = () => {
    handleSubmit(formData.value.username, formData.value.motDePasse);
};
*/
</script>

<template>
    <form @submit.prevent="">
        <div>
            <label for="username">Nom d'utilisateur:</label>
            <input type="text" id="username" v-model="formData.username" required />
        </div>
        
        <div>
            <label for="motDePasse">Mot de passe:</label>
            <input type="password" id="motDePasse" v-model="formData.motDePasse" required />
        </div>
        
        <button type="submit">Se connecter</button>

        <p>Pas de compte? <a href="/inscription"> S'inscrire </a></p>
    </form>
</template>

<style>

</style>