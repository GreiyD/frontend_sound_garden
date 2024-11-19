<template>
  <button type="submit" class="btn btn-primary col-3">{{ label }}</button>
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