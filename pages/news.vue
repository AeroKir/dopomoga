<template>
    <v-container fluid>
        <v-row class="justify-center mt-1">
            <v-col cols="12" sm="10" lg="8" class="d-flex">
                <nuxt-link :to="localePath('/')" style="text-decoration: none">
                    <v-icon large color="#0461ab">mdi-arrow-left</v-icon>
                </nuxt-link>
                <v-icon color="#fed82f" x-large class="mx-auto" style="transform: translateX(-20px);">mdi-newspaper-variant</v-icon>
            </v-col>

            <v-col cols="12" class="text-center">
                <h1>{{ $t('pages.news.title') }}</h1>
            </v-col>
            <v-col cols="12" sm="10" lg="8" class="mx-auto">
                <p>
                    
                </p>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: 'NewsPage',
        head() {
            return {
                title: this.$t('pages.news.title'),
            }
        },
    }
</script>
