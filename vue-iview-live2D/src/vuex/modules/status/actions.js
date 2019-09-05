import * as types from './mutation_type'; //引入变量
export default {
  actionFn({ commit }, data) { //actionFn是在组件通过dispatch触发的函数名 可以理解成组件和actions的连接
    commit(types.VUEX_TEST, data);
    //types.VUEX_TEST 是要commit到mutation的哪个位置 变量的作用
    //data 是传过来的参数
  },
  lodingFn({ commit }, data) {
    commit(types.VUEX_LODING, data);
  }
};
