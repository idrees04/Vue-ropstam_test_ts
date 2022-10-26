<script setup lang="ts">
// import { v4 as uuidv4 } from 'uuid';
import { ref, onMounted } from 'vue';
import { addTask, removeTodo } from '../stores/store';
import { useDispath, useSelector } from '../helpers';
// import HelloWorld from './components/HelloWorld.vue';

const dispatch = useDispath();
const todos = useSelector((state) => state.todos);

const addtsk = () => {
  dispatch(addTask('Hello world'));
};
const remove = () => {
  // console.log(removeTodo());
  dispatch(removeTodo());
};
onMounted(() => {
  console.log('sdf');
});

</script>

<template>
  <div>
    <button type="submit" @click="addtsk">Add state</button>
    <ul class="list-group">
      <li
        v-for="(item, index) in todos.todoList"
        ref="itemRefs"
        :key="index"
        class="list-group-item"
      >
        <div class="list-group-item d-flex justify-content-between">
          <div class="p-2 bd-highlight align-items-start">
            <p>{{ item }}</p>
          </div>
          <div class="p-2 bd-highlight align-items-end">
            <button type="submit" @click="remove">X {{ index }}</button>
          </div>
        </div>
      </li>
    </ul>
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
