<template>
  <h1>Study ukulele</h1>
  <div class="container">
    <button @click="startRamdom">startRamdom</button>
    <button @click="startNormal">startNomal</button>
    <h2 v-show="render.title">{{chord.name}}</h2>
    <visual-chord :chord="chord" v-show="render.chord"></visual-chord>
  </div>
</template>

<script>
import VisualChord from './components/VisualChord.vue'

import {chordsMayor} from './chords.js';

export default {
  name: 'App',
  components: {
    VisualChord
  },
  data() {
    return {
      chord: {},
      ramdon: Number,
      startType: '',
      render: {
        title: false,
        chord: false,
      },
      number: -1,
    }
  },
  watch: {
    chord(){
      this.render = {title: true, chord: false,}
      setTimeout(()=>{
        switch (true) {
          case this.startType ===  'ramdom':
              this.startRamdom();
            break;
          case this.startType ===  'normal':
              this.startNormal();
            break;
          default:
            break;
        }
      }, 10000)
      setTimeout(()=> {
        this.render.chord = true;
      }, 1500)
    }
  },

  methods: {
    startRamdom(){
      this.ramdomChord();
      this.chord =  chordsMayor[this.ramdon]
      this.startType = 'ramdom'
    },

    startNormal() {
      this.startType = 'normal';

      if(this.number < chordsMayor.length) {
        this.number += 1; 
      } else {
        this.number = 0
      }
      this.chord =  chordsMayor[this.number]
    },

    ramdomChord(){
      const i = chordsMayor.length - 1;
      const ramdomChord =  Math.floor((Math.random() * (i - 0 + 1)))
      if (this.ramdon === ramdomChord) {
        this.ramdomChord();
      } else {
        this.ramdon =  ramdomChord;
      }
    },
  }


}
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
  }
</style>

