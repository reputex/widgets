<script setup lang="ts">
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>

    <div class="">
      <reputex-widget visibility user-address="0xE2B20608bc14A40532dC1047E9375a9E20E09B9D" api-access-key="3aa62ec9-d9e9-49f1-b2b3-d01fa0d8302a" api-secret-key="23c4d688632493d5a630163a66242b43be84ce113fef92630a3e8ce6682ef5ac" mode></reputex-widget>
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
