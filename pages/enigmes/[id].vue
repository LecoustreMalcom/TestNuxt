<script setup>
    import { useRoute } from 'vue-router';

    const route = useRoute();
    const id = route.params.id;
    const {data: enigme, error} = await useFetch(`/api/enigmes/${id}`);
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