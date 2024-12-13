<template>
  <span v-if="nickname" class="fw-bold me-3">{{ nickname }}</span>
  <img src="https://github.com/mdo.png" alt="User Avatar" width="50" height="50" class="rounded-circle">
</template>

<script>
export default {
  name: 'UserAvatar',
  data() {
    return {
      nickname: null,
    };
  },
  created() {
    this.nickname = localStorage.getItem('nickname');
  },
};
</script>