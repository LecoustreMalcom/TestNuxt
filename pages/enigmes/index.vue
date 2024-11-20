<script setup>
    const {data: enigmes, error} = await useFetch("/api/enigmes");
</script>

<template>
    <div>
      <h1>Enigmes</h1>
      <hr>
      <h1 v-if="error">Oops! Error encountered: {{ error }}</h1>
      <div v-if="enigmes">
        <div v-for="enigme in enigmes" :keys="enigme.id">
          <h3><NuxtLink :to="`/enigmes/${enigme._id}`"> {{ enigme.titre }} </NuxtLink></h3>
          <hr>
        </div>
      </div>
    </div>
</template>

<style>

</style>