<script setup>
import { ref } from "vue";
import { handleSubmit } from "../server/handlers/registerHandler";

const formData = ref({
    username: '',
    email: '',
    motDePasse: ''
});

const onSubmit = () => {
    handleSubmit(formData.value.username, formData.value.email, formData.value.motDePasse);
};
</script>

<template>
    <form @submit.prevent="onSubmit">
        <div>
            <label for="username">Nom d'utilisateur:</label>
            <input type="text" id="username" v-model="formData.username" required />
        </div>
        
        <div>
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="formData.email" required />
        </div>
        
        <div>
            <label for="motDePasse">Mot de passe:</label>
            <input type="password" id="motDePasse" v-model="formData.motDePasse" required />
        </div>
        
        <button type="submit">S'inscrire</button>
    </form>
</template>

<style>

</style>