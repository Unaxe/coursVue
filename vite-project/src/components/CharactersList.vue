<template>
  <div>
    <div class="navMenu">
      <button @click="getPreviousPage()" :class="films.previousPage ? 'green' : 'red'">PreviousPage</button>
      <p>{{ page }}</p>
      <button @click="getNextPage()">NextPage</button>
    </div>
    <CharacterComponent
      v-for="film in films.data"
      :key="film"
      :name="film.name"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import CharacterComponent from "./CharacterComponent.vue";

var page = 1;
var films = ref({});
const getFilms = async () => {
  const response = await fetch("https://api.disneyapi.dev/characters");
  films.value = await response.json();
  console.log("films", films);
};
await getFilms();

const getNextPage = async () => {
  const response = await fetch(films.value.nextPage);
  console.log("next page", response);
  films.value = await response.json();
  page++;
  console.log("films", films);
};
const getPreviousPage = async () => {
  const response = await fetch(films.value.previousPage);
  films.value = await response.json();
  page--;
  console.log("films", films);
};
</script>

<style scoped>
.red {
  background-color: red;
}

.green {
  background-color: green;
}
</style>

