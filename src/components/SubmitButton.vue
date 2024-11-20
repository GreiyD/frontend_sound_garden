<template>
  <button type="submit" class="button col-8">{{ label }}</button>
</template>

<script>
export default {
  name: 'SubmitButton',
  props: {
    label: {
      type: String,
      default: 'Submit',
    },
  },
}
</script>

<style scoped>
.button {
  background-color: #ffcc00;
  color: white;
  border: none;
  border-radius: 0.375rem;
  padding: 0.6em 1.2em;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.button:hover {
  background-color: #ffd931;
}

.button:active {
  background-color: #e6b800;
}
</style>