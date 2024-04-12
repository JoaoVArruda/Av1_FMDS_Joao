<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <v-app id="inspire">
        <v-app-bar class="px-3 py-2" density="compact" flat
            color="black">
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

        <v-main class="bg-black">
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
        name: 'Mangas',
        icon: 'mdi-book-open-variant',
        tooltip: 'Mangas',
        to: '/'
    },
    {
        name: 'Editar',
        icon: 'mdi-lead-pencil',
        tooltip: 'Editar Mangas',
        to: '/edit'
    },
]
</script>
