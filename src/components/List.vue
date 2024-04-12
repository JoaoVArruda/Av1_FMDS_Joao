<template>
  <div class="list">
    <div v-for="manga in mangaStore.mangas" :key="manga.id">
      <div class="list-item"
        v-if="mangaStore.activeFilter === 'Todos' || mangaStore.activeFilter === ''">
        <v-checkbox :label="manga.title" v-model="manga.completed" />
        <v-icon v-if="type === 'home'" class="delete-icon mb-5"
          @click="mangaStore.delete(manga)">mdi-close</v-icon>
        <v-icon class="pencil-icon mb-5" @click="mangaStore.edit(manga)"
          v-else>mdi-pencil</v-icon>
      </div>
      <div
        v-else-if="mangaStore.activeFilter === 'Lidos' && manga.completed === true"
        class="list-item">
        <v-checkbox :label="manga.title" v-model="manga.completed" />
        <v-icon v-if="type === 'home'" class="delete-icon mb-5"
          @click="mangaStore.delete(manga)">mdi-close</v-icon>
        <v-icon v-else class="pencil-icon mb-5"
          @click="mangaStore.edit(manga)">mdi-pencil</v-icon>
      </div>
      <div class="list-item"
        v-else-if="mangaStore.activeFilter === 'Para ler' && !manga.completed">
        <v-checkbox :label="manga.title" v-model="manga.completed" />
        <v-icon v-if="type === 'home'" class="delete-icon mb-5"
          @click="mangaStore.delete(manga)">mdi-close</v-icon>
        <v-icon v-else class="pencil-icon mb-5"
          @click="mangaStore.edit(manga)">mdi-pencil</v-icon>
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
  background-color: black;
  padding: 1.4rem 1rem 0;
  border-radius: 0.5rem;
  color: white;
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

.pencil-icon {
  color: rgba(0, 97, 189, 0.733);
  cursor: pointer;
  transition: 0.2s
}

.pencil-icon:hover {
  color: rgb(0, 83, 160);
}

.delete-icon:hover {
  color: rgb(118, 4, 4);
}
</style>../stores/MangaStore.js