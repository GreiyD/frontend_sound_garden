<template>
  <Header/>
    <div class="container-fluid mb-3">
      <div class="row g-2">
        <div class="col-2" style="height: 85.5vh">
          <LeftSidebar />
        </div>
        <div class="col-10" style="height: 85.5vh">
          <Content />
        </div>
      </div>
    </div>
  <AudioBarFooter/>
</template>

<script>
import Header from '../components/layouts/Header.vue'
import LeftSidebar from '../components/layouts/LeftSidebar.vue'
import Content from '../components/layouts/Content.vue'
import AudioBarFooter from "../components/layouts/AudioBarFooter.vue";

export default {
  name: "MainLayout",
  components: {Header, LeftSidebar, Content, AudioBarFooter}
};
</script>
