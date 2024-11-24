<template>
  <router-view/>
</template>

<script>
import MainLayout from './layouts/MainLayout.vue';

export default {
  name: 'App',
  components: {
    MainLayout,
  },
};
</script>

<style>
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>