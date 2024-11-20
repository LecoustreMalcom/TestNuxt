<script setup>
    import { useRoute } from 'vue-router';

    const route = useRoute();
    const id = route.params.id;
    const { data: response, error } = await useFetch(`/api/utilisateurs/${id}`);

    const user = response?.value?.data || null;
</script>

<template>
    <div>
      <h1>Utilisateur</h1>
      <hr>
      <h1 v-if="error">Oops! Error encountered: {{ error }}</h1>

      <div v-if="user">
        <h3> {{ user.id }} </h3>
        <h3> {{ user.username }} </h3>
        <h3> {{ user.email }} </h3>
      </div>
    </div>
</template>

<style>

</style>