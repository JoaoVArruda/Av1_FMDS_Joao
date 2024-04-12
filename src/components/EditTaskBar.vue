<template>
  <v-card class="pa-4" height="100px"
    img="https://cdn.vuetifyjs.com/images/toolbar/map.jpg" flat>
    <v-toolbar dense floating v-if="taskStore.editedTask">
      <v-text-field hide-details single-line
        v-model="taskStore.editedTask.title"
        @keypress.enter="taskStore.saveEdit" placeholder="Editar Tarefa"
        :readonly="taskStore.editedIndex === -1"></v-text-field>
      <v-tooltip text="Salvar">
        <template v-slot:activator="{ props }">
          <v-btn icon v-bind="props" @click="taskStore.saveEdit"
            class="ml-2 save-icon">
            <v-icon>mdi-content-save-check-outline</v-icon>
          </v-btn>
        </template>
      </v-tooltip>
      <v-tooltip text="Cancelar">
        <template v-slot:activator="{ props }">
          <v-btn @click="taskStore.cancelEdit" icon v-bind="props"
            class="ml-2 cancel-icon">
            <v-icon>mdi-cancel</v-icon>
          </v-btn>
        </template>
      </v-tooltip>
    </v-toolbar>
    <v-toolbar dense floating v-else>
      <v-text-field hide-details single-line
        :model-value="taskStore.editedTask.title"
        @keypress.enter="taskStore.addTask" disabled
        placeholder="Nova Tarefa"></v-text-field>
    </v-toolbar>
  </v-card>
</template>

<script setup>
import { useTaskStore } from '../stores/TaskStore.js'

const taskStore = useTaskStore()
</script>

<style>
.save-icon {
  color: green
}

.cancel-icon {
  color: red
}
</style>