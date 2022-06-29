<template>
    <v-container fluid>
        <v-row class="justify-center mt-1">
            <v-col cols="12" sm="10" lg="8" class="d-flex">
                <nuxt-link :to="localePath('/')" style="text-decoration: none">
                    <v-icon large color="#0461ab">mdi-arrow-left</v-icon>
                </nuxt-link>
                <v-icon color="#fed82f" x-large class="mx-auto" style="transform: translateX(-20px);">mdi-medical-bag</v-icon>
            </v-col>

            <v-col cols="12" class="text-center">
                <h1>{{ $t('pages.medicalAssistance.title') }}</h1>
            </v-col>
            <v-col cols="12" sm="10" lg="8" class="mx-auto">
                <section class="mb-7">
                    <h2>{{ $t('pages.medicalAssistance.infoParagraph.subtitle1') }}</h2>
                    <p>{{ $t('pages.medicalAssistance.infoParagraph.infoBlock1') }}</p>

                    <h2>{{ $t('pages.medicalAssistance.infoParagraph.subtitle2') }}</h2>
                    <p>{{ $t('pages.medicalAssistance.infoParagraph.infoBlock2') }}</p>

                    <h2>{{ $t('pages.medicalAssistance.infoParagraph.subtitle3') }}</h2>
                    <p>{{ $t('pages.medicalAssistance.infoParagraph.infoBlock3') }}</p>
                    <ul class="mb-4">
                        <li>{{ $t('pages.medicalAssistance.infoParagraph.listItem1') }}</li>
                        <li>{{ $t('pages.medicalAssistance.infoParagraph.listItem2') }}</li>
                        <li>{{ $t('pages.medicalAssistance.infoParagraph.listItem3') }}</li>
                    </ul>

                    <h2>{{ $t('pages.medicalAssistance.infoParagraph.subtitle4') }}</h2>
                    <p>{{ $t('pages.medicalAssistance.infoParagraph.infoBlock4') }}</p>

                    <h2>{{ $t('pages.medicalAssistance.infoParagraph.subtitle5') }}</h2>
                    <p>{{ $t('pages.medicalAssistance.infoParagraph.infoBlock5') }}</p>
                </section>
                
                <v-row class="mb-5">
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
