<template>
    <div class="">
        <h1>Editar Tarefas</h1>

        <EditTaskBar />
        <v-select label="Filtrar Tarefas" :items='taskFilter'
            v-model="taskStore.activeFilter"></v-select>
        <ListApp type="edit" />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useTaskStore } from '../stores/TaskStore.js'
import EditTaskBar from '../components/EditTaskBar.vue';
import ListApp from '@/components/ListApp.vue';

const taskStore = useTaskStore()

const taskFilter = ref(['Todas', 'Concluidas', 'Pendentes'])

</script>
../stores/MangaStore.js