<template>
  <span>Globale Navigation (Platzhalter)</span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'; 

export default defineComponent({
  name: 'GlobaleNavigation',
  props: {
    aktivesElement: {
      type: String,
      required: false
    }
  }
});
</script>
