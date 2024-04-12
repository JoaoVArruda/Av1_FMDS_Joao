<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <v-app id="inspire">
       <v-tabs align-tabs="center" bg-color="black" color="white">
                <v-tooltip v-for="link in links" :key="link" :text="link.name">
                    <template v-slot:activator="{ on }">
                        <v-tab v-bind="on" :to="link.to">
                            <v-icon class="mr-2">{{ link.icon }}</v-icon>
                            {{ link.name }}
                        </v-tab>
                    </template>
                </v-tooltip>
            </v-tabs>
            <v-spacer></v-spacer>

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
        name: 'Editar Mangas',
        icon: 'mdi-lead-pencil',
        tooltip: 'Editar',
        to: '/edit'
    },
]
</script>
