<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodo="addTodo"></TodoInput>
    <TodoList v-bind:propsdata="todoItems" @removeTodo="removeTodo"></TodoList>
    <Count></Count>
    <Getter></Getter>
    <TodoFooter v-on:removeAll="clearAll"></TodoFooter>
  </div>
</template>

<script>
  import TodoHeader from "./components/TodoHeader";
  import TodoInput from "./components/TodoInput";
  import TodoList from "./components/TodoList";
  import TodoFooter from "./components/TodoFooter";
  import Count from "./components/common/Count";
  import {store} from "./store/store";
  import Getter from "./Components/common/Getter";

  export default {
    props: ['propsdata'],
    // "store" 옵션을 사용하여 저장소를 제공하십시오.
    // 그러면 모든 하위 컴포넌트에 저장소 인스턴스가 삽입됩니다.
    store,
    data() {
      return {
        todoItems: []
      }
    },
    created() {
      if (localStorage.length > 0) {
        for (var i=0; i<localStorage.length; i++) {
          this.todoItems.push(localStorage.key(i));
        }
      }
    },
    methods: {
      addTodo(todoItem) {
        localStorage.setItem(todoItem, todoItem);
        this.todoItems.push(todoItem);
      },
      clearAll() {
        localStorage.clear();
        this.todoItems = [];
      },
      removeTodo(todoItem, index) {
        localStorage.removeItem(todoItem);
        this.todoItems.splice(index, 1);
      }
    },
    components: {
      Getter,
      'TodoHeader': TodoHeader,
      'TodoInput': TodoInput,
      'TodoList': TodoList,
      'TodoFooter': TodoFooter,
      'Count': Count
    }
  }
</script>

<style>
  body {
    text-align: center;
    background-color: #F6F6F8;
  }
  input {
    border-style: groove;
    width: 200px;
  }
  button {
    border-style: groove;
  }
  .shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
  }
</style>
