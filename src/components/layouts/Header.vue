<template>
  <header class="p-3 mb-3 border-bottom">
    <div class="row">
      <div class="col-5 d-flex">
        <Logo size="50px"/>
        <ul class="nav justify-content-center px-2 align-self-center">
          <li>
            <router-link to="/" class="nav-link px-2 link-dark">Home</router-link>
          </li>
          <li>
            <router-link to="/library" class="nav-link px-2 link-dark">Library</router-link>
          </li>
          <li>
            <router-link to="/popular" class="nav-link px-2 link-dark">Popular</router-link>
          </li>
          <li>
            <router-link to="/about" class="nav-link px-2 link-dark">About</router-link>
          </li>
        </ul>
      </div>

      <div class="col-2 mb-3 mb-lg-0 mx-auto align-self-center">
        <SearchForm/>
      </div>

      <div class="text-end col-5 align-self-center">
        <UserAvatar/>
      </div>
    </div>
  </header>
</template>

<script>
import Logo from "../Logo.vue";
import SearchForm from "../SearchForm.vue";
import UserAvatar from "../UserAvatar.vue";

export default {
  name: 'Header',
  components: {
    UserAvatar,
    Logo,
    SearchForm
  }
}
</script>