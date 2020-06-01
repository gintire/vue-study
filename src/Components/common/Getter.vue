<template>
  <div>
    <p>{{doneTodosCount}}</p>
    <p>{{doneTodoInfo}}</p>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      doneTodosCount() {
        //return this.$store.state.todos.filter(todo => todo.done).length
        return this.$store.getters.doneTodosCount
      },
      doneTodoInfo() {
        return this.$store.getters.getTodoById(2)
      },
      // getter를 객체 전개 연산자 (Object Spread Operator)로 계산하여 추가한다.
      ...mapGetters({
        doneCount: 'doneTodosCount',
        doneInfo: 'doneTodoInfo',
      })
    }
      /*doneTodosCount() {
        return this.$store.state.todos.filter(todo => todo.done).length
      },
      doneTodoInfo() {
        return this.$store.getters.getTodoById(2)
      }*/
  }
</script>

<style scoped>

</style>
