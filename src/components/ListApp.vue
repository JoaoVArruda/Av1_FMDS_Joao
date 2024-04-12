<template>
  <div class="list">
    <div v-for="manga in mangaStore.mangas" :key="manga.id">
      <div class="list-item"
        v-if="mangaStore.activeFilter === 'Todos' || mangaStore.activeFilter === ''">
        <v-checkbox :label="manga.title" v-model="manga.completed" />
        <v-icon v-if="type === 'home'" class="delete-icon mb-5"
          @click="mangaStore.deleteManga(manga)">mdi-trash-can-outline</v-icon>
        <v-icon class="pen-icon mb-5" @click="mangaStore.editManga(manga)"
          v-else>mdi-pen</v-icon>
      </div>
      <div
        v-else-if="mangaStore.activeFilter === 'Lidos' && manga.completed === true"
        class="list-item">
        <v-checkbox :label="manga.title" v-model="manga.completed" />
        <v-icon v-if="type === 'home'" class="delete-icon mb-5"
          @click="mangaStore.deleteManga(manga)">mdi-trash-can-outline</v-icon>
        <v-icon v-else class="pen-icon mb-5"
          @click="mangaStore.editManga(manga)">mdi-pen</v-icon>
      </div>
      <div class="list-item"
        v-else-if="mangaStore.activeFilter === 'Para ler' && !manga.completed">
        <v-checkbox :label="manga.title" v-model="manga.completed" />
        <v-icon v-if="type === 'home'" class="delete-icon mb-5"
          @click="mangaStore.deleteManga(manga)">mdi-trash-can-outline</v-icon>
        <v-icon v-else class="pen-icon mb-5"
          @click="mangaStore.editManga(manga)">mdi-pen</v-icon>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMangaStore } from '../stores/MangaStore.js'

const mangaStore = useMangaStore()

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