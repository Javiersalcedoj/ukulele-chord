(function(){"use strict";var r={853:function(r,e,n){var t=n(963),i=n(252),o=n(577);const s=r=>((0,i.dD)("data-v-cf2b3216"),r=r(),(0,i.Cn)(),r),a=s((()=>(0,i._)("h1",null,"Study ukulele",-1))),f={class:"container"},l=(0,i.Uk)(" Change (s) "),h=(0,i.Uk)(" Render (s) ");function g(r,e,n,s,g,m){const c=(0,i.up)("visual-chord");return(0,i.wg)(),(0,i.iD)(i.HY,null,[a,(0,i._)("div",f,[(0,i._)("div",null,[(0,i._)("div",null,[(0,i._)("button",{onClick:e[0]||(e[0]=r=>m.selectChord("mayor"))},"Chord Mayor"),(0,i._)("button",{onClick:e[1]||(e[1]=r=>m.selectChord("menor"))},"Chord Menor"),(0,i._)("button",{onClick:e[2]||(e[2]=r=>m.selectChord("all"))},"ALL Chord")]),(0,i._)("div",null,[(0,i._)("button",{onClick:e[3]||(e[3]=(...r)=>m.startRamdom&&m.startRamdom(...r))},"startRamdom"),(0,i._)("button",{onClick:e[4]||(e[4]=(...r)=>m.startNormal&&m.startNormal(...r))},"startNomal")])]),(0,i._)("label",null,[l,(0,i.wy)((0,i._)("input",{type:"number","onUpdate:modelValue":e[5]||(e[5]=r=>g.timer.change=r)},null,512),[[t.nr,g.timer.change]])]),(0,i._)("label",null,[h,(0,i.wy)((0,i._)("input",{type:"number","onUpdate:modelValue":e[6]||(e[6]=r=>g.timer.render=r)},null,512),[[t.nr,g.timer.render]])]),(0,i.wy)((0,i._)("h2",null,(0,o.zw)(g.chord.name),513),[[t.F8,g.render.title]]),(0,i.wy)((0,i.Wm)(c,{chord:g.chord},null,8,["chord"]),[[t.F8,g.render.chord]])])],64)}const m={class:"visualChord"};function c(r,e,n,t,s,a){return(0,i.wg)(),(0,i.iD)("div",m,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.chord.representation,(r=>((0,i.wg)(),(0,i.iD)("div",{key:r,class:(0,o.C_)(r.type?r.type:"circle"),style:(0,o.j5)(a.defineUbication(r))},(0,o.zw)(r.finger),7)))),128)),((0,i.wg)(),(0,i.iD)(i.HY,null,(0,i.Ko)(15,(r=>(0,i._)("div",{key:r,class:"cell"}))),64))])}var d={name:"VisualChord",props:{chord:Object},methods:{defineUbication(r){const e=25*(r.fret-1)+5,n=25*(r.string-1)-8;return`left: ${n}px; top: ${e}px;`}}},u=n(744);const p=(0,u.Z)(d,[["render",c],["__scopeId","data-v-8162942a"]]);var b=p;const v=[{name:"Do",nameEnglish:"C",representation:[{string:4,fret:3,finger:"3"}]},{name:"Re",nameEnglish:"D",representation:[{string:1,fret:2,finger:"1"},{string:2,fret:2,finger:"2"},{string:3,fret:2,finger:"3"}]},{name:"Mi",nameEnglish:"E",representation:[{string:1,fret:1,finger:"1"},{string:4,fret:2,finger:"2"},{string:2,fret:4,finger:"4"}]},{name:"Fa",nameEnglish:"F",representation:[{string:1,fret:2,finger:"2"},{string:3,fret:1,finger:"1"}]},{name:"Sol",nameEnglish:"G",representation:[{string:2,fret:2,finger:"1"},{string:3,fret:3,finger:"3"},{string:4,fret:2,finger:"2"}]},{name:"La",nameEnglish:"A",representation:[{string:1,fret:2,finger:"2"},{string:2,fret:1,finger:"1"}]},{name:"Si",nameEnglish:"B",representation:[{string:1,fret:2,finger:"1",type:"line"},{string:1,fret:4,finger:"3"},{string:2,fret:3,finger:"2"}]}],y=[{name:"Do Menor",nameEnglish:"Cm",representation:[{string:4,fret:3,finger:"1"},{string:3,fret:3,finger:"1"},{string:2,fret:3,finger:"1"}]},{name:"Re Menor",nameEnglish:"Dm",representation:[{string:3,fret:1,finger:"1"},{string:1,fret:2,finger:"2"},{string:2,fret:2,finger:"3"}]},{name:"Mi Menor",nameEnglish:"Em",representation:[{string:4,fret:2,finger:"1"},{string:3,fret:3,finger:"2"},{string:2,fret:4,finger:"3"}]},{name:"FA Menor",nameEnglish:"Fm",representation:[{string:1,fret:1,finger:"1"},{string:3,fret:1,finger:"2"},{string:4,fret:3,finger:"4"}]},{name:"Sol Menor",nameEnglish:"Gm",representation:[{string:4,fret:1,finger:"1"},{string:2,fret:2,finger:"2"},{string:3,fret:3,finger:"3"}]},{name:"La Menor",nameEnglish:"Am",representation:[{string:1,fret:2,finger:"2"}]},{name:"Si Menor",nameEnglish:"Bm",representation:[{string:1,fret:2,finger:"1",type:"line"},{string:1,fret:4,finger:"3"}]}];var C={name:"App",components:{VisualChord:b},data(){return{chords:[],chord:{},ramdon:Number,startType:"",render:{title:!1,chord:!1},number:-1,timer:{change:10,render:3}}},watch:{chord(){this.render={title:!0,chord:!1},setTimeout((()=>{switch(!0){case"ramdom"===this.startType:this.startRamdom();break;case"normal"===this.startType:this.startNormal();break;default:break}}),this.timerMS.change),setTimeout((()=>{this.render.chord=!0}),this.timerMS.render)}},computed:{timerMS(){return{change:1e3*Number(this.timer.change),render:1e3*Number(this.timer.render)}}},methods:{selectChord(r){switch(!0){case"mayor"===r:this.chords=v;break;case"menor"===r:this.chords=y;break;case"all"===r:this.chords=[...v,...y];break;default:break}},startRamdom(){this.ramdomChord(),this.chord=this.chords[this.ramdon],this.startType="ramdom"},startNormal(){this.startType="normal",this.number<this.chords.length?this.number+=1:this.number=0,this.chord=this.chords[this.number]},ramdomChord(){const r=this.chords.length-1,e=Math.floor(Math.random()*(r-0+1));this.ramdon===e?this.ramdomChord():this.ramdon=e}}};const k=(0,u.Z)(C,[["render",g],["__scopeId","data-v-cf2b3216"]]);var _=k;(0,t.ri)(_).mount("#app")}},e={};function n(t){var i=e[t];if(void 0!==i)return i.exports;var o=e[t]={exports:{}};return r[t](o,o.exports,n),o.exports}n.m=r,function(){var r=[];n.O=function(e,t,i,o){if(!t){var s=1/0;for(h=0;h<r.length;h++){t=r[h][0],i=r[h][1],o=r[h][2];for(var a=!0,f=0;f<t.length;f++)(!1&o||s>=o)&&Object.keys(n.O).every((function(r){return n.O[r](t[f])}))?t.splice(f--,1):(a=!1,o<s&&(s=o));if(a){r.splice(h--,1);var l=i();void 0!==l&&(e=l)}}return e}o=o||0;for(var h=r.length;h>0&&r[h-1][2]>o;h--)r[h]=r[h-1];r[h]=[t,i,o]}}(),function(){n.d=function(r,e){for(var t in e)n.o(e,t)&&!n.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:e[t]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(r){if("object"===typeof window)return window}}()}(),function(){n.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)}}(),function(){var r={143:0};n.O.j=function(e){return 0===r[e]};var e=function(e,t){var i,o,s=t[0],a=t[1],f=t[2],l=0;if(s.some((function(e){return 0!==r[e]}))){for(i in a)n.o(a,i)&&(n.m[i]=a[i]);if(f)var h=f(n)}for(e&&e(t);l<s.length;l++)o=s[l],n.o(r,o)&&r[o]&&r[o][0](),r[o]=0;return n.O(h)},t=self["webpackChunkapp_ukulele"]=self["webpackChunkapp_ukulele"]||[];t.forEach(e.bind(null,0)),t.push=e.bind(null,t.push.bind(t))}();var t=n.O(void 0,[998],(function(){return n(853)}));t=n.O(t)})();
//# sourceMappingURL=app.3b3d611d.js.map