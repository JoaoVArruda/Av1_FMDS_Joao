<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <v-app id="inspire">
        <v-app-bar class="px-3 py-2" density="compact" flat
            color="blue-grey-darken-3">
            <v-tabs align-tabs="start">
                <v-tooltip v-for="link in links" :key="link" :text="link.name">
                    <template v-slot:activator="{ props }">
                        <v-tab v-bind="props" :to="link.to">
                            <v-icon>{{ link.icon }}</v-icon>
                        </v-tab>
                    </template>
                </v-tooltip>
            </v-tabs>
            <v-spacer></v-spacer>
        </v-app-bar>

        <v-main class="bg-grey-lighten-3">
            <v-container fluid>
                <v-row>
                    <v-col cols="12" md="8" class="mx-auto">
                        <router-view />
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script setup>
const links = [
    {
        name: 'Tarefas',
        icon: 'mdi-note-multiple-outline',
        tooltip: 'Tarefas',
        to: '/'
    },
    {
        name: 'Editar',
        icon: 'mdi-lead-pencil',
        tooltip: 'Editar Tarefas',
        to: '/edit'
    },
]
</script>
