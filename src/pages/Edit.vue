<template>
    <div class="">
        <h1>Editar Mangas</h1>

        <EditManga />
        <v-select label="Filtrar Mangas" :items='mangaFilter'
            v-model="mangaStore.activeFilter"></v-select>
        <List type="edit" />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useMangaStore } from '../stores/MangaStore.js'
import EditManga from '../components/EditManga.vue';
import List from '@/components/List.vue';

const mangaStore = useMangaStore()

const mangaFilter = ref(['Todos', 'Lidos', 'Para ler'])

</script>
../stores/MangaStore.js