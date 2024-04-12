<template>
  <v-card class="pa-4" height="100px"
    img="https://cdn.vuetifyjs.com/images/toolbar/map.jpg" flat>
    <v-toolbar dense floating>
      <v-text-field hide-details single-line v-model="mangaStore.newManga"
        @keypress.enter="mangaStore.addManga"
        placeholder="Inserir Manga"></v-text-field>

      <v-tooltip text="Adicionar Manga">
        <template v-slot:activator="{ props }">
          <v-btn @click="mangaStore.addManga" icon v-bind="props" class="ml-2">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </template>
      </v-tooltip>
    </v-toolbar>
  </v-card>
</template>

<script setup>
import { useMangaStore } from '../stores/MangaStore.js'

const mangaStore = useMangaStore()
</script>../stores/MangaStore.js