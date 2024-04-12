<template>
  <div class="list">
    <div v-for="task in taskStore.tasks" :key="task.id">
      <div class="list-item"
        v-if="taskStore.activeFilter === 'Todas' || taskStore.activeFilter === ''">
        <v-checkbox :label="task.title" v-model="task.completed" />
        <v-icon v-if="type === 'home'" class="delete-icon mb-5"
          @click="taskStore.deleteTask(task)">mdi-trash-can-outline</v-icon>
        <v-icon class="pen-icon mb-5" @click="taskStore.editTask(task)"
          v-else>mdi-pen</v-icon>
      </div>
      <div
        v-else-if="taskStore.activeFilter === 'Concluidas' && task.completed === true"
        class="list-item">
        <v-checkbox :label="task.title" v-model="task.completed" />
        <v-icon v-if="type === 'home'" class="delete-icon mb-5"
          @click="taskStore.deleteTask(task)">mdi-trash-can-outline</v-icon>
        <v-icon v-else class="pen-icon mb-5"
          @click="taskStore.editTask(task)">mdi-pen</v-icon>
      </div>
      <div class="list-item"
        v-else-if="taskStore.activeFilter === 'Pendentes' && !task.completed">
        <v-checkbox :label="task.title" v-model="task.completed" />
        <v-icon v-if="type === 'home'" class="delete-icon mb-5"
          @click="taskStore.deleteTask(task)">mdi-trash-can-outline</v-icon>
        <v-icon v-else class="pen-icon mb-5"
          @click="taskStore.editTask(task)">mdi-pen</v-icon>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useTaskStore } from '../stores/TaskStore.js'

const taskStore = useTaskStore()

const props = defineProps({
  type: String
})

</script>

<style>
.list {
  list-style: none;
  background-color: #fff;
  padding: 1.4rem 1rem 0;
  border-radius: 0.5rem;
}

.list-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #ccc;
}

.delete-icon {
  color: rgba(253, 0, 0, 0.926);
  cursor: pointer;
  transition: 0.2s;
}

.pen-icon {
  color: rgb(0, 112, 216);
  cursor: pointer;
  transition: 0.2s
}

.pen-icon:hover {
  color: rgb(0, 83, 160);
}

.delete-icon:hover {
  color: darkred;
}
</style>../stores/MangaStore.js