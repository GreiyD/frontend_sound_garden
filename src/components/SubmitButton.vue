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