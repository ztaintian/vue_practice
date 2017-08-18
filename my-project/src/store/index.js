import Vuex from 'vuex'
import Vue from 'vue'
import createLogger from 'vuex/dist/logger'
import moduleA from './state'
Vue.use(Vuex)
// const logger = createLogger({
//   collapsed: false, // 自动展开记录的 mutation
//   filter (mutation, stateBefore, stateAfter) {
//     // 若 mutation 需要被记录，就让它返回 true 即可
//     // 顺便，`mutation` 是个 { type, payload } 对象
//     return mutation.type !== 'aBlacklistedMutation'
//   },
//   // transformer (state) {
//   //   // 在开始记录之前转换状态
//   //   // 例如，只返回指定的子树
//   //   console.log(state)
//   //   return state.subTree
//   // },
//   mutationTransformer (mutation) {
//     // mutation 按照 { type, payload } 格式记录
//     // 我们可以按任意方式格式化
//     return mutation.type
//   }
// })
const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  plugins: [createLogger({ collapsed: false })],
  modules: { a: moduleA }
})
export default store
