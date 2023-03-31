<script setup>
	import TheNavbar from './components/TheNavbar.vue';
</script>

<template>
  <TheNavbar />
  <main>
    <div class="container">
      <RouterView />
    </div>
  </main>
</template>

<style lang="scss">
  @use "style/general";
</style>
