<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="">
        <h1>Lista de Mangas</h1>

        <Manga />
        <v-select label="Filtrar Mangas" :items='mangaFilter'
            v-model="mangaStore.activeFilter"></v-select>
        <List type="home" />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useMangaStore } from '../stores/MangaStore.js'
import Manga from '../components/Manga.vue'
import List from '@/components/List.vue';

const mangaStore = useMangaStore()

const mangaFilter = ref(['Todos', 'Lidos', 'Para ler'])


</script>

<style>
.list {
    list-style: none;
    background-color: #373a37;
    padding: 1.4rem 1rem 0;
    border-radius: 0.5rem;
    color: rgb(255, 255, 255);
}

.list-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid #ffffff;
}

.delete-icon {
    color: rgba(214, 15, 15, 0.599);
    cursor: pointer;
    transition: 0.2s;
}

.delete-icon:hover {
    color: rgb(118, 4, 4);
}
</style>../stores/MangaStore.js../components/Manga.vue/index.js