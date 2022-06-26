<template>
    <v-container fluid>
        <v-row class="justify-center mt-1">
            <v-col cols="12" sm="10" lg="8" class="d-flex">
                <nuxt-link to="/" style="text-decoration: none">
                <v-icon large color="#0461ab">mdi-arrow-left</v-icon>
                </nuxt-link>
                <v-icon color="#fed82f" x-large class="mx-auto" style="transform: translateX(-20px);">mdi-medical-bag</v-icon>
            </v-col>

            <v-col cols="12" class="text-center">
                <h1>Get medical Assistance</h1>
            </v-col>
            <v-col cols="12" sm="10" lg="8" class="mx-auto">
                <p>
                    
                </p>
                <v-row>
                    <v-col cols="12" sm="12" lg="12">
                        <SocialLinks class="mt-3" />
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import SocialLinks from '../components/SocialLinks';

    export default {
        name: 'MedicalAssistancePage',
        components: {
            SocialLinks,
        },
    }
</script>
