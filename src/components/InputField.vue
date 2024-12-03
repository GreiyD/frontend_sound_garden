<template>
  <label :for="id" class="form-label text-start d-block">{{ label }}:</label>
  <input
      :type="type"
      class="form-control"
      :class="{ 'is-invalid': error }"
      :id="id"
      :placeholder="placeholder"
      v-bind="$attrs"
      @input="$emit('update:modelValue', $event.target.value)"
  />
  <div v-if="error" class="invalid-feedback">{{ error }}</div>
</template>

<script>
export default {
  name: 'InputField',
  props: {
    modelValue: String,
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
    error: {
      type: String,
      default: '',
    },
  },
};
</script>

<style scoped>
.form-control:focus {
  border-color: #c3c3c3;
  box-shadow: none;
}
</style>
