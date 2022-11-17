<template>
  <div class="container">
    <h2>{{props.name}}</h2>
    <img src="https://static.wikia.nocookie.net/disney/images/6/61/Olu_main.png" alt="Character's Image">
  </div>
</template>

<script setup>
  // ajouter des props
  const props = defineProps({
    name: String
  })
</script>


<style scoped>
.container {
  padding: 20px;
  border: 1px solid black;
  border-radius: 10px;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: #dcdcdc;
}

h2 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
}
</style>