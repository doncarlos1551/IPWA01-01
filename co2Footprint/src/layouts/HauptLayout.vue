<template>
  <div class="main-layout">

    <div class="main-layout__header">
      Header-Bereich (Platzhalter)
    </div>

    <div class="main-layout__content" :class="$q.lang.rtl ? 'main-layout__content--rtl' : ''">
      <div class="content__menu">
        Menü (Platzhalter)
      </div>

      <div class="content__router-view">
        <router-view />
      </div>
    </div>

    <div class="main-layout__footer">
      Footer-Bereich (Platzhalter)
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HauptLayout',
  components: {
  },
  setup() {
    return{};
  }
});
</script>

<style scoped lang="scss">
.main-layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: red;
  .main-layout__header, .main-layout__footer {
    padding: 20px;
    background-color: #f5f5f5;
  }
  .main-layout__content {
    flex: 1;
    display: flex;
    align-items: stretch;
    .content__menu, .content__router-view {
      padding: 20px;
    }

    .main-layout__content--rtl {
      width: 240px;

      background-color: green;
    }
    .content__router-view {
      flex: 1;
    }
    .main-layout__content--rtl {
      flex-direction: row-reverse;
    }
  }
}
</style>
