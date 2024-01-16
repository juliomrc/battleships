<script setup lang="ts">
import { ref } from 'vue';
import { getBattleshipsGrid } from './getBattleshipsGrid';
import { buildBattleAreaGrid, getRowAndColumnLabels, isPlayArea } from './battleAreaGridHelpers';

interface BattleAreaProps {
  hasFogOfWar?: boolean;
}

const { hasFogOfWar } = defineProps<BattleAreaProps>();
const battleshipsGrid = getBattleshipsGrid();
const battleAreaGrid = buildBattleAreaGrid();

const shotPositions = ref<{ x: number; y: number }[]>([]);

const shoot = (x: number, y: number) => {
  if (!isPlayArea(x, y)) return;
  shotPositions.value.push({ x, y });
};

const getSquareClasses = (x: number, y: number) => {
  if (!isPlayArea(x, y)) {
    return {
      gridItem: true,
      label: true,
    };
  }
  const isPositionVisible =
    !hasFogOfWar || shotPositions.value.some((pos) => pos.x === x && pos.y === y);
  const isBattleshipPosition = battleshipsGrid[x][y];

  return {
    gridItem: true,
    battleship: isPositionVisible && isBattleshipPosition,
    water: isPositionVisible && !isBattleshipPosition,
    fogOfWar: !isPositionVisible,
  };
};
</script>

<template>
  <div class="gridContainer">
    <div
      v-for="item in battleAreaGrid"
      :class="getSquareClasses(item.x, item.y)"
      @click="shoot(item.x, item.y)"
      :key="`${item.x}${item.y}`"
    >
      {{ getRowAndColumnLabels(item.x, item.y) }}
    </div>
  </div>
</template>

<style scoped>
.gridContainer {
  color: black;
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  grid-template-rows: repeat(11, 1fr);
  align-items: center;
  height: 200px;
  width: 200px;
}

.battleship {
  background-color: darkblue;
}

.water {
  background-color: lightblue;
}

.fogOfWar {
  background-color: grey;
}

.label {
  background-color: white;
}

.gridItem {
  height: 100%;
  width: 100%;

  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
