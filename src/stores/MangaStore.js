import { defineStore } from 'pinia'

export const useMangaStore = defineStore('manga', {
  state: () => ({
    newManga: '',
    editedIndex: -1,
    editedManga: {
      id: -1,
      title: '',
      completed: false,
    },
    defaultManga: {
      id: -1,
      title: '',
      completed: false,
    },
    editedId: -1,
    activeFilter: 'Todos',
    mangas: [
      {
          "id": 1,
          "title": "Soul Eater",
          "completed": false
      },
      {
          "id": 2,
          "title": "One Piece",
          "completed": true
      },
      {
          "id": 3,
          "title": "Bleach",
          "completed": true
      },
      {
          "id": 4,
          "title": "Death Note",
          "completed": false
      },
      {
          "id": 5,
          "title": "Blue Lock",
          "completed": false
      },
      {
          "id": 6,
          "title": "Fool Night",
          "completed": true
      },
      {
          "id": 7,
          "title": "Dungeon Meshi",
          "completed": true
      },
  ],
  }),
  actions: {
    addManga() {
      if(this.newManga) {
        this.mangas.push({
          "id": this.mangas.length + 1,
          "title": this.newManga,
          "completed": false
        })
        this.newManga = ''
      } else {
        return
      }
    },
    deleteManga(manga) {
      this.mangas = this.mangas.filter(m => m.id !== manga.id)
    },
    editManga(manga) {
      this.editedManga = Object.assign({}, manga)
      this.editedIndex = this.mangas.indexOf(manga)
      focus('newManga')
    },
    saveEdit() {
      Object.assign(this.mangas[this.editedIndex], this.editedManga)     
      this.editedManga = Object.assign({}, this.defaultManga) 
      this.editedIndex = -1
    },
    cancelEdit() {
      this.editedManga = Object.assign({}, this.defaultManga)
      this.editedIndex = -1
    }
  }
})