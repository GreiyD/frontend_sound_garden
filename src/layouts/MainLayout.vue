<template>
  <Header />
  <div class="container">
    <router-view>
      <Content />

      <RightSidebar/>
    </router-view>
  </div>
</template>

<script>
import Header from '../components/layouts/Header.vue'
import Sidebar from '../components/layouts/RightSidebar.vue'
import Content from '../components/layouts/Content.vue'
import RightSidebar from "../components/layouts/RightSidebar.vue";

export default {
  name: "MainLayout",
  components: {RightSidebar, Header, Content}
};
</script>
