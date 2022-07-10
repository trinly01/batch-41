<template>
  <div>
    <q-toolbar class="bg-primary text-white">
      <q-btn flat round dense icon="menu" class="q-mr-sm" />
      <q-avatar>
        <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
      </q-avatar>

      <q-toolbar-title>Batch 41 Todo App</q-toolbar-title>

      <q-btn flat round dense icon="whatshot" />
    </q-toolbar>
    <div class="row q-pa-md q-gutter-sm">
      <q-input class="col" v-model="todo" @keyup.enter="add" clearable />
      <!-- <q-btn icon="save" label="add" /> -->
    </div>
    <q-tabs
      v-model="tab"
      inline-label
      class="bg-purple text-white shadow-2"
    >
      <q-tab name="" label="all" />
      <q-tab name="active" label="active" />
      <q-tab name="completed" label="completed" />
    </q-tabs>
    <q-list bordered separator>
      <q-item clickable v-ripple v-for="(task, i) in todosByStatus" :key="task._id">
        <q-item-section avatar>
          <q-checkbox v-model="task.isDone" />
        </q-item-section>
        <q-item-section :class="{ 'done text-grey': task.isDone }">
          {{i}} {{ task.desc }}
        </q-item-section>
        <q-item-section side>
          <q-btn flat dense round icon="delete" @click="remove(i)" color="red" />
        </q-item-section>
      </q-item>
    </q-list>
    <div>
      {{ itemsLeft }} item/s left <q-btn label="clear completed" @click="clearCompleted" />
    </div>
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
import { ref, computed } from 'vue'

const tab = ref('')

const todo = ref('test')
const todos = ref([
  {
    _id: Date.now(),
    desc: 'create add function',
    isDone: false
  }
])

const activeTodos = computed(() => todos.value.filter(t => !t.isDone))
const completedTasks = computed(() => todos.value.filter(t => t.isDone))

const todosByStatus = computed(() => {
  switch (tab.value) {
    case 'active':
      return activeTodos.value
    case 'completed':
      return completedTasks.value
    default:
      return todos.value
  }
})

const itemsLeft = computed(() => activeTodos.value.length)

function clearCompleted () {
  todos.value = activeTodos.value
}

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

<style scoped>

.done {
  text-decoration: line-through;
  /* color: gray; */
}

</style>
