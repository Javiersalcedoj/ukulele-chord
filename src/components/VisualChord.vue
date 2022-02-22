<template>
  <div class="visualChord">
    <template v-for="i in chord.representation" :key="i">
      <div 
        :class="!i.type ? 'circle': i.type"
        :style="defineUbication(i)"
      >
        {{i.finger}}
      </div>
    </template>

    <template v-for="i in 15" :key="i">
      <div class="cell"></div>
    </template>
  </div>
</template>
<script>
export default {
  name: 'VisualChord',
  props: {
    chord: Object,
  },

  methods: {
    defineUbication(el){
      const flet =  ((el.fret - 1) * 25) + 5;
      const string = ((el.string - 1) * 25) - 8;
      return `left: ${string}px; top: ${flet}px;`
    }
  }
}
</script>

<style lang="scss" scoped>
  .visualChord {
    position: relative;
    display: grid;
    grid-template-columns: repeat(3, 25px);
    grid-template-rows: repeat(5, 25px);
    width: 75px;
    border-left: 1px solid black;
    border-top: 4px solid black;
    .cell {
      border-right: 1px solid black;
      border-bottom: 1px solid black;
    }
    .circle {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background-color: yellowgreen;
      font-size: 12px;
    }
    .line {
      position: absolute;
      top: 40px;
      left: -10%;
      width: 120%;
      height: 10px;
      margin: 2.5px 0;
      border-radius: 100px;
      background-color: yellowgreen;
      font-size: 8px;
    }
  }
</style>