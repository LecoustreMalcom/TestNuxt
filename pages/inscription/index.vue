<script setup>
import { ref } from 'vue';
import { handleSubmit } from '../../handlers/formHandler';

const username = ref('');
const email = ref('');
const motDePasse = ref('');

const onSubmit = () => {
  handleSubmit(username.value, email.value, motDePasse.value);
};
</script>

<template>
    <div>
      <h1>Inscription</h1>
      <form @submit.prevent="onSubmit">
        <label for="username">Nom d'utilisateur:</label>
        <input type="text" id="username" v-model="username" required><br><br>

        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required><br><br>
        
        <label for="password">Mot de passe:</label>
        <input type="password" id="password" v-model="motDePasse" required><br><br>
        
        <button type="submit">S'inscrire</button>
      </form>
    </div>
  </template>