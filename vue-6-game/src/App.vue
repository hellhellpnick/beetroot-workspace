<template>
  <div id="app" class="app">
    <the-header class="app__header" />
    <t-button @click="newGame" class="app__button">New Game</t-button>
    <div class="grid">
      <t-cell
        @click="() => toggleCell(0, idx)"
        :value="item"
        v-for="(item, idx) in grid[0]"
        :key="`0-${idx}`"
      />
      <t-cell
        @click="() => toggleCell(1, idx)"
        :value="item"
        v-for="(item, idx) in grid[1]"
        :key="`1-${idx}`"
      />
      <t-cell
        @click="() => toggleCell(2, idx)"
        :value="item"
        v-for="(item, idx) in grid[2]"
        :key="`2-${idx}`"
      />
    </div>
  </div>
</template>
<script>
import TheHeader from "./components/TheHeader";
import TCell from "./components/common/TCell";

const grid = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
];

export default {
  name: "App",
  components: {
    TheHeader,
    TCell
  },
  data: () => ({
    grid: [...grid],
    queue: false
  }),
  methods: {
    newGame() {
      this.grid = [...grid];
    },
    toggleCell(gridIdx, cellIdx) {
      const row = [...this.grid[gridIdx]];
      if (!row[cellIdx]) {
        row.splice(cellIdx, 1, this.queue ? "zero" : "cross");
        this.grid.splice(gridIdx, 1, row);
        this.queue = !this.queue;
      }
    }
  },
  computed: {
    isWin() {
      let winner = null;
      const winByRow = this.grid.find(row => row.every(cell => cell) && row.reduce((prev, cur) => {
        if (cur === prev) return cur;
        return null;
      }));
      const winByCol = this.grid.reduce((prevRow, curRow) => {        
        if (curRow[0] && prevRow[0] === curRow[0]) return curRow;
        if (curRow[1] && prevRow[1] === curRow[1]) return curRow;
        if (curRow[2] && prevRow[2] === curRow[2]) return curRow;
        return [];
      });
      // const winByDiagonal = this.grid.reduce((prevRow, curRow) => {        
      //   if (curRow[1] && curRow[1] === prevRow[0]) return curRow;
      //   if (curRow[1] && prevRow[1] === curRow[1]) return curRow;
      //   if (curRow[2] && prevRow[2] === curRow[2]) return curRow;
      //   return [];
      // });
      if (winByRow) winner = winByRow[0];
      if (winByCol.length) winner = winByCol.find(cell => cell);
      console.log(winByCol);
      // const winByCol = this.grid.find(row => row.every(cell => cell));
      return winner;
    }
  }
};
</script>

<style lang="scss">
@import "~@/scss/vars";
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  background-color: $dark;
}
.app {
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  &__header {
    margin-bottom: 42px;
  }
  &__button {
    margin-bottom: 24px;
  }
}
.grid {
  display: grid;
  grid-template-columns: repeat(3, 128px);
  grid-template-rows: repeat(3, 128px);
  border: 2px solid $main-color;
  border-radius: 4px;
  justify-items: stretch;
  align-items: stretch;
}
</style>