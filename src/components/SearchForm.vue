<template>
  <div class="d-flex input-group">
    <input type="text" class="form-control" placeholder="What do you want to turn on?" aria-label="search"/>
    <button class="button" type="button">
      <img src="../assets/search.svg" alt="logo" class="d-flex" style="width: 23px; height: 23px"/>
    </button>
  </div>
</template>

<script>
export default {
  name: "SearchWithButton"
};
</script>

<style scoped>
.form-control:focus {
  border-color: #c3c3c3;
  box-shadow: none;
}
</style>