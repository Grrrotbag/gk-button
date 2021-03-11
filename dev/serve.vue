<script>
import { defineComponent } from 'vue';
import GkButton from '@/gkButton.vue';

export default defineComponent({
  name: 'ServeDev',
  components: {
    GkButton
  }
});
</script>

<template>
  <div id="app">
    <gkButton />
  </div>
</template>
