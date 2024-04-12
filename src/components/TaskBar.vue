<template>
  <v-card class="pa-4" height="100px"
    img="https://cdn.vuetifyjs.com/images/toolbar/map.jpg" flat>
    <v-toolbar dense floating>
      <v-text-field hide-details single-line v-model="taskStore.newTask"
        @keypress.enter="taskStore.addTask"
        placeholder="Nova Tarefa"></v-text-field>

      <v-tooltip text="Adicionar Tarefa">
        <template v-slot:activator="{ props }">
          <v-btn @click="taskStore.addTask" icon v-bind="props" class="ml-2">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </template>
      </v-tooltip>
    </v-toolbar>
  </v-card>
</template>

<script setup>
import { useTaskStore } from '../stores/TaskStore.js'

const taskStore = useTaskStore()
</script>../stores/MangaStore.js