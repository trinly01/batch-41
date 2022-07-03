<template>
  <div>
    <h4>Hello Batch 41</h4>
    <h4 class="blue-color backg-black">Hello Batch 42 {{ todo }}</h4>
    <input v-model="todo" type="text" placeholder="What needs to be done?" @keyup.enter="add">
    <button @click="add" >add</button>
    <button @click="clearTodo">clear text</button>
    <ul>
      <li v-for="(task, i) in todos" :key="task._id">
        {{i}} {{ task.desc }}
        <button @click="remove(i)">x</button>
      </li>
    </ul>
  </div>
</template>

<style>
h4 {
  color: pink;
}
.blue-color {
  color:aqua;
}
.backg-black {
  background-color:black;
}
</style>

<script setup>
import { ref } from 'vue'

const todo = ref('test')
const todos = ref([
  {
    _id: Date.now(),
    desc: 'create add function',
    isDone: false
  }
])

function clearTodo () {
  todo.value = ''
}

function add () {
  todos.value.unshift({
    _id: Date.now(),
    desc: todo.value,
    isDone: false
  })
  clearTodo()
}

function remove (i) {
  todos.value.splice(i, 1)
}

</script>
