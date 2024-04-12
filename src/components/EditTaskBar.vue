<template>
  <v-card class="pa-4" height="100px"
    img="https://cdn.vuetifyjs.com/images/toolbar/map.jpg" flat>
    <v-toolbar dense floating v-if="mangaStore.editedManga">
      <v-text-field hide-details single-line
        v-model="mangaStore.editedManga.title"
        @keypress.enter="mangaStore.saveEdit" placeholder="Editar Manga"
        :readonly="mangaStore.editedIndex === -1"></v-text-field>
      <v-tooltip text="Salvar">
        <template v-slot:activator="{ props }">
          <v-btn icon v-bind="props" @click="mangaStore.saveEdit"
            class="ml-2 save-icon">
            <v-icon>mdi-content-save-check-outline</v-icon>
          </v-btn>
        </template>
      </v-tooltip>
      <v-tooltip text="Cancelar">
        <template v-slot:activator="{ props }">
          <v-btn @click="mangaStore.cancelEdit" icon v-bind="props"
            class="ml-2 cancel-icon">
            <v-icon>mdi-cancel</v-icon>
          </v-btn>
        </template>
      </v-tooltip>
    </v-toolbar>
    <v-toolbar dense floating v-else>
      <v-text-field hide-details single-line
        :model-value="mangaStore.editedManga.title"
        @keypress.enter="mangaStore.addManga" disabled
        placeholder="Inserir Manga"></v-text-field>
    </v-toolbar>
  </v-card>
</template>

<script setup>
import { useMangaStore } from '../stores/MangaStore.js'

const mangaStore = useMangaStore()
</script>

<style>
.save-icon {
  color: green
}

.cancel-icon {
  color: red
}
</style>../stores/MangaStore.js