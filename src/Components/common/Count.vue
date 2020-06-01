<template>
  <!-- 뷰
  상태의 선언적 매핑-->
    <div>
      {{count}}
      <button @click="increase">증가</button>
    </div>
</template>

<script>
import {mapActions, mapMutations, mapState} from 'vuex'

export default {
  data() {
    return {
      localCount: 4
    }
  },
  computed: {
    ...mapState({
      // 화살표 함수는 코드를 매우 간결하게 만들어 준다.
      /*count: state => state.count,

      // 문자열 값 'count'를 전달하는 것은 'state => state.count'와 같다.
      countAlias: 'count',

      // 'this'를 사용하여 로컬 상태에 액세스하려면 일반적인 함수를 사용해야 한다.
      countPlusLocalState (state) {
        return state.count + this.localCount
      }*/
      count: state => state.a.count
    })
  },
  count() {
    return this.$store.state.count
  },
  methods: {
    increase() {
      /*this.$store.commit('increment', {
        amount: 10
      })*/
      /*this.$store.dispatch('incrementAsync', {
        amount: 10
      })*/
      //this.incrementBy(10)
      this.$store.dispatch('actionB')
    },
    ...mapMutations([
      'increment' // this.increment()를 this.$store.commit('increment')와 매핑
    ]),
    ...mapMutations({
      add: 'increment'  // this.add()를 this.$store.commit('increment')에 매핑
    }),
    ...mapActions([
      'increment', // this.increment()을 this.$store.dispatch('increment')에 매핑

      // mapActions는 페이로드를 지원합니다.
      'incrementBy' // this.incrementBy(amount)를 this.$store.dispatch('incrementBy', amount)에 매핑
    ])
  }
}
</script>

<style scoped>

</style>
