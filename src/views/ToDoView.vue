<script setup lang="ts">
// import { v4 as uuidv4 } from 'uuid';
import { addTask, removeTodo } from '../stores/store';
import { useDispath, useSelector } from '../helpers';
// import HelloWorld from './components/HelloWorld.vue';

const dispatch = useDispath();
const todos = useSelector((state) => state.todos);

const addtsk = () => {
  dispatch(addTask('Hello world'));
};
const remove = () => {
  dispatch(removeTodo());
};
</script>

<template>
  <div>
    <button type="submit" @click="addtsk">Add state</button>
    <ol>
      <li v-for="(item, idx) in todos.todoList" :key="idx">
        {{ item }}
        <button type="submit" @click="remove"> X </button>
      </li>
    </ol>
    <!-- <hello-world msg="ldldl" /> -->
  </div>
</template>

<style fouce>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
