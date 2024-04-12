<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="">
        <h1>Tarefas</h1>

        <TaskBar />
        <v-select label="Filtrar Tarefas" :items='taskFilter'
            v-model="taskStore.activeFilter"></v-select>
        <ListApp type="home" />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useTaskStore } from '../stores/TaskStore.js'
import TaskBar from '../components/TaskBar.vue'
import ListApp from '@/components/ListApp.vue';

const taskStore = useTaskStore()

const taskFilter = ref(['Todas', 'Concluidas', 'Pendentes'])

const activeFilter = ref('Todas')


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

.delete-icon:hover {
    color: darkred;
}
</style>