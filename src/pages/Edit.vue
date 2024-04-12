<template>
    <div class="">
        <h1>Editar Mangas</h1>

        <EditTaskBar />
        <v-select label="Filtrar Mangas" :items='mangaFilter'
            v-model="mangaStore.activeFilter"></v-select>
        <ListApp type="edit" />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useMangaStore } from '../stores/MangaStore.js'
import EditTaskBar from '../components/EditTaskBar.vue';
import ListApp from '@/components/ListApp.vue';

const mangaStore = useMangaStore()

const mangaFilter = ref(['Todos', 'Lidos', 'Para ler'])

</script>
../stores/MangaStore.js