<template>
    <div class="">
        <br>
        <h1 style="text-align: center;">Editar Mangas</h1>
        <br>
        <EditManga />
        <v-select label="Filtros" :items='mangaFilter'
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