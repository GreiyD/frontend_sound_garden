<template>
  <label :for="id" class="form-label text-start d-block">{{ label }}:</label>
  <input
      :type="type"
      class="form-control"
      :id="id"
      :placeholder="placeholder"
      v-bind="$attrs"
  />
</template>

<script>
export default {
  name: 'InputField',
  props: {
    id: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: '',
    },
  },
};
</script>