<template>
  <div>
    <h1>Personnages</h1>
    <div class="container">
      <Suspense><CharactersList /></Suspense>
    </div>
  </div>
</template>

<script setup>
import { Suspense } from "vue";
import CharactersList from "./components/CharactersList.vue";

const names = ["Mickey", "Minnie", "Dingo", "Daisy", "Donald"];
</script>

<style scoped></style>

