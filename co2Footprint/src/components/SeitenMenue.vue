<template>
  <div class="seiten-menue" :class="mobileAnsicht ? 'seiten-menue--mobil' : ''">
    <h5>Globale Links</h5>
    <ul class="seiten-menue__liste">
      <li class="liste__eintrag" v-for="link in externenLinks" :key="link.name">
        <a :href="link.url" target="_blank">{{ link.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

interface ExternerLink {
  name: string;
  url: string;
}

export default defineComponent({
  name: "SeitenMenue",
  props: {
    mobileAnsicht: {
      type: Boolean,
      required: true,
    },
  },
  setup() {
    const externenLinks = ref<ExternerLink[]>([
      { name: "Google", url: "https://www.google.com" },
      { name: "Facebook", url: "https://www.facebook.com" },
    ]);

    return { externenLinks };
  },
});
</script>

<style scoped lang="scss">
.seiten-menue {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  .seiten-menue__liste {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    list-style-type: none;
    margin-left: 24px;
    padding: 0px;
    gap: 12px;
    .liste__eintrag {
      font-size: 16px;
    }
  }
  &--mobil {
    align-items: center;
    .seiten-menue__liste {
      margin-left: 0px;
      align-items: center;
      .liste__eintrag {
        font-size: 18px;
      }
    }
  }
}
</style>
