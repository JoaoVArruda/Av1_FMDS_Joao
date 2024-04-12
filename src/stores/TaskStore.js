import { defineStore } from 'pinia'

export const useTaskStore = defineStore('task', {
  state: () => ({
    newTask: '',
    editedIndex: -1,
    editedTask: {
      id: -1,
      title: '',
      completed: false,
    },
    defaultTask: {
      id: -1,
      title: '',
      completed: false,
    },
    editedId: -1,
    activeFilter: 'Todas',
    tasks: [
      {
          "id": 1,
          "title": "Estudar vue",
          "completed": false
      },
      {
          "id": 2,
          "title": "Sofrer",
          "completed": true
      },
  ],
  }),
  actions: {
    addTask() {
      if(this.newTask) {
        this.tasks.push({
          "id": this.tasks.length + 1,
          "title": this.newTask,
          "completed": false
        })
        this.newTask = ''
      } else {
        return
      }
    },
    deleteTask(task) {
      this.tasks = this.tasks.filter(t => t.id !== task.id)
    },
    editTask(task) {
      this.editedTask = Object.assign({}, task)
      this.editedIndex = this.tasks.indexOf(task)
      focus('newTask')
    },
    saveEdit() {
      Object.assign(this.tasks[this.editedIndex], this.editedTask)     
      this.editedTask = Object.assign({}, this.defaultTask) 
      this.editedIndex = -1
    },
    cancelEdit() {
      this.editedTask = Object.assign({}, this.defaultTask)
      this.editedIndex = -1
    }
  }
})