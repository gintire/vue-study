// store.js
import Vue from 'vue';
import Vuex from 'vuex';
import { SOME_MUTATION } from "./mutation-types";

Vue.use(Vuex);
const moduleA = {
  state: () => ({
    count: 0,
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ]
  }),
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    getTodoById: (state) => (id) => {
      return state.todos.find(todo => todo.id === id)
    },
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length
    },
    sumWithRootCount (state, getters, rootState) {
      return state.count + rootState.count
    }
  },
  mutations: {
    increment (state) {
      state.count++;
    },
    incrementBy (state, amount) {
      state.count+= amount;
    },
    [SOME_MUTATION] (state) {
      // 변이 상태
    }
  },
  actions: {
    /*increment (context) {
      context.commit('increment')
    }*/
    incrementBy ({ commit }, amount) {
      setTimeout(() => {
        commit('incrementBy', amount)
      }, 1000)
    },
    // getData() 및 getOtherData()가 Promise를 반환한다고 가정합니다.
    actionA ({ commit }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('increment')
          resolve()
        }, 1000)
      })
    },
    actionB ({ dispatch, commit}) {
      return dispatch('actionA').then(() => {
        commit('incrementBy', 2)
      })
    },
    // getData() 및 getOtherData()가 Promise를 반환한다고 가정합니다.
    /*async actionA ({ commit }) {
      commit('gotData', await getData())
    },
    async actionB ({ dispatch, commit }) {
      await dispatch('actionA') // actionA가 끝나기를 기다립니다.
      commit('gotOtherData', await getOtherData())
    }*/
    incrementIfOddOnRootSum ({ state, commit, rootState }) {
      if ((state.count + rootState.count) % 2 === 1) {
        commit('increment')
      }
    }
  }
}
const moduleB = {

}
export const store = new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB,
    /*account: {
      namespaced: true,
      // 모듈 자산
      //state: () => ({ ... }), // 모듈 상태는 이미 중첩되어 있고, 네임스페이스 옵션의 영향을 받지 않음
      getters: {
        //isAdmin () { ... } // -> getters['account/isAdmin']
      },
      actions: {
        //login () { ... } // -> dispatch('account/login')
      },
      mutations: {
        //login () { ... } // -> commit('account/login')
      },

      // 중첩 모듈
      modules: {
        // 부모 모듈로부터 네임스페이스를 상속받음
        myPage: {
          //state: () => ({...}),
          getters: {
            //profile() { ...
            //} // -> getters['account/profile']
          }
        },

        // 네임스페이스를 더 중첩
        posts: {
          namespaced: true,

          //state: () => ({...}),
          getters: {
            //popular() { ...
            //} // -> getters['account/posts/popular']
          }
        }
      }
    }*/
  }
})
