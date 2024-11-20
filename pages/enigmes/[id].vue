<script setup>
    import { useRoute } from 'vue-router';

    const route = useRoute();
    const id = route.params.id;
    const { data: response, error } = await useFetch(`/api/enigmes/${id}`);

    const enigme = response?.value?.data || null;
</script>

<template>
    <div>
      <h1 v-if="error">Oops! Error encountered: {{ error }}</h1>

      <div v-if="enigme">
        <h1> {{ enigme.titre }} </h1>
      </div>
    </div>
</template>

<style>

</style>