<template>
  <span>SeitenMenue (Platzhalter)</span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'; 

export default defineComponent({
  name: 'SeitenMenue',
  props: {
    aktivesElement: {
      type: String,
      required: false
    }
  }
});
</script>
