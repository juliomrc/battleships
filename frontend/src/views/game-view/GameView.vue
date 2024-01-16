<script setup lang="ts">
import BattleArea from './components/BattleArea.vue';
</script>

<template>
  <div class="container">
    <BattleArea />
    <BattleArea hasFogOfWar />
  </div>
</template>

<style>
.container {
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  justify-content: center;
}
</style>
