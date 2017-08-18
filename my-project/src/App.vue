<template>
  <div id="app">
    <router-view></router-view>
    <div>ss={{ss}}</div>  
    <div>gg={{gg}}</div>
    <div>doubleCount_gg={{doubleCount}}</div>
    <div>mm={{mm}}</div>
    <div>increment={{mm}}</div>
    <div>aa={{aa}}</div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  name: 'app',
  data () {
    return {}
  },
  mounted () {
    // this.$store.commit('increment')
    this.add().then(ss => console.log(ss))
  },
  methods: {
    ...mapActions([
      'incrementAA'
    ]),
    ...mapMutations([
      'increment'
    ]),
    ...mapActions({
      add: 'incrementAA' // 映射 this.add() 为 this.$store.dispatch('increment')
    })
  },
  computed: {
    ...mapGetters([
      'doubleCount'
    ]),
    ...mapState({
      ss: state => state.module.ss,
      gg: state => state.module.gg,
      mm: state => state.module.mm,
      aa: state => state.module.aa
    })

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
