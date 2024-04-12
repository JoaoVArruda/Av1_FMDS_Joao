<template>
  <v-card class="pa-4" height="100px"
    img="https://cdn.vuetifyjs.com/images/toolbar/map.jpg" flat color="black">
    <v-toolbar dense floating color="white">
      <v-text-field hide-details single-line v-model="mangaStore.newManga"
        @keypress.enter="mangaStore.add"
        placeholder="Inserir Manga" bg-color="white"></v-text-field>

      <v-tooltip text="Adicionar Manga">
        <template v-slot:activator="{ props }">
          <v-btn @click="mangaStore.add" icon v-bind="props" class="ml-2">
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