<template>
  <div class="d-flex justify-content-center">
    <img
        src="../assets/symfony.svg"
        alt="logo"
        :style="{ width: size, height: size }"
    />
  </div>
</template>

<script>
export default {
  name: 'Logo',
  props: {
    size: {
      type: String,
      default: '100px',
    }
  },
};
</script>