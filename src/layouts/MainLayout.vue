<template>
  <div class="container">
    <router-view/>
  </div>
</template>

<script>
import Header from '../components/layouts/Header.vue'
import Sidebar from '../components/layouts/RightSidebar.vue'
import Content from '../components/layouts/Content.vue'

export default {
  name: "MainLayout"
};
</script>
